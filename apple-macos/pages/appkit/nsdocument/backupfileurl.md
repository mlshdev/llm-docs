> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/backupfileurl](https://developer.apple.com/documentation/appkit/nsdocument/backupfileurl)

# backupFileURL (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The URL for the document’s backup file that was created during an autosave operation.

## Declaration

```swift
nonisolated var backupFileURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This property specifies the location of the backup file, if any. If a backup file cannot be created or is not needed, the value of this property is `nil`.

Starting in OS X v10.8, document versions can be preserved using a backup file created during an autosave operation, which supports document versioning. This property gives you access to the backup file’s URL.

Using an autosave backup file for preserving versions is efficient. This is because an [NSDocument](../nsdocument.md) instance is able to use the [byMoving](https://developer.apple.com/documentation/foundation/nsfileversion/replacingoptions/bymoving) option when it calls the [replaceItem(at:options:)](https://developer.apple.com/documentation/foundation/nsfileversion/replaceitem%28at:options:%29) method. The document gets the value of this property twice during saving:

1. Before calling the [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md) method: This is to check whether using the replace-by-moving option is possible and, if not, to allow the system to preserve data by instead using copying.
2. Within the [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md) method: This is to discover where to put the backup file.

When you implement the [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md) method with the [NSDocument.SaveOperationType.saveOperation](saveoperationtype/saveoperation.md) or [NSDocument.SaveOperationType.autosaveInPlaceOperation](saveoperationtype/autosaveinplaceoperation.md) operation type, you must check this property’s value. If it is not `nil`, move the previous contents of the file (that would be overwritten) to the URL’s location. The default implementation of [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md) does this.

To create a backup file from within your custom implementation of the [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md) method, call the [FileManager](https://developer.apple.com/documentation/foundation/filemanager) method [replaceItem(at:withItemAt:backupItemName:options:resultingItemURL:)](https://developer.apple.com/documentation/foundation/filemanager/replaceitem%28at:withitemat:backupitemname:options:resultingitemurl:%29), using a backup item name of `[[self backupFileURL] lastPathComponent]` and an option of [withoutDeletingBackupItem](https://developer.apple.com/documentation/foundation/filemanager/itemreplacementoptions/withoutdeletingbackupitem) option. If your custom implementation is unable to keep the backup file, you must override this property and return `nil` to ensure that the document’s file gets correctly preserved before it gets overwritten.

The default implementation of the [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md) method returns a non-`nil` value based on the value of `[self fileURL]`, but only if the document’s file needs to be preserved prior to saving or if the [preservesVersions](preservesversions.md) method returns [false](https://developer.apple.com/documentation/swift/false). Otherwise, it returns `nil`.

## See Also

### Autosaving the Document

- [checkAutosavingSafety()](checkautosavingsafety%28%29.md): Returns a Boolean value that indicates whether it is safe to autosave document changes.
- [hasUnautosavedChanges](hasunautosavedchanges.md): A Boolean value that indicates whether the document has changes that have not been autosaved.
- [scheduleAutosaving()](scheduleautosaving%28%29.md): Schedules periodic autosaving for the purpose of crash protection.
- [autosave(withDelegate:didAutosave:contextInfo:)](autosave%28withdelegate_didautosave_contextinfo_%29.md): Autosaves the document’s contents to an appropriate location in the file system.
- [autosave(withImplicitCancellability:completionHandler:)](autosave%28withimplicitcancellability_completionhandler_%29.md): Autosaves the document’s contents to an appropriate file-system location, as needed.

# backupFileURL (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The URL for the document’s backup file that was created during an autosave operation.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * backupFileURL;
```

<a id="Discussion"></a>

## Discussion

This property specifies the location of the backup file, if any. If a backup file cannot be created or is not needed, the value of this property is `nil`.

Starting in OS X v10.8, document versions can be preserved using a backup file created during an autosave operation, which supports document versioning. This property gives you access to the backup file’s URL.

Using an autosave backup file for preserving versions is efficient. This is because an [NSDocument](../nsdocument.md) instance is able to use the [NSFileVersionReplacingByMoving](https://developer.apple.com/documentation/foundation/nsfileversion/replacingoptions/bymoving) option when it calls the [replaceItemAtURL:options:error:](https://developer.apple.com/documentation/foundation/nsfileversion/replaceitem%28at:options:%29) method. The document gets the value of this property twice during saving:

1. Before calling the [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md) method: This is to check whether using the replace-by-moving option is possible and, if not, to allow the system to preserve data by instead using copying.
2. Within the [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md) method: This is to discover where to put the backup file.

When you implement the [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md) method with the [NSSaveOperation](saveoperationtype/saveoperation.md) or [NSAutosaveInPlaceOperation](saveoperationtype/autosaveinplaceoperation.md) operation type, you must check this property’s value. If it is not `nil`, move the previous contents of the file (that would be overwritten) to the URL’s location. The default implementation of [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md) does this.

To create a backup file from within your custom implementation of the [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md) method, call the [NSFileManager](https://developer.apple.com/documentation/foundation/filemanager) method [replaceItemAtURL:withItemAtURL:backupItemName:options:resultingItemURL:error:](https://developer.apple.com/documentation/foundation/filemanager/replaceitem%28at:withitemat:backupitemname:options:resultingitemurl:%29), using a backup item name of `[[self backupFileURL] lastPathComponent]` and an option of [NSFileManagerItemReplacementWithoutDeletingBackupItem](https://developer.apple.com/documentation/foundation/filemanager/itemreplacementoptions/withoutdeletingbackupitem) option. If your custom implementation is unable to keep the backup file, you must override this property and return `nil` to ensure that the document’s file gets correctly preserved before it gets overwritten.

The default implementation of the [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md) method returns a non-`nil` value based on the value of `[self fileURL]`, but only if the document’s file needs to be preserved prior to saving or if the [preservesVersions](preservesversions.md) method returns [false](https://developer.apple.com/documentation/swift/false). Otherwise, it returns `nil`.

## See Also

### Autosaving the Document

- [checkAutosavingSafetyAndReturnError:](checkautosavingsafety%28%29.md): Returns a Boolean value that indicates whether it is safe to autosave document changes.
- [hasUnautosavedChanges](hasunautosavedchanges.md): A Boolean value that indicates whether the document has changes that have not been autosaved.
- [scheduleAutosaving](scheduleautosaving%28%29.md): Schedules periodic autosaving for the purpose of crash protection.
- [autosaveDocumentWithDelegate:didAutosaveSelector:contextInfo:](autosave%28withdelegate_didautosave_contextinfo_%29.md): Autosaves the document’s contents to an appropriate location in the file system.
- [autosaveWithImplicitCancellability:completionHandler:](autosave%28withimplicitcancellability_completionhandler_%29.md): Autosaves the document’s contents to an appropriate file-system location, as needed.
