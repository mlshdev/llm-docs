> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertthrows](https://developer.apple.com/documentation/xctest/xctassertthrows)

# XCTAssertThrows

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that an expression throws an `NSException`.

## Declaration

```objectivec
#define XCTAssertThrows(expression, ...)
```

## Parameters

- `expression`: An expression.
- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

This function generates a failure if `expression` doesn’t throw an exception.

## See Also

### Testing for Exceptions

- [XCTAssertThrowsSpecific](xctassertthrowsspecific.md): Asserts that an expression throws a specific `NSException`.
- [XCTAssertThrowsSpecificNamed](xctassertthrowsspecificnamed.md): Asserts that an expression throws a specific NSException with a specific name.
- [XCTAssertNoThrow](xctassertnothrow.md): Asserts that an expression doesn’t throw an `NSException`.
- [XCTAssertNoThrowSpecific](xctassertnothrowspecific.md): Asserts that an expression doesn’t throw a specific `NSException`.
- [XCTAssertNoThrowSpecificNamed](xctassertnothrowspecificnamed.md): Asserts that an expression doesn’t throw a specific `NSException` with a specific name.
