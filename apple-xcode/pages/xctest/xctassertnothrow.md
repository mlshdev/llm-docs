> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertnothrow](https://developer.apple.com/documentation/xctest/xctassertnothrow)

# XCTAssertNoThrow

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that an expression doesn’t throw an `NSException`.

## Declaration

```objectivec
#define XCTAssertNoThrow(expression, ...)
```

## Parameters

- `expression`: An expression.
- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

This function generates a failure if `expression` throws an exception.
