> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/continueasynchronousworkonmainthread(_:)](https://developer.apple.com/documentation/appkit/nsdocument/continueasynchronousworkonmainthread(_:))

# continueAsynchronousWorkOnMainThread(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invokes the passed-in block on the main thread.

## Declaration

```swift
nonisolated func continueAsynchronousWorkOnMainThread(_ block: @escaping () -> Void)
```

## Parameters

- `block`: The block to be invoked.

<a id="Discussion"></a>

## Discussion

If the main thread is blocked by an invocation of [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md) or [performSynchronousFileAccess(\_:)](performsynchronousfileaccess%28__%29.md), this method interrupts that blocking activity, performs the specified `block`, and then resumes the blocking activity after `block` returns. Invocations of this method always return before the passed-in block is invoked.

You can invoke this method when work is being done on a non-main thread and part of the work must be continued on the main thread. For example, [save(to:ofType:for:completionHandler:)](save%28to_oftype_for_completionhandler_%29.md) uses this method when it has just completed the actual writing of the file during asynchronous saving and, to finish the saving operation, must invoke [updateChangeCount(withToken:for:)](updatechangecount%28withtoken_for_%29.md) and other methods on the main thread.

This method can be invoked on any thread.

## See Also

### Performing Tasks Serially

- [performSynchronousFileAccess(\_:)](performsynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete, then invokes the passed-in block.
- [performAsynchronousFileAccess(\_:)](performasynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete but without blocking the main thread, then invokes the passed-in block.
- [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md): Waits for any work scheduled by previous invocations of this method to complete, then invokes the passed-in block.
- [continueActivity(\_:)](continueactivity%28__%29.md): Continues to perform the task for a user activity object using a different block.

# continueAsynchronousWorkOnMainThreadUsingBlock: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invokes the passed-in block on the main thread.

## Declaration

```objectivec
- (void) continueAsynchronousWorkOnMainThreadUsingBlock:(void (^)()) block;
```

## Parameters

- `block`: The block to be invoked.

<a id="Discussion"></a>

## Discussion

If the main thread is blocked by an invocation of [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md) or [performSynchronousFileAccessUsingBlock:](performsynchronousfileaccess%28__%29.md), this method interrupts that blocking activity, performs the specified `block`, and then resumes the blocking activity after `block` returns. Invocations of this method always return before the passed-in block is invoked.

You can invoke this method when work is being done on a non-main thread and part of the work must be continued on the main thread. For example, [saveToURL:ofType:forSaveOperation:completionHandler:](save%28to_oftype_for_completionhandler_%29.md) uses this method when it has just completed the actual writing of the file during asynchronous saving and, to finish the saving operation, must invoke [updateChangeCountWithToken:forSaveOperation:](updatechangecount%28withtoken_for_%29.md) and other methods on the main thread.

This method can be invoked on any thread.

## See Also

### Performing Tasks Serially

- [performSynchronousFileAccessUsingBlock:](performsynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete, then invokes the passed-in block.
- [performAsynchronousFileAccessUsingBlock:](performasynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete but without blocking the main thread, then invokes the passed-in block.
- [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md): Waits for any work scheduled by previous invocations of this method to complete, then invokes the passed-in block.
- [continueActivityUsingBlock:](continueactivity%28__%29.md): Continues to perform the task for a user activity object using a different block.
