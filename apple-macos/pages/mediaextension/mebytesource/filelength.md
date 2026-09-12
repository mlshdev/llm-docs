> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mebytesource/filelength](https://developer.apple.com/documentation/mediaextension/mebytesource/filelength)

# fileLength (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The length of the byte source file.

## Declaration

```swift
var fileLength: Int64 { get }
```

## See Also

### Inspecting a byte source

- [fileName](filename.md): The name of the file for the byte source.
- [contentType](contenttype.md): The format of the byte source file.
- [relatedFileNamesInSameDirectory](relatedfilenamesinsamedirectory.md): An array of related file names in the parent directory of the byte source file.

# fileLength (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The length of the byte source file.

## Declaration

```objectivec
@property (nonatomic, readonly) int64_t fileLength;
```

## See Also

### Inspecting a byte source

- [fileName](filename.md): The name of the file for the byte source.
- [contentType](contenttype.md): The format of the byte source file.
- [relatedFileNamesInSameDirectory](relatedfilenamesinsamedirectory.md): An array of related file names in the parent directory of the byte source file.
