> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mebytesource/relatedfilenamesinsamedirectory](https://developer.apple.com/documentation/mediaextension/mebytesource/relatedfilenamesinsamedirectory)

# relatedFileNamesInSameDirectory (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

An array of related file names in the parent directory of the byte source file.

## Declaration

```swift
var relatedFileNamesInSameDirectory: [String] { get }
```

<a id="Discussion"></a>

## Discussion

The array of related files within the [MEByteSource](../mebytesource.md)’s parent directory that are accessible to the [MEByteSource](../mebytesource.md). Only the relative file names are returned, not the paths. Only files with file extensions listed in the [kMEFormatReaderFileNameExtensionArrayKey](../kmeformatreaderfilenameextensionarraykey.md) array in the format reader property list will be returned. If no related files are available, returns an empty array.

## See Also

### Inspecting a byte source

- [fileName](filename.md): The name of the file for the byte source.
- [fileLength](filelength.md): The length of the byte source file.
- [contentType](contenttype.md): The format of the byte source file.

# relatedFileNamesInSameDirectory (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

An array of related file names in the parent directory of the byte source file.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * relatedFileNamesInSameDirectory;
```

<a id="Discussion"></a>

## Discussion

The array of related files within the [MEByteSource](../mebytesource.md)’s parent directory that are accessible to the [MEByteSource](../mebytesource.md). Only the relative file names are returned, not the paths. Only files with file extensions listed in the [kMEFormatReaderFileNameExtensionArrayKey](../kmeformatreaderfilenameextensionarraykey.md) array in the format reader property list will be returned. If no related files are available, returns an empty array.

## See Also

### Inspecting a byte source

- [fileName](filename.md): The name of the file for the byte source.
- [fileLength](filelength.md): The length of the byte source file.
- [contentType](contenttype.md): The format of the byte source file.
