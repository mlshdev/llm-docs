> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/continueactivity(_:)](https://developer.apple.com/documentation/appkit/nsdocument/continueactivity(_:))

# continueActivity(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Continues to perform the task for a user activity object using a different block.

## Declaration

```swift
func continueActivity(_ block: () -> Void)
```

## Parameters

- `block`: The block to be invoked.

<a id="Discussion"></a>

## Discussion

When AppKit calls [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md) recursively, it may execute this method with the specified block to avoid a deadlock.

If a block that was passed to [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md) is being invoked, this method invokes the passed-in block, having recorded state that makes inner invocations of [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md) not wait. If this method is invoked outside of an invocation of a block passed to [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md), this method simply invokes the passed-in block.

This method is useful when code executed in a block passed to [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md) may also invoke that method. For example, [save(withDelegate:didSave:contextInfo:)](save%28withdelegate_didsave_contextinfo_%29.md), which uses [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md), uses this around its invocation of [runModalSavePanel(for:delegate:didSave:contextInfo:)](runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md) or [save(to:ofType:for:delegate:didSave:contextInfo:)](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md) because both of those methods also use [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md). Without the use of this method the inner invocation of [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md) would wait forever.

## See Also

### Performing Tasks Serially

- [performSynchronousFileAccess(\_:)](performsynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete, then invokes the passed-in block.
- [performAsynchronousFileAccess(\_:)](performasynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete but without blocking the main thread, then invokes the passed-in block.
- [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md): Waits for any work scheduled by previous invocations of this method to complete, then invokes the passed-in block.
- [continueAsynchronousWorkOnMainThread(\_:)](continueasynchronousworkonmainthread%28__%29.md): Invokes the passed-in block on the main thread.

# continueActivityUsingBlock: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Continues to perform the task for a user activity object using a different block.

## Declaration

```objectivec
- (void) continueActivityUsingBlock:(void (^)()) block;
```

## Parameters

- `block`: The block to be invoked.

<a id="Discussion"></a>

## Discussion

When AppKit calls [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md) recursively, it may execute this method with the specified block to avoid a deadlock.

If a block that was passed to [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md) is being invoked, this method invokes the passed-in block, having recorded state that makes inner invocations of [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md) not wait. If this method is invoked outside of an invocation of a block passed to [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md), this method simply invokes the passed-in block.

This method is useful when code executed in a block passed to [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md) may also invoke that method. For example, [saveDocumentWithDelegate:didSaveSelector:contextInfo:](save%28withdelegate_didsave_contextinfo_%29.md), which uses [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md), uses this around its invocation of [runModalSavePanelForSaveOperation:delegate:didSaveSelector:contextInfo:](runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md) or [saveToURL:ofType:forSaveOperation:delegate:didSaveSelector:contextInfo:](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md) because both of those methods also use [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md). Without the use of this method the inner invocation of [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md) would wait forever.

## See Also

### Performing Tasks Serially

- [performSynchronousFileAccessUsingBlock:](performsynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete, then invokes the passed-in block.
- [performAsynchronousFileAccessUsingBlock:](performasynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete but without blocking the main thread, then invokes the passed-in block.
- [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md): Waits for any work scheduled by previous invocations of this method to complete, then invokes the passed-in block.
- [continueAsynchronousWorkOnMainThreadUsingBlock:](continueasynchronousworkonmainthread%28__%29.md): Invokes the passed-in block on the main thread.
