> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/gettaskswithcompletionhandler(_:)](https://developer.apple.com/documentation/foundation/urlsession/gettaskswithcompletionhandler(_:))

# getTasksWithCompletionHandler(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asynchronously calls a completion callback with all data, upload, and download tasks in a session.

## Declaration

```swift
func getTasksWithCompletionHandler(_ completionHandler: @escaping @Sendable ([URLSessionDataTask], [URLSessionUploadTask], [URLSessionDownloadTask]) -> Void)
```

```swift
var tasks: ([URLSessionDataTask], [URLSessionUploadTask], [URLSessionDownloadTask]) { get async }
```

## Parameters

- `completionHandler`: The completion handler to call with the list of tasks. This handler is executed on the delegate queue.

<a id="Discussion"></a>

## Discussion

The arrays passed to the completion handler contain any tasks that you have created within the session, not including any tasks that have been invalidated after completing, failing, or being cancelled.

## See Also

### Managing the session

- [finishTasksAndInvalidate()](finishtasksandinvalidate%28%29.md): Invalidates the session, allowing any outstanding tasks to finish.
- [flush(completionHandler:)](flush%28completionhandler_%29.md): Flushes cookies and credentials to disk, clears transient caches, and ensures that future requests occur on a new TCP connection.
- [getAllTasks(completionHandler:)](getalltasks%28completionhandler_%29.md): Asynchronously calls a completion callback with all tasks in a session
- [invalidateAndCancel()](invalidateandcancel%28%29.md): Cancels all outstanding tasks and then invalidates the session.
- [reset(completionHandler:)](reset%28completionhandler_%29.md): Empties all cookies, caches and credential stores, removes disk files, flushes in-progress downloads to disk, and ensures that future requests occur on a new socket.
- [sessionDescription](sessiondescription.md): An app-defined descriptive label for the session.

# getTasksWithCompletionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asynchronously calls a completion callback with all data, upload, and download tasks in a session.

## Declaration

```objectivec
- (void) getTasksWithCompletionHandler:(void (^)(NSArray<NSURLSessionDataTask *> *dataTasks, NSArray<NSURLSessionUploadTask *> *uploadTasks, NSArray<NSURLSessionDownloadTask *> *downloadTasks)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler to call with the list of tasks. This handler is executed on the delegate queue.

<a id="Discussion"></a>

## Discussion

The arrays passed to the completion handler contain any tasks that you have created within the session, not including any tasks that have been invalidated after completing, failing, or being cancelled.

## See Also

### Managing the session

- [finishTasksAndInvalidate](finishtasksandinvalidate%28%29.md): Invalidates the session, allowing any outstanding tasks to finish.
- [flushWithCompletionHandler:](flush%28completionhandler_%29.md): Flushes cookies and credentials to disk, clears transient caches, and ensures that future requests occur on a new TCP connection.
- [getAllTasksWithCompletionHandler:](getalltasks%28completionhandler_%29.md): Asynchronously calls a completion callback with all tasks in a session
- [invalidateAndCancel](invalidateandcancel%28%29.md): Cancels all outstanding tasks and then invalidates the session.
- [resetWithCompletionHandler:](reset%28completionhandler_%29.md): Empties all cookies, caches and credential stores, removes disk files, flushes in-progress downloads to disk, and ensures that future requests occur on a new socket.
- [sessionDescription](sessiondescription.md): An app-defined descriptive label for the session.
