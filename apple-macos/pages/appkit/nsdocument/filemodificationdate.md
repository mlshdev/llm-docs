> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/filemodificationdate](https://developer.apple.com/documentation/appkit/nsdocument/filemodificationdate)

# fileModificationDate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The last-known modification date of the document’s on-disk representation.

## Declaration

```swift
nonisolated var fileModificationDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

The `NSDocument` default file saving machinery uses this information to warn the user when the on-disk representation of an open document has been modified by something other than the current app.

## See Also

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [isEntireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [isDraft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [isDocumentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [isInViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.

# fileModificationDate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The last-known modification date of the document’s on-disk representation.

## Declaration

```objectivec
@property (copy, nullable) NSDate * fileModificationDate;
```

<a id="Discussion"></a>

## Discussion

The `NSDocument` default file saving machinery uses this information to warn the user when the on-disk representation of an open document has been modified by something other than the current app.

## See Also

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [entireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [draft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [documentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [inViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.
