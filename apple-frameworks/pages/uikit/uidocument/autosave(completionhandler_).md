> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/autosave(completionhandler:)](https://developer.apple.com/documentation/uikit/uidocument/autosave(completionhandler:))

# autosave(completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initiates automatic saving of documents with unsaved changes.

## Declaration

```swift
func autosave(completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func autosave() async -> Bool
```

## Parameters

- `completionHandler`: A block with code to execute after automatic saving concludes. The block returns no value and has one parameter:

  - **`success`**: [true](https://developer.apple.com/documentation/swift/true) if the autosaving operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

  The block is invoked on the calling queue.

<a id="Discussion"></a>

## Discussion

[UIDocument](../uidocument.md) periodically invokes this method to initiate a save operation if there are unsaved changes. You shouldn’t call this method directly. Subclasses can override it if they want to do special things with autosaving. The default implementation of this method invokes the [hasUnsavedChanges](hasunsavedchanges.md) method and, if that returns [true](https://developer.apple.com/documentation/swift/true), it invokes the [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md) method.

This method should only be invoked for period-based saves. You may invoke it with the `success` parameter of the completion-handler parameter set to [false](https://developer.apple.com/documentation/swift/false) and return; this makes it safe to not actually save when [autosave(completionHandler:)](autosave%28completionhandler_%29.md) is invoked. However, if you call [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md), saving of document data must occur.

## See Also

### Tracking changes and autosaving

- [hasUnsavedChanges](hasunsavedchanges.md): A Boolean value that indicates whether the document has any unsaved changes.
- [updateChangeCount(\_:)](updatechangecount%28__%29.md): Updates the change counter by indicating the kind of change.
- [undoManager](undomanager.md): The undo manager for the document.
- [changeCountToken(for:)](changecounttoken%28for_%29.md): Returns a change token for a specific save operation.
- [updateChangeCount(withToken:for:)](updatechangecount%28withtoken_for_%29.md): Updates the change count with reference to a change-count token passed in by UIKit.

# autosaveWithCompletionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initiates automatic saving of documents with unsaved changes.

## Declaration

```objectivec
- (void) autosaveWithCompletionHandler:(void (^)(BOOL success)) completionHandler;
```

## Parameters

- `completionHandler`: A block with code to execute after automatic saving concludes. The block returns no value and has one parameter:

  - **`success`**: [true](https://developer.apple.com/documentation/swift/true) if the autosaving operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

  The block is invoked on the calling queue.

<a id="Discussion"></a>

## Discussion

[UIDocument](../uidocument.md) periodically invokes this method to initiate a save operation if there are unsaved changes. You shouldn’t call this method directly. Subclasses can override it if they want to do special things with autosaving. The default implementation of this method invokes the [hasUnsavedChanges](hasunsavedchanges.md) method and, if that returns [true](https://developer.apple.com/documentation/swift/true), it invokes the [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md) method.

This method should only be invoked for period-based saves. You may invoke it with the `success` parameter of the completion-handler parameter set to [false](https://developer.apple.com/documentation/swift/false) and return; this makes it safe to not actually save when [autosaveWithCompletionHandler:](autosave%28completionhandler_%29.md) is invoked. However, if you call [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md), saving of document data must occur.

## See Also

### Tracking changes and autosaving

- [hasUnsavedChanges](hasunsavedchanges.md): A Boolean value that indicates whether the document has any unsaved changes.
- [updateChangeCount:](updatechangecount%28__%29.md): Updates the change counter by indicating the kind of change.
- [undoManager](undomanager.md): The undo manager for the document.
- [changeCountTokenForSaveOperation:](changecounttoken%28for_%29.md): Returns a change token for a specific save operation.
- [updateChangeCountWithToken:forSaveOperation:](updatechangecount%28withtoken_for_%29.md): Updates the change count with reference to a change-count token passed in by UIKit.
