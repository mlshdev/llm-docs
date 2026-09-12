> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertequal](https://developer.apple.com/documentation/xctest/xctassertequal)

# XCTAssertEqual

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that two expressions have the same value.

## Declaration

```objectivec
#define XCTAssertEqual(expression1, expression2, ...)
```

## Parameters

- `expression1`: An expression of C scalar type.
- `expression2`: A second expression of C scalar type.
- `…`: An optional description of a failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

## Mentioned In

- [Defining Test Cases and Test Methods](defining-test-cases-and-test-methods.md)

<a id="Discussion"></a>

## Discussion

Generates a failure when `expression1 != expression2`.

## See Also

### Tests for Equality and Inequality

- [XCTAssertEqualObjects](xctassertequalobjects.md): Asserts that two objects are equal.
- [XCTAssertNotEqual](xctassertnotequal.md): Asserts that two expressions don’t have the same value.
- [XCTAssertNotEqualObjects](xctassertnotequalobjects.md): Asserts that two objects aren’t equal.
