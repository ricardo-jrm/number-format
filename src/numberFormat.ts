import numeral from 'numeral';

/**
 * Format numbers using `numeraljs`
 */
export const numberFormat = (num: number, format?: string) => {
  if (!format) {
    return numeral(num).format('0,0');
  }

  return numeral(num).format(format);
};
