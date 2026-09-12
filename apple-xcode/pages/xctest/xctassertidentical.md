> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertidentical](https://developer.apple.com/documentation/xctest/xctassertidentical)

# XCTAssertIdentical

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that two values are identical.

## Declaration

```objectivec
#define XCTAssertIdentical(expression1, expression2, ...)
```

## Parameters

- `expression1`: An expression of type `id`.
- `expression2`: A second expression of type `id`.
- `…`: An optional description of a failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

Compare two values of type `id`. The values are identical if they’re the same instance.

## See Also

### Related Documentation

- [XCTAssertEqualObjects](xctassertequalobjects.md): Asserts that two objects are equal.

### Tests for Identical Objects

- [XCTAssertNotIdentical](xctassertnotidentical.md): Asserts that two values aren’t identical.
