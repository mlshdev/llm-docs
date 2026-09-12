> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/hasunautosavedchanges](https://developer.apple.com/documentation/appkit/nsdocument/hasunautosavedchanges)

# hasUnautosavedChanges (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the document has changes that have not been autosaved.

## Declaration

```swift
var hasUnautosavedChanges: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the document has changes that have not been autosaved; otherwise, the value is [false](https://developer.apple.com/documentation/swift/false). A document has unsaved changes when the [updateChangeCount(\_:)](updatechangecount%28__%29.md) method has been called since the last save.

## See Also

### Autosaving the Document

- [checkAutosavingSafety()](checkautosavingsafety%28%29.md): Returns a Boolean value that indicates whether it is safe to autosave document changes.
- [scheduleAutosaving()](scheduleautosaving%28%29.md): Schedules periodic autosaving for the purpose of crash protection.
- [autosave(withDelegate:didAutosave:contextInfo:)](autosave%28withdelegate_didautosave_contextinfo_%29.md): Autosaves the document’s contents to an appropriate location in the file system.
- [autosave(withImplicitCancellability:completionHandler:)](autosave%28withimplicitcancellability_completionhandler_%29.md): Autosaves the document’s contents to an appropriate file-system location, as needed.
- [backupFileURL](backupfileurl.md): The URL for the document’s backup file that was created during an autosave operation.

# hasUnautosavedChanges (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the document has changes that have not been autosaved.

## Declaration

```objectivec
@property (readonly) BOOL hasUnautosavedChanges;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the document has changes that have not been autosaved; otherwise, the value is [false](https://developer.apple.com/documentation/swift/false). A document has unsaved changes when the [updateChangeCount:](updatechangecount%28__%29.md) method has been called since the last save.

## See Also

### Autosaving the Document

- [checkAutosavingSafetyAndReturnError:](checkautosavingsafety%28%29.md): Returns a Boolean value that indicates whether it is safe to autosave document changes.
- [scheduleAutosaving](scheduleautosaving%28%29.md): Schedules periodic autosaving for the purpose of crash protection.
- [autosaveDocumentWithDelegate:didAutosaveSelector:contextInfo:](autosave%28withdelegate_didautosave_contextinfo_%29.md): Autosaves the document’s contents to an appropriate location in the file system.
- [autosaveWithImplicitCancellability:completionHandler:](autosave%28withimplicitcancellability_completionhandler_%29.md): Autosaves the document’s contents to an appropriate file-system location, as needed.
- [backupFileURL](backupfileurl.md): The URL for the document’s backup file that was created during an autosave operation.
