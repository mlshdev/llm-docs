> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/performsynchronousfileaccess(_:)](https://developer.apple.com/documentation/appkit/nsdocument/performsynchronousfileaccess(_:))

# performSynchronousFileAccess(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Waits for any scheduled file access to complete, then invokes the passed-in block.

## Declaration

```swift
nonisolated func performSynchronousFileAccess(_ block: () -> Void)
```

## Parameters

- `block`: A block that performs file access.

<a id="Discussion"></a>

## Discussion

Given a block that will perform file access, this method waits for any file access scheduled by previous invocations of this method or [performAsynchronousFileAccess(\_:)](performasynchronousfileaccess%28__%29.md) to complete, then invokes the passed-in block. When the block invocation returns, the method allows the next scheduled file access to to be performed, if any.

Like [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md), this method’s primary use is to wait for asynchronous saving, but in contrast with that method it is only for the part of an asynchronous saving operation that actually touches the document’s file or values in memory that are relative to the document’s file.

In general, you should use this method or [performAsynchronousFileAccess(\_:)](performasynchronousfileaccess%28__%29.md) around code that gets or sets values in memory that only make sense in the context of the document file’s current state. For example, `NSDocument` itself consistently uses this mechanism when using the following methods and properties:

- The [fileType](filetype.md), [fileURL](fileurl.md), [fileModificationDate](filemodificationdate.md), and [autosavedContentsFileURL](autosavedcontentsfileurl.md) properties, because you can’t reliably make decisions based on a file’s location, type, or modification date when it is being asynchronously moved, renamed, or changed at that moment.
- The [isDocumentEdited](isdocumentedited.md) and [hasUnautosavedChanges](hasunautosavedchanges.md) properties, because you can’t reliably make decisions based on whether the document’s contents in memory have been saved to a file when it is being asynchronously saved at that moment.
- [updateChangeCount(withToken:for:)](updatechangecount%28withtoken_for_%29.md) and, sometimes, [updateChangeCount(\_:)](updatechangecount%28__%29.md), to make using this mechanism when invoking [isDocumentEdited](isdocumentedited.md) and [hasUnautosavedChanges](hasunautosavedchanges.md) meaningful.

## See Also

### Performing Tasks Serially

- [performAsynchronousFileAccess(\_:)](performasynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete but without blocking the main thread, then invokes the passed-in block.
- [performActivity(withSynchronousWaiting:using:)](performactivity%28withsynchronouswaiting_using_%29.md): Waits for any work scheduled by previous invocations of this method to complete, then invokes the passed-in block.
- [continueActivity(\_:)](continueactivity%28__%29.md): Continues to perform the task for a user activity object using a different block.
- [continueAsynchronousWorkOnMainThread(\_:)](continueasynchronousworkonmainthread%28__%29.md): Invokes the passed-in block on the main thread.

# performSynchronousFileAccessUsingBlock: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Waits for any scheduled file access to complete, then invokes the passed-in block.

## Declaration

```objectivec
- (void) performSynchronousFileAccessUsingBlock:(void (^)()) block;
```

## Parameters

- `block`: A block that performs file access.

<a id="Discussion"></a>

## Discussion

Given a block that will perform file access, this method waits for any file access scheduled by previous invocations of this method or [performAsynchronousFileAccessUsingBlock:](performasynchronousfileaccess%28__%29.md) to complete, then invokes the passed-in block. When the block invocation returns, the method allows the next scheduled file access to to be performed, if any.

Like [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md), this method’s primary use is to wait for asynchronous saving, but in contrast with that method it is only for the part of an asynchronous saving operation that actually touches the document’s file or values in memory that are relative to the document’s file.

In general, you should use this method or [performAsynchronousFileAccessUsingBlock:](performasynchronousfileaccess%28__%29.md) around code that gets or sets values in memory that only make sense in the context of the document file’s current state. For example, `NSDocument` itself consistently uses this mechanism when using the following methods and properties:

- The [fileType](filetype.md), [fileURL](fileurl.md), [fileModificationDate](filemodificationdate.md), and [autosavedContentsFileURL](autosavedcontentsfileurl.md) properties, because you can’t reliably make decisions based on a file’s location, type, or modification date when it is being asynchronously moved, renamed, or changed at that moment.
- The [documentEdited](isdocumentedited.md) and [hasUnautosavedChanges](hasunautosavedchanges.md) properties, because you can’t reliably make decisions based on whether the document’s contents in memory have been saved to a file when it is being asynchronously saved at that moment.
- [updateChangeCountWithToken:forSaveOperation:](updatechangecount%28withtoken_for_%29.md) and, sometimes, [updateChangeCount:](updatechangecount%28__%29.md), to make using this mechanism when invoking [documentEdited](isdocumentedited.md) and [hasUnautosavedChanges](hasunautosavedchanges.md) meaningful.

## See Also

### Performing Tasks Serially

- [performAsynchronousFileAccessUsingBlock:](performasynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete but without blocking the main thread, then invokes the passed-in block.
- [performActivityWithSynchronousWaiting:usingBlock:](performactivity%28withsynchronouswaiting_using_%29.md): Waits for any work scheduled by previous invocations of this method to complete, then invokes the passed-in block.
- [continueActivityUsingBlock:](continueactivity%28__%29.md): Continues to perform the task for a user activity object using a different block.
- [continueAsynchronousWorkOnMainThreadUsingBlock:](continueasynchronousworkonmainthread%28__%29.md): Invokes the passed-in block on the main thread.
