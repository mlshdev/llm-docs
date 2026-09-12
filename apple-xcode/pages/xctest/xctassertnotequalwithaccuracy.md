> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertnotequalwithaccuracy](https://developer.apple.com/documentation/xctest/xctassertnotequalwithaccuracy)

# XCTAssertNotEqualWithAccuracy

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that two expressions don’t have the same value within a specified accuracy.

## Declaration

```objectivec
#define XCTAssertNotEqualWithAccuracy(expression1, expression2, accuracy, ...)
```

## Parameters

- `expression1`: An expression of C scalar type.
- `expression2`: An expression of C scalar type.
- `accuracy`: An expression of C scalar type describing the maximum difference between `expression1` and `expression2` for these values to be considered equal.
- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

Generates a failure when the difference between `expression1` and `expression2` is less than or equal to `accuracy`.

## See Also

### Tests for Equality Within a Specified Accuracy

- [XCTAssertEqualWithAccuracy](xctassertequalwithaccuracy.md): Asserts that two expressions have the same value within a specified accuracy.
