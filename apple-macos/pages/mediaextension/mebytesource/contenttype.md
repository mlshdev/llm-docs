> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mebytesource/contenttype](https://developer.apple.com/documentation/mediaextension/mebytesource/contenttype)

# contentType (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The format of the byte source file.

## Declaration

```swift
var contentType: UTType? { get }
```

## See Also

### Inspecting a byte source

- [fileName](filename.md): The name of the file for the byte source.
- [fileLength](filelength.md): The length of the byte source file.
- [relatedFileNamesInSameDirectory](relatedfilenamesinsamedirectory.md): An array of related file names in the parent directory of the byte source file.

# contentType (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The format of the byte source file.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UTType * contentType;
```

## See Also

### Inspecting a byte source

- [fileName](filename.md): The name of the file for the byte source.
- [fileLength](filelength.md): The length of the byte source file.
- [relatedFileNamesInSameDirectory](relatedfilenamesinsamedirectory.md): An array of related file names in the parent directory of the byte source file.
