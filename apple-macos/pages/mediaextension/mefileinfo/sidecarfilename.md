> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mefileinfo/sidecarfilename](https://developer.apple.com/documentation/mediaextension/mefileinfo/sidecarfilename)

# sidecarFileName (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

## Declaration

```swift
var sidecarFileName: String? { get set }
```

<a id="discussion"></a>

## Discussion

The sidecar filename used by the MediaExtension.

Represents a new or existing sidecar file located in the same directory as the primary media file. The filename should include the file extension, and should not contain the file path, or contain any slashes. The file extension should be supported by the format reader, and present in the EXAppExtensionAttributes and UTExportedTypeDeclarations dictionaries in the MediaExtension format reader Info.plist.

# sidecarFileName (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * sidecarFileName;
```

<a id="discussion"></a>

## Discussion

The sidecar filename used by the MediaExtension.

Represents a new or existing sidecar file located in the same directory as the primary media file. The filename should include the file extension, and should not contain the file path, or contain any slashes. The file extension should be supported by the format reader, and present in the EXAppExtensionAttributes and UTExportedTypeDeclarations dictionaries in the MediaExtension format reader Info.plist.
