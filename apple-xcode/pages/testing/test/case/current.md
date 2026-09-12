> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/test/case/current](https://developer.apple.com/documentation/testing/test/case/current)

# current

**Framework:** Swift Testing  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

The test case that is running on the current task, if any.

## Declaration

```swift
static var current: Test.Case? { get }
```

<a id="discussion"></a>

## Discussion

If the current task is running a test, or is a subtask of another task that is running a test, the value of this property describes the test’s currently-running case. If no test is currently running, the value of this property is `nil`.

If the current task is detached from a task that started running a test, or if the current thread was created without using Swift concurrency (e.g. by using [Thread.detachNewThread(\_:)](https://developer.apple.com/documentation/foundation/thread/2088563-detachnewthread) or [DispatchQueue.async(execute:)](https://developer.apple.com/documentation/dispatch/dispatchqueue/2016103-async)), the value of this property may be `nil`.
