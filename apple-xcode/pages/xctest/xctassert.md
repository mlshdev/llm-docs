> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassert](https://developer.apple.com/documentation/xctest/xctassert)

# XCTAssert

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that an expression is true.

## Declaration

```objectivec
#define XCTAssert(expression, ...)
```

## Parameters

- `expression`: An expression of Boolean type.
- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

This function generates a failure when `expression == false` and is equivalent to [XCTAssertTrue](xctasserttrue.md).

## See Also

### Tests for True Conditions

- [XCTAssertTrue](xctasserttrue.md): Asserts that an expression is true.
