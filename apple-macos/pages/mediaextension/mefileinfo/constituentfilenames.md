> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mefileinfo/constituentfilenames](https://developer.apple.com/documentation/mediaextension/mefileinfo/constituentfilenames)

# constituentFileNames (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

## Declaration

```swift
var constituentFileNames: [String] { get set }
```

<a id="discussion"></a>

## Discussion

List of media files that collectively represent the media asset.

Represents a list of media files that constitute the media asset. All files must be located in the same directory. The returned filenames should include just the file name and file extension, omitting any file path or directory slashes. The file extensions should all be explicitly supported by the format reader as declared in the EXAppExtensionAttributes and UTExportedTypeDeclarations dictionaries in the MediaExtension format reader Info.plist.

# constituentFileNames (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * constituentFileNames;
```

<a id="discussion"></a>

## Discussion

List of media files that collectively represent the media asset.

Represents a list of media files that constitute the media asset. All files must be located in the same directory. The returned filenames should include just the file name and file extension, omitting any file path or directory slashes. The file extensions should all be explicitly supported by the format reader as declared in the EXAppExtensionAttributes and UTExportedTypeDeclarations dictionaries in the MediaExtension format reader Info.plist.
