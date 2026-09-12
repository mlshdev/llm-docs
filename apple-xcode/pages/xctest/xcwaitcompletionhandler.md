> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xcwaitcompletionhandler](https://developer.apple.com/documentation/xctest/xcwaitcompletionhandler)

# XCWaitCompletionHandler (Swift)

**Framework:** XCTest  
**Kind:** Type Alias

A block the test runner calls when the test fulfills a waiter’s expectations, or when it times out.

## Declaration

```swift
typealias XCWaitCompletionHandler = ((any Error)?) -> Void
```

## Parameters

- `error`: The error the waiter object encountered while waiting, which can be a timeout or a failure. See [XCTestError.Code](xctesterror/code.md) for a list of possible errors.

<a id="Discussion"></a>

## Discussion

Pass a block with this signature to [waitForExpectations(timeout:handler:)](xctestcase/waitforexpectations%28timeout_handler_%29.md). Your block should handle any errors the waiter object encounters, including a timeout, and should perform assertions when the test fulfills the expectation for the waiter object.

## See Also

### Waiting for Expectations

- [fulfillment(of:timeout:enforceOrder:)](xctestcase/fulfillment%28of_timeout_enforceorder_%29.md): Waits on a group of expectations for up to the specified timeout, optionally enforcing their order of fulfillment.
- [wait(for:)](xctestcase/wait%28for_%29.md): Waits on a group of expectations.
- [wait(for:enforceOrder:)](xctestcase/wait%28for_enforceorder_%29.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [wait(for:timeout:)](xctestcase/wait%28for_timeout_%29.md): Waits for the test to fulfill a set of expectations within a specified time.
- [wait(for:timeout:enforceOrder:)](xctestcase/wait%28for_timeout_enforceorder_%29.md): Waits for the test to satisfy an array of expectations and specifies whether they must occur in the array’s order.
- [waitForExpectations(timeout:handler:)](xctestcase/waitforexpectations%28timeout_handler_%29.md): Waits until the test fulfills all expectations or until it times out.
- [XCTestError](xctesterror.md): A type of error that can occur while the test waits to fulfill expectations.
- [XCTestError.Code](xctesterror/code.md): Error codes for errors that can occur while the test is waiting to fulfill expectations.
- [XCTestErrorDomain](xctesterrordomain.md): The error domain for errors that can occur while the test is waiting to fulfill expectations.

# XCWaitCompletionHandler (Objective-C)

**Framework:** XCTest  
**Kind:** Type Alias

A block the test runner calls when the test fulfills a waiter’s expectations, or when it times out.

## Declaration

```objectivec
typedef void (^)(NSError *) XCWaitCompletionHandler;
```

## Parameters

- `error`: The error the waiter object encountered while waiting, which can be a timeout or a failure. See [XCTestErrorCode](xctesterror/code.md) for a list of possible errors.

<a id="Discussion"></a>

## Discussion

Pass a block with this signature to [waitForExpectationsWithTimeout:handler:](xctestcase/waitforexpectations%28timeout_handler_%29.md). Your block should handle any errors the waiter object encounters, including a timeout, and should perform assertions when the test fulfills the expectation for the waiter object.

## See Also

### Waiting for Expectations

- [waitForExpectations:](xctestcase/wait%28for_%29.md): Waits on a group of expectations.
- [waitForExpectations:enforceOrder:](xctestcase/wait%28for_enforceorder_%29.md): Waits on a group of expectations optionally enforcing their order of fulfillment.
- [waitForExpectations:timeout:](xctestcase/wait%28for_timeout_%29.md): Waits for the test to fulfill a set of expectations within a specified time.
- [waitForExpectations:timeout:enforceOrder:](xctestcase/wait%28for_timeout_enforceorder_%29.md): Waits for the test to satisfy an array of expectations and specifies whether they must occur in the array’s order.
- [waitForExpectationsWithTimeout:handler:](xctestcase/waitforexpectations%28timeout_handler_%29.md): Waits until the test fulfills all expectations or until it times out.
- [XCTestErrorCode](xctesterror/code.md): Error codes for errors that can occur while the test is waiting to fulfill expectations.
- [XCTestErrorDomain](xctesterrordomain.md): The error domain for errors that can occur while the test is waiting to fulfill expectations.
