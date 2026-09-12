> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsynccreatecodefragment(_:_:)](https://developer.apple.com/documentation/colorsync/colorsynccreatecodefragment(_:_:))

# ColorSyncCreateCodeFragment(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a code fragment from a sequence of profiles.

## Declaration

```swift
func ColorSyncCreateCodeFragment(_ profileSequence: CFArray!, _ options: CFDictionary!) -> Unmanaged<CFTypeRef>!
```

## Parameters

- `profileSequence`: An array of dictionaries, each one containing a profile object and the information on the usage of the profile in the code fragment.
- `options`: A dictionary with additional options as in the case of creating a `ColorSyncTransform`.

<a id="return-value"></a>

## Return Value

A `CFTypeRef` representing a ColorSync code fragment, or `NULL` in case of failure.

<a id="discussion"></a>

## Discussion

Each dictionary in `profileSequence` contains a profile object and information on the usage of the profile in the code fragment.

Required keys:

- [kColorSyncProfile](kcolorsyncprofile.md): A [ColorSyncProfile](colorsyncprofile.md).
- [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md): A `CFStringRef` defining the rendering intent.
- [kColorSyncTransformTag](kcolorsynctransformtag.md): A `CFStringRef` defining which tags to use.

Optional key:

- [kColorSyncBlackPointCompensation](kcolorsyncblackpointcompensation.md): A `CFBooleanRef` to enable or disable black point compensation.
- [kColorSyncExtendedRange](kcolorsyncextendedrange.md): A `CFBooleanRef` to enable or disable extended range; disabling implies floating point conversions.

## See Also

### Extracting a conversion for vImage

- [kColorSyncTransformCodeFragmentType](kcolorsynctransformcodefragmenttype.md): A key for the type of code fragment to create, or that the framework created.
- [kColorSyncTransformCodeFragmentMD5](kcolorsynctransformcodefragmentmd5.md): A key for the MD5 checksum of the code fragment.

# ColorSyncCreateCodeFragment (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a code fragment from a sequence of profiles.

## Declaration

```objectivec
extern CFTypeRefColorSyncCreateCodeFragment(CFArrayRef profileSequence, CFDictionaryRef options);
```

## Parameters

- `profileSequence`: An array of dictionaries, each one containing a profile object and the information on the usage of the profile in the code fragment.
- `options`: A dictionary with additional options as in the case of creating a `ColorSyncTransform`.

<a id="return-value"></a>

## Return Value

A `CFTypeRef` representing a ColorSync code fragment, or `NULL` in case of failure.

<a id="discussion"></a>

## Discussion

Each dictionary in `profileSequence` contains a profile object and information on the usage of the profile in the code fragment.

Required keys:

- [kColorSyncProfile](kcolorsyncprofile.md): A [ColorSyncProfileRef](colorsyncprofile.md).
- [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md): A `CFStringRef` defining the rendering intent.
- [kColorSyncTransformTag](kcolorsynctransformtag.md): A `CFStringRef` defining which tags to use.

Optional key:

- [kColorSyncBlackPointCompensation](kcolorsyncblackpointcompensation.md): A `CFBooleanRef` to enable or disable black point compensation.
- [kColorSyncExtendedRange](kcolorsyncextendedrange.md): A `CFBooleanRef` to enable or disable extended range; disabling implies floating point conversions.

## See Also

### Extracting a conversion for vImage

- [kColorSyncTransformCodeFragmentType](kcolorsynctransformcodefragmenttype.md): A key for the type of code fragment to create, or that the framework created.
- [kColorSyncTransformCodeFragmentMD5](kcolorsynctransformcodefragmentmd5.md): A key for the MD5 checksum of the code fragment.
