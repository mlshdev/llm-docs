> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsynctransformdevicetodevice](https://developer.apple.com/documentation/colorsync/kcolorsynctransformdevicetodevice)

# kColorSyncTransformDeviceToDevice (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the device-to-device conversion direction.

## Declaration

```swift
var kColorSyncTransformDeviceToDevice: Unmanaged<CFString>!
```

## See Also

### Proofing and gamut checking

- [ColorSyncProfileCreateLink(\_:\_:)](colorsyncprofilecreatelink%28____%29.md): Creates a device link profile from an array of profiles.
- [kColorSyncTransformGamutCheck](kcolorsynctransformgamutcheck.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value that checks whether colors fall outside the destination gamut.

# kColorSyncTransformDeviceToDevice (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the device-to-device conversion direction.

## Declaration

```objectivec
extern CFStringRef kColorSyncTransformDeviceToDevice;
```

## See Also

### Proofing and gamut checking

- [ColorSyncProfileCreateLink](colorsyncprofilecreatelink%28____%29.md): Creates a device link profile from an array of profiles.
- [kColorSyncTransformGamutCheck](kcolorsynctransformgamutcheck.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value that checks whether colors fall outside the destination gamut.
