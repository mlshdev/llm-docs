> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertgreaterthanorequal](https://developer.apple.com/documentation/xctest/xctassertgreaterthanorequal)

# XCTAssertGreaterThanOrEqual

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that the value of the first expression is greater than or equal to the value of the second expression.

## Declaration

```objectivec
#define XCTAssertGreaterThanOrEqual(expression1, expression2, ...)
```

## Parameters

- `expression1`: An expression of C scalar type.
- `expression2`: An expression of C scalar type.
- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

This function generates a failure when `expression1 < expression2`.

## See Also

### Tests for Comparable Values

- [XCTAssertGreaterThan](xctassertgreaterthan.md): Asserts that the value of the first expression is greater than the value of the second expression.
- [XCTAssertLessThanOrEqual](xctassertlessthanorequal.md): Asserts that the value of the first expression is less than or equal to the value of the second expression.
- [XCTAssertLessThan](xctassertlessthan.md): Asserts that the value of the first expression is less than the value of the second expression.
