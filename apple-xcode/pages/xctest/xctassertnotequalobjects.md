> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertnotequalobjects](https://developer.apple.com/documentation/xctest/xctassertnotequalobjects)

# XCTAssertNotEqualObjects

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that two objects aren’t equal.

## Declaration

```objectivec
#define XCTAssertNotEqualObjects(expression1, expression2, ...)
```

## Parameters

- `expression1`: An expression of `id` type.
- `expression2`: A second expression of `id` type.
- `…`: An optional description of a failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

Generates a failure when `expression1` is equal to `expression2`.

## See Also

### Related Documentation

- [XCTAssertNotIdentical](xctassertnotidentical.md): Asserts that two values aren’t identical.

### Tests for Equality and Inequality

- [XCTAssertEqual](xctassertequal.md): Asserts that two expressions have the same value.
- [XCTAssertEqualObjects](xctassertequalobjects.md): Asserts that two objects are equal.
- [XCTAssertNotEqual](xctassertnotequal.md): Asserts that two expressions don’t have the same value.
