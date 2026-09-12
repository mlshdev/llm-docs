> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/reset(completionhandler:)](https://developer.apple.com/documentation/foundation/urlsession/reset(completionhandler:))

# reset(completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Empties all cookies, caches and credential stores, removes disk files, flushes in-progress downloads to disk, and ensures that future requests occur on a new socket.

## Declaration

```swift
func reset(completionHandler: @escaping @Sendable () -> Void)
```

```swift
func reset() async
```

## Parameters

- `completionHandler`: The completion handler to call when the reset operation is complete. This handler is executed on the delegate queue.

## See Also

### Managing the session

- [finishTasksAndInvalidate()](finishtasksandinvalidate%28%29.md): Invalidates the session, allowing any outstanding tasks to finish.
- [flush(completionHandler:)](flush%28completionhandler_%29.md): Flushes cookies and credentials to disk, clears transient caches, and ensures that future requests occur on a new TCP connection.
- [getTasksWithCompletionHandler(\_:)](gettaskswithcompletionhandler%28__%29.md): Asynchronously calls a completion callback with all data, upload, and download tasks in a session.
- [getAllTasks(completionHandler:)](getalltasks%28completionhandler_%29.md): Asynchronously calls a completion callback with all tasks in a session
- [invalidateAndCancel()](invalidateandcancel%28%29.md): Cancels all outstanding tasks and then invalidates the session.
- [sessionDescription](sessiondescription.md): An app-defined descriptive label for the session.

# resetWithCompletionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Empties all cookies, caches and credential stores, removes disk files, flushes in-progress downloads to disk, and ensures that future requests occur on a new socket.

## Declaration

```objectivec
- (void) resetWithCompletionHandler:(void (^)()) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler to call when the reset operation is complete. This handler is executed on the delegate queue.

## See Also

### Managing the session

- [finishTasksAndInvalidate](finishtasksandinvalidate%28%29.md): Invalidates the session, allowing any outstanding tasks to finish.
- [flushWithCompletionHandler:](flush%28completionhandler_%29.md): Flushes cookies and credentials to disk, clears transient caches, and ensures that future requests occur on a new TCP connection.
- [getTasksWithCompletionHandler:](gettaskswithcompletionhandler%28__%29.md): Asynchronously calls a completion callback with all data, upload, and download tasks in a session.
- [getAllTasksWithCompletionHandler:](getalltasks%28completionhandler_%29.md): Asynchronously calls a completion callback with all tasks in a session
- [invalidateAndCancel](invalidateandcancel%28%29.md): Cancels all outstanding tasks and then invalidates the session.
- [sessionDescription](sessiondescription.md): An app-defined descriptive label for the session.
