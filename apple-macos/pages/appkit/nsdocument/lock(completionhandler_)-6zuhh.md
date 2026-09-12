> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/lock(completionhandler:)-6zuhh](https://developer.apple.com/documentation/appkit/nsdocument/lock(completionhandler:)-6zuhh)

# lock(completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Prevents the user from making further changes to the document.

## Declaration

```swift
func lock(completionHandler: ((Bool) -> Void)? = nil)
```

```swift
func lock() async -> Bool
```

## Parameters

- `completionHandler`: The completion handler block object passed in to be invoked after locking is completed, regardless of success or failure of locking.

<a id="Discussion"></a>

## Discussion

By default, this method first ensures that any editor who has registered using Cocoa Binding’s NSEditorRegistration informal protocol has committed all changes and then autosaves the document, if necessary, before attempting to lock it using the [lock(completionHandler:)](lock%28completionhandler_%29-161qv.md) method. Upon successful locking, the [isLocked](islocked.md) property is set to `[YES]`. Documents whose [fileURL](fileurl.md) property is set to `nil` cannot be locked.

## See Also

### Locking the Document

- [lock(\_:)](lock%28__%29.md): Locks the document in response to the user choosing the Lock menu item.
- [unlock(\_:)](unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lock(completionHandler:)](lock%28completionhandler_%29-161qv.md): Prevents the user from making changes to the document’s file.
- [unlock(completionHandler:)](unlock%28completionhandler_%29-8p8zd.md): Allows the user to make modifications to the document.
- [unlock(completionHandler:)](unlock%28completionhandler_%29-6m7rh.md): Allows the user to make modifications to the document’s file.
- [isLocked](islocked.md): A Boolean value that indicates whether or not the file can be written to.

# lockDocumentWithCompletionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Prevents the user from making further changes to the document.

## Declaration

```objectivec
- (void) lockDocumentWithCompletionHandler:(void (^)(BOOL didLock)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler block object passed in to be invoked after locking is completed, regardless of success or failure of locking.

<a id="Discussion"></a>

## Discussion

By default, this method first ensures that any editor who has registered using Cocoa Binding’s NSEditorRegistration informal protocol has committed all changes and then autosaves the document, if necessary, before attempting to lock it using the [lockWithCompletionHandler:](lock%28completionhandler_%29-161qv.md) method. Upon successful locking, the [locked](islocked.md) property is set to `[YES]`. Documents whose [fileURL](fileurl.md) property is set to `nil` cannot be locked.

## See Also

### Locking the Document

- [lockDocument:](lock%28__%29.md): Locks the document in response to the user choosing the Lock menu item.
- [unlockDocument:](unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lockWithCompletionHandler:](lock%28completionhandler_%29-161qv.md): Prevents the user from making changes to the document’s file.
- [unlockDocumentWithCompletionHandler:](unlock%28completionhandler_%29-8p8zd.md): Allows the user to make modifications to the document.
- [unlockWithCompletionHandler:](unlock%28completionhandler_%29-6m7rh.md): Allows the user to make modifications to the document’s file.
- [locked](islocked.md): A Boolean value that indicates whether or not the file can be written to.
