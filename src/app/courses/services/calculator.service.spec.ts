import { CalculatorService } from './calculator.service';
describe('CalculatorService', () => {
    let calculator: CalculatorService,
        loggerSpy: any;
    beforeEach(function initiate() {
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        calculator = new CalculatorService(loggerSpy);
    });
    it('should add two numbers', () => {
        const result = calculator.add(2, 2);
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    })
    it('should substract two numbers', () => {
        const result = calculator.subtract(4, 2);
        expect(result).toBe(2);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    })
});