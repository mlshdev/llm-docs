> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctfail

# XCTFail

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

This function generates a failure immediately and unconditionally.

## Declaration

```objectivec
#define XCTFail(...)
```

## Parameters

- `…`: An optional description of the failure. A literal [NSString](https://developer.apple.com/documentation/foundation/nsstring), optionally with string format specifiers.
