> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertnothrowspecific](https://developer.apple.com/documentation/xctest/xctassertnothrowspecific)

# XCTAssertNoThrowSpecific

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that an expression doesn’t throw a specific `NSException`.

## Declaration

```objectivec
#define XCTAssertNoThrowSpecific(expression, exception_class, ...)
```

## Parameters

- `expression`: An expression.
- `exception_class`: The class of the exception.
- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

This function generates a failure if `expression` throws an [NSException](https://developer.apple.com/documentation/foundation/nsexception) of class `exception_class`.

## See Also

### Testing for Exceptions

- [XCTAssertThrows](xctassertthrows.md): Asserts that an expression throws an `NSException`.
- [XCTAssertThrowsSpecific](xctassertthrowsspecific.md): Asserts that an expression throws a specific `NSException`.
- [XCTAssertThrowsSpecificNamed](xctassertthrowsspecificnamed.md): Asserts that an expression throws a specific NSException with a specific name.
- [XCTAssertNoThrow](xctassertnothrow.md): Asserts that an expression doesn’t throw an `NSException`.
- [XCTAssertNoThrowSpecificNamed](xctassertnothrowspecificnamed.md): Asserts that an expression doesn’t throw a specific `NSException` with a specific name.
