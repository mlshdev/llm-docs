> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctskipunless](https://developer.apple.com/documentation/xctest/xctskipunless)

# XCTSkipUnless

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Macro

Skips remaining tests in a test method unless the specified condition is met.

## Declaration

```objectivec
#define XCTSkipUnless(expression, ...)
```

<a id="Discussion"></a>

## Discussion

Call this macro to skip any remaining code and assertions in the test method when `expression` evaluates to `false`, and mark the test method as skipped. If a test failure occurs in the test method before the skip, the test runner marks the test method as failed.

## See Also

### Methods for Skipping Tests

- [XCTSkipIf](xctskipif.md): Skips remaining tests in a test method if the specified condition is met.
- [XCTSkip](xctskip-c.macro.md): Throws an exception that causes the test runner to cease executing the current test and mark the test skipped.
