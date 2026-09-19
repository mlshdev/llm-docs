> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctskip-c.macro

# XCTSkip

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Throws an exception that causes the test runner to cease executing the current test and mark the test skipped.

## Declaration

```objectivec
#define XCTSkip(...)
```

## See Also

### Methods for Skipping Tests

- [XCTSkipIf](xctskipif.md): Skips remaining tests in a test method if the specified condition is met.
- [XCTSkipUnless](xctskipunless.md): Skips remaining tests in a test method unless the specified condition is met.
