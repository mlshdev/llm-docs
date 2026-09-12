> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/keepbackupfile](https://developer.apple.com/documentation/appkit/nsdocument/keepbackupfile)

# keepBackupFile (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the document archives previously saved versions of the document.

## Declaration

```swift
nonisolated var keepBackupFile: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes each new save operation to replace the document’s on-disk content. If you override this method and return [true](https://developer.apple.com/documentation/swift/true), a save operation saves the document’s previous contents in a backup file before saving the current contents.

## See Also

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [isEntireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [isDraft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [isDocumentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [isInViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.

# keepBackupFile (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the document archives previously saved versions of the document.

## Declaration

```objectivec
@property (readonly) BOOL keepBackupFile;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes each new save operation to replace the document’s on-disk content. If you override this method and return [true](https://developer.apple.com/documentation/swift/true), a save operation saves the document’s previous contents in a backup file before saving the current contents.

## See Also

### Related Documentation

- [writeToFile:ofType:](writetofile_oftype_.md): Deprecated. Writes document data to a file.

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [entireFileLoaded](isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [draft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [documentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [inViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.
