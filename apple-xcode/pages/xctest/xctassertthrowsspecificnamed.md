> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertthrowsspecificnamed](https://developer.apple.com/documentation/xctest/xctassertthrowsspecificnamed)

# XCTAssertThrowsSpecificNamed

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that an expression throws a specific NSException with a specific name.

## Declaration

```objectivec
#define XCTAssertThrowsSpecificNamed(expression, exception_class, exception_name, ...)
```

## Parameters

- `expression`: An expression.
- `exception_class`: The class of the exception.
- `exception_name`: The name of the exception.
- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

This function generates a failure if `expression` doesn’t throw an [NSException](https://developer.apple.com/documentation/foundation/nsexception) of class `exception_class` with a name of `exception_name`.

## See Also

### Testing for Exceptions

- [XCTAssertThrows](xctassertthrows.md): Asserts that an expression throws an `NSException`.
- [XCTAssertThrowsSpecific](xctassertthrowsspecific.md): Asserts that an expression throws a specific `NSException`.
- [XCTAssertNoThrow](xctassertnothrow.md): Asserts that an expression doesn’t throw an `NSException`.
- [XCTAssertNoThrowSpecific](xctassertnothrowspecific.md): Asserts that an expression doesn’t throw a specific `NSException`.
- [XCTAssertNoThrowSpecificNamed](xctassertnothrowspecificnamed.md): Asserts that an expression doesn’t throw a specific `NSException` with a specific name.
