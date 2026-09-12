> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/isdraft](https://developer.apple.com/documentation/appkit/nsdocument/isdraft)

# isDraft (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

A Boolean value that indicates whether the document is a draft that the user has not yet saved.

## Declaration

```swift
nonisolated var isDraft: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The system presents a Save dialog when the user closes a draft document. Only documents with non-`nil` values for the [fileURL](fileurl.md) property should be considered drafts.

## See Also

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [isEntireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [isDocumentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [isInViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.

# draft (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

A Boolean value that indicates whether the document is a draft that the user has not yet saved.

## Declaration

```objectivec
@property (getter=isDraft) BOOL draft;
```

<a id="Discussion"></a>

## Discussion

The system presents a Save dialog when the user closes a draft document. Only documents with non-`nil` values for the [fileURL](fileurl.md) property should be considered drafts.

## See Also

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [entireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [documentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [inViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.
