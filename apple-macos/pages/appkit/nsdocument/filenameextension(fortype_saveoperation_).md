> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/filenameextension(fortype:saveoperation:)](https://developer.apple.com/documentation/appkit/nsdocument/filenameextension(fortype:saveoperation:))

# fileNameExtension(forType:saveOperation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a filename extension that can be appended to a base filename, for a specified file type and kind of save operation.

## Declaration

```swift
nonisolated func fileNameExtension(forType typeName: String, saveOperation: NSDocument.SaveOperationType) -> String?
```

## Parameters

- `typeName`: The file type.
- `saveOperation`: The kind of save operation.

<a id="return-value"></a>

## Return Value

The filename extension.

<a id="Discussion"></a>

## Discussion

The default implementation of this method invokes [preferredFilenameExtension(forType:)](../nsworkspace/preferredfilenameextension%28fortype_%29.md) on the shared workspace object if the type is a UTI or, if it is not, for backward binary compatibility with OS X v10.4 and earlier, invokes [fileExtensionsFromType:](../nsdocumentcontroller/fileextensionsfromtype_.md) on the shared document controller and chooses the first filename extension in the returned array.

You can override this method to customize the appending of extensions to filenames by `NSDocument`. Starting in OS X v10.5, it is invoked from only two places in AppKit:

1. The [autosave(withDelegate:didAutosave:contextInfo:)](autosave%28withdelegate_didautosave_contextinfo_%29.md) method uses this method when creating a new filename for the autosaved contents.
2. The [handleSave(\_:)](handlesave%28__%29.md) method uses this method when adding an extension to the filename specified by a script.

In all other cases, the name of any file being saved will have been fully specified by the user with the Save panel (whether they know it or not).

## See Also

### Managing File Type Information

- [readableTypes](readabletypes.md): Returns the types of data the receiver can read natively and any types filterable to that native type.
- [writableTypes](writabletypes.md): Returns the types of data the receiver can write natively and any types filterable to that native type.
- [isNativeType(\_:)](isnativetype%28__%29.md): Returns a Boolean value that indicates whether the document can read and write the data natively.
- [writableTypes(for:)](writabletypes%28for_%29.md): Returns the names of the types to which this document can be saved for a specified kind of save operation.

# fileNameExtensionForType:saveOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a filename extension that can be appended to a base filename, for a specified file type and kind of save operation.

## Declaration

```objectivec
- (NSString *) fileNameExtensionForType:(NSString *) typeName saveOperation:(NSSaveOperationType) saveOperation;
```

## Parameters

- `typeName`: The file type.
- `saveOperation`: The kind of save operation.

<a id="return-value"></a>

## Return Value

The filename extension.

<a id="Discussion"></a>

## Discussion

The default implementation of this method invokes [preferredFilenameExtensionForType:](../nsworkspace/preferredfilenameextension%28fortype_%29.md) on the shared workspace object if the type is a UTI or, if it is not, for backward binary compatibility with OS X v10.4 and earlier, invokes [fileExtensionsFromType:](../nsdocumentcontroller/fileextensionsfromtype_.md) on the shared document controller and chooses the first filename extension in the returned array.

You can override this method to customize the appending of extensions to filenames by `NSDocument`. Starting in OS X v10.5, it is invoked from only two places in AppKit:

1. The [autosaveDocumentWithDelegate:didAutosaveSelector:contextInfo:](autosave%28withdelegate_didautosave_contextinfo_%29.md) method uses this method when creating a new filename for the autosaved contents.
2. The [handleSaveScriptCommand:](handlesave%28__%29.md) method uses this method when adding an extension to the filename specified by a script.

In all other cases, the name of any file being saved will have been fully specified by the user with the Save panel (whether they know it or not).

## See Also

### Managing File Type Information

- [readableTypes](readabletypes.md): Returns the types of data the receiver can read natively and any types filterable to that native type.
- [writableTypes](writabletypes.md): Returns the types of data the receiver can write natively and any types filterable to that native type.
- [isNativeType:](isnativetype%28__%29.md): Returns a Boolean value that indicates whether the document can read and write the data natively.
- [writableTypesForSaveOperation:](writabletypes%28for_%29.md): Returns the names of the types to which this document can be saved for a specified kind of save operation.
