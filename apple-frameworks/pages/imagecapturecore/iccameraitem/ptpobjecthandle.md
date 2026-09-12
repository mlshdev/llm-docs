> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/ptpobjecthandle](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/ptpobjecthandle)

# ptpObjectHandle (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s `PTP` object handle value, if the camera uses the `PTP` protocol.

## Declaration

```swift
var ptpObjectHandle: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set to `0` if the camera does not use PTP protocol.

## See Also

### Inspecting an Item’s Name and Type

- [uti](uti.md): The item’s uniform type identifier (UTI) string.
- [name](name.md): The item’s name.
- [isRaw](israw.md): A Boolean value indicating whether the item is a raw image file.

# ptpObjectHandle (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s `PTP` object handle value, if the camera uses the `PTP` protocol.

## Declaration

```objectivec
@property (nonatomic, readonly) unsigned int ptpObjectHandle;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set to `0` if the camera does not use PTP protocol.

## See Also

### Inspecting an Item’s Name and Type

- [UTI](uti.md): The item’s uniform type identifier (UTI) string.
- [name](name.md): The item’s name.
- [raw](israw.md): A Boolean value indicating whether the item is a raw image file.
