> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctskip-swift.struct](https://developer.apple.com/documentation/xctest/xctskip-swift.struct)

# XCTSkip

**Framework:** XCTest  
**Kind:** Structure

An error that causes the current test to cease executing and the test runner to mark the test as skipped when the test throws the error.

## Declaration

```swift
struct XCTSkip
```

## Topics

### Skipping a Test

- [init(\_:file:line:)](xctskip-swift.struct/init%28__file_line_%29.md): Intitializes an error to skip a test.

### Describing a Skipped Test

- [message](xctskip-swift.struct/message.md): An optional description of the skipped test, displayed in the Test navigator.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Methods for Skipping Tests

- [XCTSkipIf(\_:\_:file:line:)](xctskipif%28____file_line_%29.md): Skips remaining tests in a test method if the specified condition is met.
- [XCTSkipUnless(\_:\_:file:line:)](xctskipunless%28____file_line_%29.md): Skips remaining tests in a test method unless the specified condition is met.
