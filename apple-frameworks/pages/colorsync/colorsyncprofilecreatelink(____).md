> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecreatelink(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecreatelink(_:_:))

# ColorSyncProfileCreateLink(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a device link profile from an array of profiles.

## Declaration

```swift
func ColorSyncProfileCreateLink(_ profileInfo: CFArray!, _ options: CFDictionary?) -> Unmanaged<ColorSyncProfile>?
```

## Parameters

- `profileInfo`: An array of dictionaries, each containing a profile object and the information on the usage of the profile in the transform.
- `options`: A dictionary with additional public global options (for example, preferred CMM, quality, and so on). It can also contain custom options that are CMM specific.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

<a id="discussion"></a>

## Discussion

Each dictionary in `profileInfo` contains a profile object and information on the usage of the profile in the transform.

Required keys:

- [kColorSyncProfile](kcolorsyncprofile.md): A [ColorSyncProfile](colorsyncprofile.md).
- [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md): A `CFStringRef` defining the rendering intent.
- [kColorSyncTransformTag](kcolorsynctransformtag.md): A `CFStringRef` defining which tags to use.

Optional key:

- [kColorSyncBlackPointCompensation](kcolorsyncblackpointcompensation.md): A `CFBooleanRef` to enable or disable black point compensation.

## See Also

### Proofing and gamut checking

- [kColorSyncTransformDeviceToDevice](kcolorsynctransformdevicetodevice.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the device-to-device conversion direction.
- [kColorSyncTransformGamutCheck](kcolorsynctransformgamutcheck.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value that checks whether colors fall outside the destination gamut.

# ColorSyncProfileCreateLink (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a device link profile from an array of profiles.

## Declaration

```objectivec
extern ColorSyncProfileRefColorSyncProfileCreateLink(CFArrayRef profileInfo, CFDictionaryRef options);
```

## Parameters

- `profileInfo`: An array of dictionaries, each containing a profile object and the information on the usage of the profile in the transform.
- `options`: A dictionary with additional public global options (for example, preferred CMM, quality, and so on). It can also contain custom options that are CMM specific.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

<a id="discussion"></a>

## Discussion

Each dictionary in `profileInfo` contains a profile object and information on the usage of the profile in the transform.

Required keys:

- [kColorSyncProfile](kcolorsyncprofile.md): A [ColorSyncProfileRef](colorsyncprofile.md).
- [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md): A `CFStringRef` defining the rendering intent.
- [kColorSyncTransformTag](kcolorsynctransformtag.md): A `CFStringRef` defining which tags to use.

Optional key:

- [kColorSyncBlackPointCompensation](kcolorsyncblackpointcompensation.md): A `CFBooleanRef` to enable or disable black point compensation.

## See Also

### Proofing and gamut checking

- [kColorSyncTransformDeviceToDevice](kcolorsynctransformdevicetodevice.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the device-to-device conversion direction.
- [kColorSyncTransformGamutCheck](kcolorsynctransformgamutcheck.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value that checks whether colors fall outside the destination gamut.
