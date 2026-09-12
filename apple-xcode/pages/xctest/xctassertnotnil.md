> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctassertnotnil](https://developer.apple.com/documentation/xctest/xctassertnotnil)

# XCTAssertNotNil

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that an expression is not `nil`.

## Declaration

```objectivec
#define XCTAssertNotNil(expression, ...)
```

## Parameters

- `expression`: An expression of `id` type.
- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

This function generates a failure when `expression == nil`.
