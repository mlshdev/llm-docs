> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/performasynchronousfileaccess(_:)](https://developer.apple.com/documentation/appkit/nsdocument/performasynchronousfileaccess(_:))

# performAsynchronousFileAccess(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Waits for any scheduled file access to complete but without blocking the main thread, then invokes the passed-in block.

## Declaration

```swift
nonisolated func performAsynchronousFileAccess(_ block: @escaping (@escaping () -> Void) -> Void)
```

## Parameters

- `block`: A block that performs file access.

<a id="Discussion"></a>

## Discussion

This method does the same sort of work as [performSynchronousFileAccess(\_:)](performsynchronousfileaccess%28__%29.md), but without ever blocking the main thread, and may not invoke the block until after the method invocation has returned, though still always on the same thread as the method invocation. The block is passed another block, the file access completion handler, which must be invoked when the file access is complete, though it can be invoked from any thread. This method is for use with file access that might begin on one thread but continue on another before it is complete. For example, [save(to:ofType:for:completionHandler:)](save%28to_oftype_for_completionhandler_%29.md) uses this method instead of [performSynchronousFileAccess(\_:)](performsynchronousfileaccess%28__%29.md) because if it does asynchronous saving then there is no way for it to complete all of its file access before returning from the file access block.

## See Also

### Performing Tasks Serially

- [performSynchronousFileAccess(\_:)](performsynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete, then invokes the passed-in block.
- [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md): Waits for any work scheduled by previous invocations of this method to complete, then invokes the passed-in block.
- [continueActivity(\_:)](continueactivity%28__%29.md): Continues to perform the task for a user activity object using a different block.
- [continueAsynchronousWorkOnMainThread(\_:)](continueasynchronousworkonmainthread%28__%29.md): Invokes the passed-in block on the main thread.

# performAsynchronousFileAccessUsingBlock: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Waits for any scheduled file access to complete but without blocking the main thread, then invokes the passed-in block.

## Declaration

```objectivec
- (void) performAsynchronousFileAccessUsingBlock:(void (^)(void (^fileAccessCompletionHandler)())) block;
```

## Parameters

- `block`: A block that performs file access.

<a id="Discussion"></a>

## Discussion

This method does the same sort of work as [performSynchronousFileAccessUsingBlock:](performsynchronousfileaccess%28__%29.md), but without ever blocking the main thread, and may not invoke the block until after the method invocation has returned, though still always on the same thread as the method invocation. The block is passed another block, the file access completion handler, which must be invoked when the file access is complete, though it can be invoked from any thread. This method is for use with file access that might begin on one thread but continue on another before it is complete. For example, [saveToURL:ofType:forSaveOperation:completionHandler:](save%28to_oftype_for_completionhandler_%29.md) uses this method instead of [performSynchronousFileAccessUsingBlock:](performsynchronousfileaccess%28__%29.md) because if it does asynchronous saving then there is no way for it to complete all of its file access before returning from the file access block.

## See Also

### Performing Tasks Serially

- [performSynchronousFileAccessUsingBlock:](performsynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete, then invokes the passed-in block.
- [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md): Waits for any work scheduled by previous invocations of this method to complete, then invokes the passed-in block.
- [continueActivityUsingBlock:](continueactivity%28__%29.md): Continues to perform the task for a user activity object using a different block.
- [continueAsynchronousWorkOnMainThreadUsingBlock:](continueasynchronousworkonmainthread%28__%29.md): Invokes the passed-in block on the main thread.
