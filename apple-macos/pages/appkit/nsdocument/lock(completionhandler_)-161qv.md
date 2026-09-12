> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/lock(completionhandler:)-161qv](https://developer.apple.com/documentation/appkit/nsdocument/lock(completionhandler:)-161qv)

# lock(completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Prevents the user from making changes to the document’s file.

## Declaration

```swift
func lock(completionHandler: (((any Error)?) -> Void)? = nil)
```

```swift
func lock() async throws
```

## Parameters

- `completionHandler`: The completion handler block object passed in to be invoked after locking is completed, regardless of success or failure of locking.

<a id="Discussion"></a>

## Discussion

This method first locks the file at `[self fileURL]` and then invokes the given block. The default locking implementation is to enable the “user immutable” flag on the file.

## See Also

### Locking the Document

- [lock(\_:)](lock%28__%29.md): Locks the document in response to the user choosing the Lock menu item.
- [unlock(\_:)](unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lock(completionHandler:)](lock%28completionhandler_%29-6zuhh.md): Prevents the user from making further changes to the document.
- [unlock(completionHandler:)](unlock%28completionhandler_%29-8p8zd.md): Allows the user to make modifications to the document.
- [unlock(completionHandler:)](unlock%28completionhandler_%29-6m7rh.md): Allows the user to make modifications to the document’s file.
- [isLocked](islocked.md): A Boolean value that indicates whether or not the file can be written to.

# lockWithCompletionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Prevents the user from making changes to the document’s file.

## Declaration

```objectivec
- (void) lockWithCompletionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler block object passed in to be invoked after locking is completed, regardless of success or failure of locking.

<a id="Discussion"></a>

## Discussion

This method first locks the file at `[self fileURL]` and then invokes the given block. The default locking implementation is to enable the “user immutable” flag on the file.

## See Also

### Locking the Document

- [lockDocument:](lock%28__%29.md): Locks the document in response to the user choosing the Lock menu item.
- [unlockDocument:](unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lockDocumentWithCompletionHandler:](lock%28completionhandler_%29-6zuhh.md): Prevents the user from making further changes to the document.
- [unlockDocumentWithCompletionHandler:](unlock%28completionhandler_%29-8p8zd.md): Allows the user to make modifications to the document.
- [unlockWithCompletionHandler:](unlock%28completionhandler_%29-6m7rh.md): Allows the user to make modifications to the document’s file.
- [locked](islocked.md): A Boolean value that indicates whether or not the file can be written to.
