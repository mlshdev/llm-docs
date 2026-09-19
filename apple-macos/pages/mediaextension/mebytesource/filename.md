> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaextension/mebytesource/filename

# fileName (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The name of the file for the byte source.

## Declaration

```swift
var fileName: String { get }
```

## See Also

### Inspecting a byte source

- [fileLength](filelength.md): The length of the byte source file.
- [contentType](contenttype.md): The format of the byte source file.
- [relatedFileNamesInSameDirectory](relatedfilenamesinsamedirectory.md): An array of related file names in the parent directory of the byte source file.

# fileName (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The name of the file for the byte source.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * fileName;
```

## See Also

### Inspecting a byte source

- [fileLength](filelength.md): The length of the byte source file.
- [contentType](contenttype.md): The format of the byte source file.
- [relatedFileNamesInSameDirectory](relatedfilenamesinsamedirectory.md): An array of related file names in the parent directory of the byte source file.
