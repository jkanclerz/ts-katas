import { PriceCalculator,ItemPrice, CalcRequest} from './pricing';

describe('allow calculate pricing based on input', () => {
    it('calculate gross based on nett + tax', () => {
      const calc = new PriceCalculator();
      const calculationRequest = {
        netto: 100,
        gross: null,
        tax: 0.23 
      }

      const res = calc.calculate(calculationRequest)
      expect(res instanceof ItemPrice).toBeTruthy();
      expect(res.netto()).toBe(100.00);
      expect(res.gross()).toBe(123.00);
      expect(res.tax()).toBe(0.23);
    });

    it('calculate nett based on gross', () => {
      const calc = new PriceCalculator();
      const calculationRequest = {
        netto: null,
        gross: 123,
        tax: 0.23 
      }

      const res = calc.calculate(calculationRequest)
      expect(res instanceof ItemPrice).toBeTruthy();
      expect(res.netto()).toBe(100.00);
      expect(res.gross()).toBe(123.00);
      expect(res.tax()).toBe(0.23);
    });
});