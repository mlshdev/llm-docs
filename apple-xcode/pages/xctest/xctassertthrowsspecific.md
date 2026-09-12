> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertthrowsspecific](https://developer.apple.com/documentation/xctest/xctassertthrowsspecific)

# XCTAssertThrowsSpecific

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that an expression throws a specific `NSException`.

## Declaration

```objectivec
#define XCTAssertThrowsSpecific(expression, exception_class, ...)
```

## Parameters

- `expression`: An expression.
- `exception_class`: The class of the exception.
- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

This function generates a failure if `expression` doesn’t throw an [NSException](https://developer.apple.com/documentation/foundation/nsexception) of class `exception_class`.

## See Also

### Testing for Exceptions

- [XCTAssertThrows](xctassertthrows.md): Asserts that an expression throws an `NSException`.
- [XCTAssertThrowsSpecificNamed](xctassertthrowsspecificnamed.md): Asserts that an expression throws a specific NSException with a specific name.
- [XCTAssertNoThrow](xctassertnothrow.md): Asserts that an expression doesn’t throw an `NSException`.
- [XCTAssertNoThrowSpecific](xctassertnothrowspecific.md): Asserts that an expression doesn’t throw a specific `NSException`.
- [XCTAssertNoThrowSpecificNamed](xctassertnothrowspecificnamed.md): Asserts that an expression doesn’t throw a specific `NSException` with a specific name.
