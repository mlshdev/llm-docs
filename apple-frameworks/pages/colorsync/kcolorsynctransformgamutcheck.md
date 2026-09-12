> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsynctransformgamutcheck](https://developer.apple.com/documentation/colorsync/kcolorsynctransformgamutcheck)

# kColorSyncTransformGamutCheck (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A [kColorSyncTransformTag](kcolorsynctransformtag.md) value that checks whether colors fall outside the destination gamut.

## Declaration

```swift
var kColorSyncTransformGamutCheck: Unmanaged<CFString>!
```

## See Also

### Proofing and gamut checking

- [ColorSyncProfileCreateLink(\_:\_:)](colorsyncprofilecreatelink%28____%29.md): Creates a device link profile from an array of profiles.
- [kColorSyncTransformDeviceToDevice](kcolorsynctransformdevicetodevice.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the device-to-device conversion direction.

# kColorSyncTransformGamutCheck (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A [kColorSyncTransformTag](kcolorsynctransformtag.md) value that checks whether colors fall outside the destination gamut.

## Declaration

```objectivec
extern CFStringRef kColorSyncTransformGamutCheck;
```

## See Also

### Proofing and gamut checking

- [ColorSyncProfileCreateLink](colorsyncprofilecreatelink%28____%29.md): Creates a device link profile from an array of profiles.
- [kColorSyncTransformDeviceToDevice](kcolorsynctransformdevicetodevice.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the device-to-device conversion direction.
