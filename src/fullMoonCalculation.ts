import { AstroTime, SearchMoonQuarter, NextMoonQuarter } from 'astronomy-engine';

export const getFullMoonForMonth = (year: number, month: number): string => {
  const startingDate = new Date(year, month - 1, 1);
  const astroTime = new AstroTime(startingDate);
  const firstMoonQuarter = SearchMoonQuarter(astroTime);
  let fullMoonQuarter = firstMoonQuarter;

  while (fullMoonQuarter.quarter !== 2) {
    fullMoonQuarter = NextMoonQuarter(fullMoonQuarter);
  }

  const fullMoonDate = fullMoonQuarter.time.date;
  return fullMoonDate.toLocaleDateString('en-GB'); // Return in DD/MM/YYYY format
};
