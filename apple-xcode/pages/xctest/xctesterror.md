> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctesterror](https://developer.apple.com/documentation/xctest/xctesterror)

# XCTestError

**Framework:** XCTest  
**Kind:** Structure

A type of error that can occur while the test waits to fulfill expectations.

## Declaration

```swift
struct XCTestError
```

## Topics

### Classifying Errors with Codes

- [timeoutWhileWaiting](xctesterror/timeoutwhilewaiting.md): A code that represents a timeout the test encountered while waiting to fulfill expectations.
- [failureWhileWaiting](xctesterror/failurewhilewaiting.md): A code that represents a test failure the test encountered while waiting to fulfill expectations.
- [XCTestError.Code](xctesterror/code.md): Error codes for errors that can occur while the test is waiting to fulfill expectations.

### Classifying Errors by Domain

- [XCTestErrorDomain](xctesterrordomain.md): The error domain for errors that can occur while the test is waiting to fulfill expectations.

### Type Properties

- [errorDomain](xctesterror/errordomain.md): The error domain for errors that can occur while the test is waiting to fulfill expectations.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Waiting for Expectations

- [fulfillment(of:timeout:enforceOrder:)](xctestcase/fulfillment%28of_timeout_enforceorder_%29.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](xctestcase/wait%28for_%29.md): Waits on a group of expectations.
- [wait(for:enforceOrder:)](xctestcase/wait%28for_enforceorder_%29.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](xctestcase/wait%28for_timeout_%29.md): Waits for the test to fulfill a set of expectations within a specified time.
- [wait(for:timeout:enforceOrder:)](xctestcase/wait%28for_timeout_enforceorder_%29.md): Waits for the test to satisfy an array of expectations and specifies whether they must occur in the array’s order.
- [waitForExpectations(timeout:handler:)](xctestcase/waitforexpectations%28timeout_handler_%29.md): Waits until the test fulfills all expectations or until it times out.
- [XCWaitCompletionHandler](xcwaitcompletionhandler.md): A block the test runner calls when the test fulfills a waiter’s expectations, or when it times out.
- [XCTestError.Code](xctesterror/code.md): Error codes for errors that can occur while the test is waiting to fulfill expectations.
- [XCTestErrorDomain](xctesterrordomain.md): The error domain for errors that can occur while the test is waiting to fulfill expectations.
