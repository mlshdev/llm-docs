> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/fileurl](https://developer.apple.com/documentation/appkit/nsdocument/fileurl)

# fileURL (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The location of the document’s on-disk representation.

## Declaration

```swift
nonisolated var fileURL: URL? { get set }
```

<a id="return-value"></a>

## Return Value

The document’s location.

<a id="Discussion"></a>

## Discussion

The default implementation of this property returns the URL of the file that was opened. Changing the value of this property does not actually change the document’s name or location; it is only for recording the document’s location during its initial opening or saving.

## See Also

### Getting Document Metadata

- [isEntireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [isDraft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [isDocumentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [isInViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.

# fileURL (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The location of the document’s on-disk representation.

## Declaration

```objectivec
@property (copy, nullable) NSURL * fileURL;
```

<a id="return-value"></a>

## Return Value

The document’s location.

<a id="Discussion"></a>

## Discussion

The default implementation of this property returns the URL of the file that was opened. Changing the value of this property does not actually change the document’s name or location; it is only for recording the document’s location during its initial opening or saving.

## See Also

### Getting Document Metadata

- [entireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [draft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [documentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [inViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.
