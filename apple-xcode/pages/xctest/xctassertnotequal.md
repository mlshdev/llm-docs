> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertnotequal](https://developer.apple.com/documentation/xctest/xctassertnotequal)

# XCTAssertNotEqual

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that two expressions don’t have the same value.

## Declaration

```objectivec
#define XCTAssertNotEqual(expression1, expression2, ...)
```

## Parameters

- `expression1`: An expression of C scalar type.
- `expression2`: A second expression of C scalar type.
- `…`: An optional description of a failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

Generates a failure when `expression1 == expression2`.

## See Also

### Tests for Equality and Inequality

- [XCTAssertEqual](xctassertequal.md): Asserts that two expressions have the same value.
- [XCTAssertEqualObjects](xctassertequalobjects.md): Asserts that two objects are equal.
- [XCTAssertNotEqualObjects](xctassertnotequalobjects.md): Asserts that two objects aren’t equal.
