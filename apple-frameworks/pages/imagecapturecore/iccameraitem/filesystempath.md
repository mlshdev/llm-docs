> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/filesystempath](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/filesystempath)

# fileSystemPath (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The item’s file system path on a camera using the mass storage transport type.

## Declaration

```swift
var fileSystemPath: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is set for cameras whose [transportType](../icdevice/transporttype.md) is [transportTypeMassStorage](../icdevicetransport/transporttypemassstorage.md).

## See Also

### Locating an Item

- [device](device.md): The item’s parent device.
- [parentFolder](parentfolder.md): This item’s parent folder.
- [isInTemporaryStore](isintemporarystore.md): A Boolean value that indicates whether this item is in a temporary store.

# fileSystemPath (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The item’s file system path on a camera using the mass storage transport type.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * fileSystemPath;
```

<a id="Discussion"></a>

## Discussion

This property is set for cameras whose [transportType](../icdevice/transporttype.md) is [ICTransportTypeMassStorage](../icdevicetransport/transporttypemassstorage.md).

## See Also

### Locating an Item

- [device](device.md): The item’s parent device.
- [parentFolder](parentfolder.md): This item’s parent folder.
- [inTemporaryStore](isintemporarystore.md): A Boolean value that indicates whether this item is in a temporary store.
