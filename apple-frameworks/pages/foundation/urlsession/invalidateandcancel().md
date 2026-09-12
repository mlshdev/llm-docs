> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/invalidateandcancel()](https://developer.apple.com/documentation/foundation/urlsession/invalidateandcancel())

# invalidateAndCancel() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels all outstanding tasks and then invalidates the session.

## Declaration

```swift
func invalidateAndCancel()
```

<a id="Discussion"></a>

## Discussion

Once invalidated, references to the delegate and callback objects are broken. After invalidation, session objects cannot be reused.

To allow outstanding tasks to run until completion, call [finishTasksAndInvalidate()](finishtasksandinvalidate%28%29.md) instead.

> **Important**

>  Calling this method on the session returned by the [shared](shared.md) method has no effect.

## See Also

### Managing the session

- [finishTasksAndInvalidate()](finishtasksandinvalidate%28%29.md): Invalidates the session, allowing any outstanding tasks to finish.
- [flush(completionHandler:)](flush%28completionhandler_%29.md): Flushes cookies and credentials to disk, clears transient caches, and ensures that future requests occur on a new TCP connection.
- [getTasksWithCompletionHandler(\_:)](gettaskswithcompletionhandler%28__%29.md): Asynchronously calls a completion callback with all data, upload, and download tasks in a session.
- [getAllTasks(completionHandler:)](getalltasks%28completionhandler_%29.md): Asynchronously calls a completion callback with all tasks in a session
- [reset(completionHandler:)](reset%28completionhandler_%29.md): Empties all cookies, caches and credential stores, removes disk files, flushes in-progress downloads to disk, and ensures that future requests occur on a new socket.
- [sessionDescription](sessiondescription.md): An app-defined descriptive label for the session.

# invalidateAndCancel (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels all outstanding tasks and then invalidates the session.

## Declaration

```objectivec
- (void) invalidateAndCancel;
```

<a id="Discussion"></a>

## Discussion

Once invalidated, references to the delegate and callback objects are broken. After invalidation, session objects cannot be reused.

To allow outstanding tasks to run until completion, call [finishTasksAndInvalidate](finishtasksandinvalidate%28%29.md) instead.

> **Important**

>  Calling this method on the session returned by the [sharedSession](shared.md) method has no effect.

## See Also

### Managing the session

- [finishTasksAndInvalidate](finishtasksandinvalidate%28%29.md): Invalidates the session, allowing any outstanding tasks to finish.
- [flushWithCompletionHandler:](flush%28completionhandler_%29.md): Flushes cookies and credentials to disk, clears transient caches, and ensures that future requests occur on a new TCP connection.
- [getTasksWithCompletionHandler:](gettaskswithcompletionhandler%28__%29.md): Asynchronously calls a completion callback with all data, upload, and download tasks in a session.
- [getAllTasksWithCompletionHandler:](getalltasks%28completionhandler_%29.md): Asynchronously calls a completion callback with all tasks in a session
- [resetWithCompletionHandler:](reset%28completionhandler_%29.md): Empties all cookies, caches and credential stores, removes disk files, flushes in-progress downloads to disk, and ensures that future requests occur on a new socket.
- [sessionDescription](sessiondescription.md): An app-defined descriptive label for the session.
