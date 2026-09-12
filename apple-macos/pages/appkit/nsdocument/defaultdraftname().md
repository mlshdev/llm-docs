> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/defaultdraftname()](https://developer.apple.com/documentation/appkit/nsdocument/defaultdraftname())

# defaultDraftName() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Returns the default draft name for the document subclass.

## Declaration

```swift
func defaultDraftName() -> String
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the string “Untitled”, as adjusted according to the user’s specified locale. Your app should typically return a name that describes the kind of document. For example, a spreadsheet app could return “Spreadsheet”. A document created from a template could return the name of the template, for example, “Résumé”.

When a document has not yet been assigned a name, and has not yet been autosaved with the [NSDocument.SaveOperationType.autosaveAsOperation](saveoperationtype/autosaveasoperation.md) save operation type, the document bases the default name on the value in the [displayName](displayname.md) property.

If there is a already another document or file in the same place and with the same name as would be returned by this method, [NSDocument](../nsdocument.md) appends a number to the [defaultDraftName()](defaultdraftname%28%29.md) string.

## See Also

### Managing Document Windows

- [showWindows()](showwindows%28%29.md): Displays all of the document’s windows, bringing them to the front and making them main or key as necessary.
- [setWindow(\_:)](setwindow%28__%29.md): Sets the window outlet of this document to the specified value.
- [windowForSheet](windowforsheet.md): Returns the document window to use as the parent of a document-modal sheet.
- [displayName](displayname.md): The name of the document as displayed in the title bars of the document’s windows and in alert dialogs related to the document.
- [encodeRestorableState(with:backgroundQueue:)](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the document.

# defaultDraftName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Returns the default draft name for the document subclass.

## Declaration

```objectivec
- (NSString *) defaultDraftName;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the string “Untitled”, as adjusted according to the user’s specified locale. Your app should typically return a name that describes the kind of document. For example, a spreadsheet app could return “Spreadsheet”. A document created from a template could return the name of the template, for example, “Résumé”.

When a document has not yet been assigned a name, and has not yet been autosaved with the [NSAutosaveAsOperation](saveoperationtype/autosaveasoperation.md) save operation type, the document bases the default name on the value in the [displayName](displayname.md) property.

If there is a already another document or file in the same place and with the same name as would be returned by this method, [NSDocument](../nsdocument.md) appends a number to the [defaultDraftName](defaultdraftname%28%29.md) string.

## See Also

### Managing Document Windows

- [showWindows](showwindows%28%29.md): Displays all of the document’s windows, bringing them to the front and making them main or key as necessary.
- [setWindow:](setwindow%28__%29.md): Sets the window outlet of this document to the specified value.
- [windowForSheet](windowforsheet.md): Returns the document window to use as the parent of a document-modal sheet.
- [displayName](displayname.md): The name of the document as displayed in the title bars of the document’s windows and in alert dialogs related to the document.
- [encodeRestorableStateWithCoder:backgroundQueue:](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the document.
