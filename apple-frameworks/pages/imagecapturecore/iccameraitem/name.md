> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/name](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/name)

# name (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s name.

## Declaration

```swift
var name: String? { get }
```

## See Also

### Inspecting an Item’s Name and Type

- [uti](uti.md): The item’s uniform type identifier (UTI) string.
- [ptpObjectHandle](ptpobjecthandle.md): The item’s `PTP` object handle value, if the camera uses the `PTP` protocol.
- [isRaw](israw.md): A Boolean value indicating whether the item is a raw image file.

# name (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s name.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * name;
```

## See Also

### Inspecting an Item’s Name and Type

- [UTI](uti.md): The item’s uniform type identifier (UTI) string.
- [ptpObjectHandle](ptpobjecthandle.md): The item’s `PTP` object handle value, if the camera uses the `PTP` protocol.
- [raw](israw.md): A Boolean value indicating whether the item is a raw image file.
