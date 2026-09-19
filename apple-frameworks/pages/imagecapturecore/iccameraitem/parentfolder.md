> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccameraitem/parentfolder

# parentFolder (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

This item’s parent folder.

## Declaration

```swift
var parentFolder: ICCameraFolder? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property on the root folder is nil.

## See Also

### Locating an Item

- [device](device.md): The item’s parent device.
- [fileSystemPath](filesystempath.md): The item’s file system path on a camera using the mass storage transport type.
- [isInTemporaryStore](isintemporarystore.md): A Boolean value that indicates whether this item is in a temporary store.

# parentFolder (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

This item’s parent folder.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) ICCameraFolder * parentFolder;
```

<a id="Discussion"></a>

## Discussion

The value of this property on the root folder is nil.

## See Also

### Locating an Item

- [device](device.md): The item’s parent device.
- [fileSystemPath](filesystempath.md): The item’s file system path on a camera using the mass storage transport type.
- [inTemporaryStore](isintemporarystore.md): A Boolean value that indicates whether this item is in a temporary store.
