> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/isentirefileloaded](https://developer.apple.com/documentation/appkit/nsdocument/isentirefileloaded)

# isEntireFileLoaded (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the document’s file is completely loaded into memory.

## Declaration

```swift
nonisolated var isEntireFileLoaded: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document’s entire file is loaded into memory; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which signifies that the entire file is loaded into memory. You can override this property to return [false](https://developer.apple.com/documentation/swift/false) if additional data needs to be read from the file. `NSDocument` may use this value to do things like prevent volume ejection or warn the user when a partially loaded file disappears from the file system.

## See Also

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [isDraft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [isDocumentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [isInViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.

# entireFileLoaded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the document’s file is completely loaded into memory.

## Declaration

```objectivec
@property (readonly, getter=isEntireFileLoaded) BOOL entireFileLoaded;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document’s entire file is loaded into memory; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which signifies that the entire file is loaded into memory. You can override this property to return [false](https://developer.apple.com/documentation/swift/false) if additional data needs to be read from the file. `NSDocument` may use this value to do things like prevent volume ejection or warn the user when a partially loaded file disappears from the file system.

## See Also

### Getting Document Metadata

- [fileURL](fileurl.md): The location of the document’s on-disk representation.
- [fileModificationDate](filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [draft](isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [documentEdited](isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [inViewingMode](isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.
