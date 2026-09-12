> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/getalltasks(completionhandler:)](https://developer.apple.com/documentation/foundation/urlsession/getalltasks(completionhandler:))

# getAllTasks(completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asynchronously calls a completion callback with all tasks in a session

## Declaration

```swift
func getAllTasks(completionHandler: @escaping @Sendable ([URLSessionTask]) -> Void)
```

```swift
var allTasks: [URLSessionTask] { get async }
```

## Parameters

- `completionHandler`: The completion handler to call with the list of tasks.

## See Also

### Managing the session

- [finishTasksAndInvalidate()](finishtasksandinvalidate%28%29.md): Invalidates the session, allowing any outstanding tasks to finish.
- [flush(completionHandler:)](flush%28completionhandler_%29.md): Flushes cookies and credentials to disk, clears transient caches, and ensures that future requests occur on a new TCP connection.
- [getTasksWithCompletionHandler(\_:)](gettaskswithcompletionhandler%28__%29.md): Asynchronously calls a completion callback with all data, upload, and download tasks in a session.
- [invalidateAndCancel()](invalidateandcancel%28%29.md): Cancels all outstanding tasks and then invalidates the session.
- [reset(completionHandler:)](reset%28completionhandler_%29.md): Empties all cookies, caches and credential stores, removes disk files, flushes in-progress downloads to disk, and ensures that future requests occur on a new socket.
- [sessionDescription](sessiondescription.md): An app-defined descriptive label for the session.

# getAllTasksWithCompletionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asynchronously calls a completion callback with all tasks in a session

## Declaration

```objectivec
- (void) getAllTasksWithCompletionHandler:(void (^)(NSArray<__kindof NSURLSessionTask *> *tasks)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler to call with the list of tasks.

## See Also

### Managing the session

- [finishTasksAndInvalidate](finishtasksandinvalidate%28%29.md): Invalidates the session, allowing any outstanding tasks to finish.
- [flushWithCompletionHandler:](flush%28completionhandler_%29.md): Flushes cookies and credentials to disk, clears transient caches, and ensures that future requests occur on a new TCP connection.
- [getTasksWithCompletionHandler:](gettaskswithcompletionhandler%28__%29.md): Asynchronously calls a completion callback with all data, upload, and download tasks in a session.
- [invalidateAndCancel](invalidateandcancel%28%29.md): Cancels all outstanding tasks and then invalidates the session.
- [resetWithCompletionHandler:](reset%28completionhandler_%29.md): Empties all cookies, caches and credential stores, removes disk files, flushes in-progress downloads to disk, and ensures that future requests occur on a new socket.
- [sessionDescription](sessiondescription.md): An app-defined descriptive label for the session.
