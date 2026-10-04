> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-4fca00e84bae; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctassertfalse

# XCTAssertFalse

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Asserts that an expression is false.

## Declaration

```objectivec
#define XCTAssertFalse(expression, ...)
```

## Parameters

- `expression`: An expression of Boolean type.
- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.

<a id="Discussion"></a>

## Discussion

This function generates a failure when `expression == true`.
