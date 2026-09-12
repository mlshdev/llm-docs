> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/scheduleautosaving()](https://developer.apple.com/documentation/appkit/nsdocument/scheduleautosaving())

# scheduleAutosaving() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Schedules periodic autosaving for the purpose of crash protection.

## Declaration

```swift
func scheduleAutosaving()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method checks to see if autosaving is turned on and, if so and if `[self hasUnautosavedChanges]` returns [true](https://developer.apple.com/documentation/swift/true), schedules an `NSTimer` to invoke [autosave(withDelegate:didAutosave:contextInfo:)](autosave%28withdelegate_didautosave_contextinfo_%29.md) in the future. If `[self hasUnautosavedChanges]` returns [false](https://developer.apple.com/documentation/swift/false) it unschedules any previously scheduled timer. It takes care not to cause [autosave(withDelegate:didAutosave:contextInfo:)](autosave%28withdelegate_didautosave_contextinfo_%29.md) to be invoked before a previous invocation caused by it has finished. The exact timings it uses are complicated and subject to change in future releases of macOS. You can override this method to control when exactly periodic autosaving happens. It is invoked by [updateChangeCount(\_:)](updatechangecount%28__%29.md) and [updateChangeCount(withToken:for:)](updatechangecount%28withtoken_for_%29.md).

## See Also

### Autosaving the Document

- [checkAutosavingSafety()](checkautosavingsafety%28%29.md): Returns a Boolean value that indicates whether it is safe to autosave document changes.
- [hasUnautosavedChanges](hasunautosavedchanges.md): A Boolean value that indicates whether the document has changes that have not been autosaved.
- [autosave(withDelegate:didAutosave:contextInfo:)](autosave%28withdelegate_didautosave_contextinfo_%29.md): Autosaves the document’s contents to an appropriate location in the file system.
- [autosave(withImplicitCancellability:completionHandler:)](autosave%28withimplicitcancellability_completionhandler_%29.md): Autosaves the document’s contents to an appropriate file-system location, as needed.
- [backupFileURL](backupfileurl.md): The URL for the document’s backup file that was created during an autosave operation.

# scheduleAutosaving (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Schedules periodic autosaving for the purpose of crash protection.

## Declaration

```objectivec
- (void) scheduleAutosaving;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method checks to see if autosaving is turned on and, if so and if `[self hasUnautosavedChanges]` returns [true](https://developer.apple.com/documentation/swift/true), schedules an `NSTimer` to invoke [autosaveDocumentWithDelegate:didAutosaveSelector:contextInfo:](autosave%28withdelegate_didautosave_contextinfo_%29.md) in the future. If `[self hasUnautosavedChanges]` returns [false](https://developer.apple.com/documentation/swift/false) it unschedules any previously scheduled timer. It takes care not to cause [autosaveDocumentWithDelegate:didAutosaveSelector:contextInfo:](autosave%28withdelegate_didautosave_contextinfo_%29.md) to be invoked before a previous invocation caused by it has finished. The exact timings it uses are complicated and subject to change in future releases of macOS. You can override this method to control when exactly periodic autosaving happens. It is invoked by [updateChangeCount:](updatechangecount%28__%29.md) and [updateChangeCountWithToken:forSaveOperation:](updatechangecount%28withtoken_for_%29.md).

## See Also

### Autosaving the Document

- [checkAutosavingSafetyAndReturnError:](checkautosavingsafety%28%29.md): Returns a Boolean value that indicates whether it is safe to autosave document changes.
- [hasUnautosavedChanges](hasunautosavedchanges.md): A Boolean value that indicates whether the document has changes that have not been autosaved.
- [autosaveDocumentWithDelegate:didAutosaveSelector:contextInfo:](autosave%28withdelegate_didautosave_contextinfo_%29.md): Autosaves the document’s contents to an appropriate location in the file system.
- [autosaveWithImplicitCancellability:completionHandler:](autosave%28withimplicitcancellability_completionhandler_%29.md): Autosaves the document’s contents to an appropriate file-system location, as needed.
- [backupFileURL](backupfileurl.md): The URL for the document’s backup file that was created during an autosave operation.
