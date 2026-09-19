> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccameraitem/israw

# isRaw (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether the item is a raw image file.

## Declaration

```swift
var isRaw: Bool { get }
```

## See Also

### Inspecting an Item’s Name and Type

- [uti](uti.md): The item’s uniform type identifier (UTI) string.
- [name](name.md): The item’s name.
- [ptpObjectHandle](ptpobjecthandle.md): The item’s `PTP` object handle value, if the camera uses the `PTP` protocol.

# raw (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether the item is a raw image file.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRaw) BOOL raw;
```

## See Also

### Inspecting an Item’s Name and Type

- [UTI](uti.md): The item’s uniform type identifier (UTI) string.
- [name](name.md): The item’s name.
- [ptpObjectHandle](ptpobjecthandle.md): The item’s `PTP` object handle value, if the camera uses the `PTP` protocol.
