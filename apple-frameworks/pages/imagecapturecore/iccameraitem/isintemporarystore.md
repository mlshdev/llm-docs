> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/isintemporarystore](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/isintemporarystore)

# isInTemporaryStore (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value that indicates whether this item is in a temporary store.

## Declaration

```swift
var isInTemporaryStore: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A device may use a temporary store when it captures images while tethered to a computer.

## See Also

### Locating an Item

- [device](device.md): The item’s parent device.
- [fileSystemPath](filesystempath.md): The item’s file system path on a camera using the mass storage transport type.
- [parentFolder](parentfolder.md): This item’s parent folder.

# inTemporaryStore (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value that indicates whether this item is in a temporary store.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isInTemporaryStore) BOOL inTemporaryStore;
```

<a id="Discussion"></a>

## Discussion

A device may use a temporary store when it captures images while tethered to a computer.

## See Also

### Locating an Item

- [device](device.md): The item’s parent device.
- [fileSystemPath](filesystempath.md): The item’s file system path on a camera using the mass storage transport type.
- [parentFolder](parentfolder.md): This item’s parent folder.
