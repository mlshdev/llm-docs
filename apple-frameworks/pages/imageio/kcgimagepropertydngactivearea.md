> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertydngactivearea](https://developer.apple.com/documentation/imageio/kcgimagepropertydngactivearea)

# kCGImagePropertyDNGActiveArea (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The rectangle that defines the non-masked pixels of the sensor.

## Declaration

```swift
let kCGImagePropertyDNGActiveArea: CFString
```

## See Also

### Crop Data

- [kCGImagePropertyDNGMaskedAreas](kcgimagepropertydngmaskedareas.md): A list of non-overlapping rectangles that contain fully masked pixels in the image.
- [kCGImagePropertyDNGDefaultCropOrigin](kcgimagepropertydngdefaultcroporigin.md): The origin of the final image area, relative to the top-left corner of the active area rectangle.
- [kCGImagePropertyDNGDefaultCropSize](kcgimagepropertydngdefaultcropsize.md): The size of the final image area, in raw image coordinates.
- [kCGImagePropertyDNGDefaultUserCrop](kcgimagepropertydngdefaultusercrop.md): A default user-crop rectangle in relative coordinates.

# kCGImagePropertyDNGActiveArea (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The rectangle that defines the non-masked pixels of the sensor.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyDNGActiveArea;
```

## See Also

### Crop Data

- [kCGImagePropertyDNGMaskedAreas](kcgimagepropertydngmaskedareas.md): A list of non-overlapping rectangles that contain fully masked pixels in the image.
- [kCGImagePropertyDNGDefaultCropOrigin](kcgimagepropertydngdefaultcroporigin.md): The origin of the final image area, relative to the top-left corner of the active area rectangle.
- [kCGImagePropertyDNGDefaultCropSize](kcgimagepropertydngdefaultcropsize.md): The size of the final image area, in raw image coordinates.
- [kCGImagePropertyDNGDefaultUserCrop](kcgimagepropertydngdefaultusercrop.md): A default user-crop rectangle in relative coordinates.
