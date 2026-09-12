> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/filetype](https://developer.apple.com/documentation/appkit/nsdocument/filetype)

# fileType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the document type, as specified in the app’s information property-list file.

## Declaration

```swift
nonisolated var fileType: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The document type affects how the data is filtered when it is written to or read from a file. When a document is saved, the type is determined by the entries in the app’s information property list (specified in `Info.plist)`.

You cannot use this property to change the document’s format after it has already been opened or saved. This property records only the initial document format used when first opening or saving the file.

## See Also

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [isEntireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [isDraft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [isDocumentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [isInViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.

# fileType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the document type, as specified in the app’s information property-list file.

## Declaration

```objectivec
@property (copy, nullable) NSString * fileType;
```

<a id="Discussion"></a>

## Discussion

The document type affects how the data is filtered when it is written to or read from a file. When a document is saved, the type is determined by the entries in the app’s information property list (specified in `Info.plist)`.

You cannot use this property to change the document’s format after it has already been opened or saved. This property records only the initial document format used when first opening or saving the file.

## See Also

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [entireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [draft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [documentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [inViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.
