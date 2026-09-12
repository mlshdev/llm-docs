> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/autosave(withdelegate:didautosave:contextinfo:)](https://developer.apple.com/documentation/appkit/nsdocument/autosave(withdelegate:didautosave:contextinfo:))

# autosave(withDelegate:didAutosave:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Autosaves the document’s contents to an appropriate location in the file system.

## Declaration

```swift
func autosave(withDelegate delegate: Any?, didAutosave didAutosaveSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `delegate`: The delegate to which the selector message is sent.
- `didAutosaveSelector`: The selector of the message sent to the delegate.
- `contextInfo`: Object passed with the callback to provide any additional context information.

<a id="Discussion"></a>

## Discussion

After autosaving, sends the message selected by `didAutosaveSelector` to the delegate, with `contextInfo` as the last argument. The method selected by `didAutosaveSelector` must have the same signature as:

```objc
- (void)document:(NSDocument *)document didAutosave:(BOOL)didAutosaveSuccessfully contextInfo:(void *)contextInfo
```

If an error occurs while autosaving, the method reports it to the user before sending the delegate a `succeeded:NO` message.

## See Also

### Related Documentation

- [autosavedContentsFileURL](autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.

### Autosaving the Document

- [checkAutosavingSafety()](checkautosavingsafety%28%29.md): Returns a Boolean value that indicates whether it is safe to autosave document changes.
- [hasUnautosavedChanges](hasunautosavedchanges.md): A Boolean value that indicates whether the document has changes that have not been autosaved.
- [scheduleAutosaving()](scheduleautosaving%28%29.md): Schedules periodic autosaving for the purpose of crash protection.
- [autosave(withImplicitCancellability:completionHandler:)](autosave%28withimplicitcancellability_completionhandler_%29.md): Autosaves the document’s contents to an appropriate file-system location, as needed.
- [backupFileURL](backupfileurl.md): The URL for the document’s backup file that was created during an autosave operation.

# autosaveDocumentWithDelegate:didAutosaveSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Autosaves the document’s contents to an appropriate location in the file system.

## Declaration

```objectivec
- (void) autosaveDocumentWithDelegate:(id) delegate didAutosaveSelector:(SEL) didAutosaveSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `delegate`: The delegate to which the selector message is sent.
- `didAutosaveSelector`: The selector of the message sent to the delegate.
- `contextInfo`: Object passed with the callback to provide any additional context information.

<a id="Discussion"></a>

## Discussion

After autosaving, sends the message selected by `didAutosaveSelector` to the delegate, with `contextInfo` as the last argument. The method selected by `didAutosaveSelector` must have the same signature as:

```objc
- (void)document:(NSDocument *)document didAutosave:(BOOL)didAutosaveSuccessfully contextInfo:(void *)contextInfo
```

If an error occurs while autosaving, the method reports it to the user before sending the delegate a `succeeded:NO` message.

## See Also

### Related Documentation

- [autosavedContentsFileURL](autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.

### Autosaving the Document

- [checkAutosavingSafetyAndReturnError:](checkautosavingsafety%28%29.md): Returns a Boolean value that indicates whether it is safe to autosave document changes.
- [hasUnautosavedChanges](hasunautosavedchanges.md): A Boolean value that indicates whether the document has changes that have not been autosaved.
- [scheduleAutosaving](scheduleautosaving%28%29.md): Schedules periodic autosaving for the purpose of crash protection.
- [autosaveWithImplicitCancellability:completionHandler:](autosave%28withimplicitcancellability_completionhandler_%29.md): Autosaves the document’s contents to an appropriate file-system location, as needed.
- [backupFileURL](backupfileurl.md): The URL for the document’s backup file that was created during an autosave operation.
