> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/checkautosavingsafety()](https://developer.apple.com/documentation/appkit/nsdocument/checkautosavingsafety())

# checkAutosavingSafety() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a Boolean value that indicates whether it is safe to autosave document changes.

## Declaration

```swift
func checkAutosavingSafety() throws
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method checks for documents that have not been changed in a while (“a while” is subject to change) or are saved in folders where the user typically does not edit documents (the `~/Downloads` folder, for example). When it senses one of those cases it returns [false](https://developer.apple.com/documentation/swift/false) with an `NSError` object that has recovery options like Duplicate, Cancel, and Unlock.

In an app that has adopted autosaving in place by overriding [autosavesInPlace](autosavesinplace.md) to return [true](https://developer.apple.com/documentation/swift/true), you can override this method to customize the autosaving safety checking that `NSDocument` does by default. You can remove the `NSDocument` default checking by overriding this method and not invoking super. You can add to the `NSDocument` default checking by invoking super and then doing your own checking if `[super checkAutosavingSafetyAndReturnError:]` did not signal an error. For example, TextEdit overrides this method to ask the user what to do when opening a document file has been lossy and overwriting that file might therefore be lossy.

When autosaving in place is turned on an `NSDocument` object may invoke this method when it receives notification from its `NSUndoManager` object that the user changed the document, or undid or redid a change. If an error is returned, `NSDocument` presents the error to the user, allowing the user to choose a recovery option. If the user chooses a recovery option, then `NSDocument` invokes this method again until no error is signaled, to make sure that all checks have been done. This means that when you signal an error and the user’s choice of recovery option indicates that they have seen and disregarded a safety concern, you must record that fact and not do that particular safety check again. Once all errors are handled, `NSDocument` continues by invoking [updateChangeCount(\_:)](updatechangecount%28__%29.md). If the user does not recover from an error, then `NSDocument` invokes one of the `NSUndoManager` methods [undo()](https://developer.apple.com/documentation/foundation/undomanager/undo%28%29) or [redo()](https://developer.apple.com/documentation/foundation/undomanager/redo%28%29) to roll back the change. So, some of the `NSError` recovery options the user can choose, like the `NSDocument` options Duplicate and Cancel, should indicate failed recovery and cause the document to remain unchanged afterward.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Autosaving the Document

- [hasUnautosavedChanges](hasunautosavedchanges.md): A Boolean value that indicates whether the document has changes that have not been autosaved.
- [scheduleAutosaving()](scheduleautosaving%28%29.md): Schedules periodic autosaving for the purpose of crash protection.
- [autosave(withDelegate:didAutosave:contextInfo:)](autosave%28withdelegate_didautosave_contextinfo_%29.md): Autosaves the document’s contents to an appropriate location in the file system.
- [autosave(withImplicitCancellability:completionHandler:)](autosave%28withimplicitcancellability_completionhandler_%29.md): Autosaves the document’s contents to an appropriate file-system location, as needed.
- [backupFileURL](backupfileurl.md): The URL for the document’s backup file that was created during an autosave operation.

# checkAutosavingSafetyAndReturnError: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a Boolean value that indicates whether it is safe to autosave document changes.

## Declaration

```objectivec
- (BOOL) checkAutosavingSafetyAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: If [false](https://developer.apple.com/documentation/swift/false) is returned, a pointer to an error object that encapsulates the reason the document should not be autosaved.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if autosaving the document is probably safe; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation of this method checks for documents that have not been changed in a while (“a while” is subject to change) or are saved in folders where the user typically does not edit documents (the `~/Downloads` folder, for example). When it senses one of those cases it returns [false](https://developer.apple.com/documentation/swift/false) with an `NSError` object that has recovery options like Duplicate, Cancel, and Unlock.

In an app that has adopted autosaving in place by overriding [autosavesInPlace](autosavesinplace.md) to return [true](https://developer.apple.com/documentation/swift/true), you can override this method to customize the autosaving safety checking that `NSDocument` does by default. You can remove the `NSDocument` default checking by overriding this method and not invoking super. You can add to the `NSDocument` default checking by invoking super and then doing your own checking if `[super checkAutosavingSafetyAndReturnError:]` did not signal an error. For example, TextEdit overrides this method to ask the user what to do when opening a document file has been lossy and overwriting that file might therefore be lossy.

When autosaving in place is turned on an `NSDocument` object may invoke this method when it receives notification from its `NSUndoManager` object that the user changed the document, or undid or redid a change. If an error is returned, `NSDocument` presents the error to the user, allowing the user to choose a recovery option. If the user chooses a recovery option, then `NSDocument` invokes this method again until no error is signaled, to make sure that all checks have been done. This means that when you signal an error and the user’s choice of recovery option indicates that they have seen and disregarded a safety concern, you must record that fact and not do that particular safety check again. Once all errors are handled, `NSDocument` continues by invoking [updateChangeCount:](updatechangecount%28__%29.md). If the user does not recover from an error, then `NSDocument` invokes one of the `NSUndoManager` methods [undo](https://developer.apple.com/documentation/foundation/undomanager/undo%28%29) or [redo](https://developer.apple.com/documentation/foundation/undomanager/redo%28%29) to roll back the change. So, some of the `NSError` recovery options the user can choose, like the `NSDocument` options Duplicate and Cancel, should indicate failed recovery and cause the document to remain unchanged afterward.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Autosaving the Document

- [hasUnautosavedChanges](hasunautosavedchanges.md): A Boolean value that indicates whether the document has changes that have not been autosaved.
- [scheduleAutosaving](scheduleautosaving%28%29.md): Schedules periodic autosaving for the purpose of crash protection.
- [autosaveDocumentWithDelegate:didAutosaveSelector:contextInfo:](autosave%28withdelegate_didautosave_contextinfo_%29.md): Autosaves the document’s contents to an appropriate location in the file system.
- [autosaveWithImplicitCancellability:completionHandler:](autosave%28withimplicitcancellability_completionhandler_%29.md): Autosaves the document’s contents to an appropriate file-system location, as needed.
- [backupFileURL](backupfileurl.md): The URL for the document’s backup file that was created during an autosave operation.
