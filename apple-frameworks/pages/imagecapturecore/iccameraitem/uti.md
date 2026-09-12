> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/uti](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/uti)

# uti (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s uniform type identifier (UTI) string.

## Declaration

```swift
var uti: String? { get }
```

<a id="Discussion"></a>

## Discussion

The `UTI` options are `kUTTypeFolder`, `kUTTypeImage`, `kUTTypeMovie`, `kUTTypeAudio`, or `kUTTypeData`.

## See Also

### Inspecting an Item’s Name and Type

- [name](name.md): The item’s name.
- [ptpObjectHandle](ptpobjecthandle.md): The item’s `PTP` object handle value, if the camera uses the `PTP` protocol.
- [isRaw](israw.md): A Boolean value indicating whether the item is a raw image file.

# UTI (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s uniform type identifier (UTI) string.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * UTI;
```

<a id="Discussion"></a>

## Discussion

The `UTI` options are `kUTTypeFolder`, `kUTTypeImage`, `kUTTypeMovie`, `kUTTypeAudio`, or `kUTTypeData`.

## See Also

### Inspecting an Item’s Name and Type

- [name](name.md): The item’s name.
- [ptpObjectHandle](ptpobjecthandle.md): The item’s `PTP` object handle value, if the camera uses the `PTP` protocol.
- [raw](israw.md): A Boolean value indicating whether the item is a raw image file.
