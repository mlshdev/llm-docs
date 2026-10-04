> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-4fca00e84bae; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctasserttrue

# XCTAssertTrue

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that an expression is true.

## Declaration

```objectivec
#define XCTAssertTrue(expression, ...)
```

## Parameters

- `expression`: An expression of Boolean type.
- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

This function generates a failure when `expression == false` and is equivalent to [XCTAssert](xctassert.md).

## See Also

### Tests for True Conditions

- [XCTAssert](xctassert.md): Asserts that an expression is true.
