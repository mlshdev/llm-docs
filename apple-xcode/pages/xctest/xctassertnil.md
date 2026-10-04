> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-4fca00e84bae; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctassertnil

# XCTAssertNil

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that an expression is `nil`.

## Declaration

```objectivec
#define XCTAssertNil(expression, ...)
```

## Parameters

- `expression`: An expression of `id` type.
- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

This function generates a failure when `expression != nil`.
