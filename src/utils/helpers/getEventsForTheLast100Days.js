import { getMs, normalizeDate, subtractDaysFromNowDate } from './dates.helpers';

export const getEventsForTheLast100Days = (events) => {
  const dateOneHundredDaysAgoInMs = getMs(subtractDaysFromNowDate(100));
  const suitableEvents = [];

  for (const event of events) {
    if (getMs(event.from) > dateOneHundredDaysAgoInMs) {
      suitableEvents.push({ ...event });
      continue;
    }

    if (getMs(event.till) > dateOneHundredDaysAgoInMs) {
      suitableEvents.push({
        ...event,
        from: normalizeDate(dateOneHundredDaysAgoInMs),
      });
    }
  }

  return suitableEvents;
};