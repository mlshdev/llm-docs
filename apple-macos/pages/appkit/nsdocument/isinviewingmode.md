> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/isinviewingmode](https://developer.apple.com/documentation/appkit/nsdocument/isinviewingmode)

# isInViewingMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the document is in read-only mode.

## Declaration

```swift
var isInViewingMode: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the document is in read-only “viewing mode,” that is, if the document is locked. You can use this information to prevent certain kinds of user actions or changes when the user is viewing an old document revision.

## See Also

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [isEntireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [isDraft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [isDocumentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.

# inViewingMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the document is in read-only mode.

## Declaration

```objectivec
@property (readonly, getter=isInViewingMode) BOOL inViewingMode;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the document is in read-only “viewing mode,” that is, if the document is locked. You can use this information to prevent certain kinds of user actions or changes when the user is viewing an old document revision.

## See Also

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [entireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [draft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [documentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
