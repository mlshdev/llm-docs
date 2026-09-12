> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/lock(_:)](https://developer.apple.com/documentation/appkit/nsdocument/lock(_:))

# lock(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Locks the document in response to the user choosing the Lock menu item.

## Declaration

```swift
@IBAction func lock(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

This is the action of the Lock menu item in a document-based app. This action method invokes the [lock(completionHandler:)](lock%28completionhandler_%29-6zuhh.md) method by default.

## See Also

### Locking the Document

- [unlock(\_:)](unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lock(completionHandler:)](lock%28completionhandler_%29-6zuhh.md): Prevents the user from making further changes to the document.
- [lock(completionHandler:)](lock%28completionhandler_%29-161qv.md): Prevents the user from making changes to the document’s file.
- [unlock(completionHandler:)](unlock%28completionhandler_%29-8p8zd.md): Allows the user to make modifications to the document.
- [unlock(completionHandler:)](unlock%28completionhandler_%29-6m7rh.md): Allows the user to make modifications to the document’s file.
- [isLocked](islocked.md): A Boolean value that indicates whether or not the file can be written to.

# lockDocument: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Locks the document in response to the user choosing the Lock menu item.

## Declaration

```objectivec
- (void) lockDocument:(id) sender;
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

This is the action of the Lock menu item in a document-based app. This action method invokes the [lockDocumentWithCompletionHandler:](lock%28completionhandler_%29-6zuhh.md) method by default.

## See Also

### Locking the Document

- [unlockDocument:](unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lockDocumentWithCompletionHandler:](lock%28completionhandler_%29-6zuhh.md): Prevents the user from making further changes to the document.
- [lockWithCompletionHandler:](lock%28completionhandler_%29-161qv.md): Prevents the user from making changes to the document’s file.
- [unlockDocumentWithCompletionHandler:](unlock%28completionhandler_%29-8p8zd.md): Allows the user to make modifications to the document.
- [unlockWithCompletionHandler:](unlock%28completionhandler_%29-6m7rh.md): Allows the user to make modifications to the document’s file.
- [locked](islocked.md): A Boolean value that indicates whether or not the file can be written to.
