> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertnotidentical](https://developer.apple.com/documentation/xctest/xctassertnotidentical)

# XCTAssertNotIdentical

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that two values aren’t identical.

## Declaration

```objectivec
#define XCTAssertNotIdentical(expression1, expression2, ...)
```

## Parameters

- `expression1`: An expression of type `id`.
- `expression2`: A second expression of type `id`.
- `…`: An optional description of a failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

Compare two values of type `id`. The values aren’t identical if they’re not the same instance.

## See Also

### Related Documentation

- [XCTAssertNotEqualObjects](xctassertnotequalobjects.md): Asserts that two objects aren’t equal.

### Tests for Identical Objects

- [XCTAssertIdentical](xctassertidentical.md): Asserts that two values are identical.
