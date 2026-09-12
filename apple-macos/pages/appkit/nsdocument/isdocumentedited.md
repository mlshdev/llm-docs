> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/isdocumentedited](https://developer.apple.com/documentation/appkit/nsdocument/isdocumentedited)

# isDocumentEdited (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the document has unsaved changes.

## Declaration

```swift
var isDocumentEdited: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the document has been edited. The edited status of each document window reflects the document’s edited status.

## See Also

### Related Documentation

- [updateChangeCount(\_:)](updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [isDocumentEdited](../nswindow/isdocumentedited.md): A Boolean value that indicates whether the window’s document has been edited.

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [isEntireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [isDraft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [isInViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.

# documentEdited (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the document has unsaved changes.

## Declaration

```objectivec
@property (readonly, getter=isDocumentEdited) BOOL documentEdited;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the document has been edited. The edited status of each document window reflects the document’s edited status.

## See Also

### Related Documentation

- [updateChangeCount:](updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [documentEdited](../nswindow/isdocumentedited.md): A Boolean value that indicates whether the window’s document has been edited.

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [entireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [draft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [inViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.
