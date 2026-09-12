> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue/kind-swift.enum](https://developer.apple.com/documentation/testing/issue/kind-swift.enum)

# Issue.Kind

**Framework:** Swift Testing  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Kinds of issues which may be recorded.

## Declaration

```swift
enum Kind
```

## Topics

### Enumeration Cases

- [Issue.Kind.apiMisused](kind-swift.enum/apimisused.md): An issue occurred due to misuse of the testing library.
- [Issue.Kind.confirmationMiscounted(actual:expected:)](kind-swift.enum/confirmationmiscounted%28actual_expected_%29.md): An issue due to a confirmation being confirmed the wrong number of times.
- [Issue.Kind.errorCaught(\_:)](kind-swift.enum/errorcaught%28__%29.md): An issue due to an `Error` being thrown by a test function and caught by the testing library.
- [Issue.Kind.expectationFailed(\_:)](kind-swift.enum/expectationfailed%28__%29.md): An issue due to a failed expectation, such as those produced by [expect(\_:\_:sourceLocation:)](../expect%28____sourcelocation_%29.md).
- [Issue.Kind.knownIssueNotRecorded](kind-swift.enum/knownissuenotrecorded.md): A known issue was expected, but was not recorded.
- [Issue.Kind.system](kind-swift.enum/system.md): An issue due to a failure in the underlying system, not due to a failure within the tests being run.
- [Issue.Kind.timeLimitExceeded(timeLimitComponents:)](kind-swift.enum/timelimitexceeded%28timelimitcomponents_%29.md): An issue due to a test reaching its time limit and timing out.
- [Issue.Kind.unconditional](kind-swift.enum/unconditional.md): An issue which occurred unconditionally, for example by using [record(\_:severity:sourceLocation:)](record%28__severity_sourcelocation_%29.md).
- [Issue.Kind.valueAttachmentFailed(\_:)](kind-swift.enum/valueattachmentfailed%28__%29.md): An issue due to an `Error` being thrown while attempting to save an attachment to a test report or to disk.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
