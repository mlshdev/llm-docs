> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/test/cancel(_:sourcelocation:)](https://developer.apple.com/documentation/testing/test/cancel(_:sourcelocation:))

# cancel(\_:sourceLocation:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** Swift 6.3+ · Xcode 26.4+

Cancel the current test or test case.

## Declaration

```swift
static func cancel(_ comment: Comment? = nil, sourceLocation: SourceLocation = #_sourceLocation) throws -> Never
```

## Parameters

- `comment`: A comment describing why you are cancelling the test or test case.
- `sourceLocation`: The source location to which the testing library will attribute the cancellation.

## Mentioned In

- [Migrating a test from XCTest](../migratingfromxctest.md)
- [Enabling and disabling tests](../enablinganddisabling.md)

<a id="discussion"></a>

## Discussion

> **Throws**

> An error indicating that the current test or test case has been cancelled. The testing library does not treat this error as a test failure.

The testing library runs each test and each test case in its own task. When you call this function, the testing library cancels the task associated with the current test:

```swift
@Test func `Food truck is well-stocked`() throws {
  guard businessHours.contains(.now) else {
    try Test.cancel("We're off the clock.")
  }
  // ...
}
```

If the current test is a parameterized test function, this function instead cancels the current test case. Other test cases in the test function are not affected.

If the current test is a suite, the testing library cancels all of its pending and running tests.

If you have already cancelled the current test or if it has already finished running, this function throws an error to indicate that the current test has been cancelled, but does not attempt to cancel the test a second time.

> **Important**

> If the current task is not associated with a test (for example, because it was created with [Task.detached(name:priority:operation:)](https://developer.apple.com/documentation/swift/task/detached%28name:priority:operation:%29-795w1)) this function records an issue and cancels the current task.
