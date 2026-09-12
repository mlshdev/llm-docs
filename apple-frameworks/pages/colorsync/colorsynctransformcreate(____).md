> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsynctransformcreate(_:_:)](https://developer.apple.com/documentation/colorsync/colorsynctransformcreate(_:_:))

# ColorSyncTransformCreate(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a color transform from a sequence of profiles.

## Declaration

```swift
func ColorSyncTransformCreate(_ profileSequence: CFArray?, _ options: CFDictionary?) -> Unmanaged<ColorSyncTransform>?
```

## Parameters

- `profileSequence`: An array of dictionaries, each one containing a profile object and the information on the usage of the profile in the transform.
- `options`: A dictionary with additional public global options (for example, preferred CMM, quality, and so on). It can also contain custom options that are CMM specific.

<a id="return-value"></a>

## Return Value

A new [ColorSyncTransform](colorsynctransform.md), or `NULL` in case of failure.

<a id="discussion"></a>

## Discussion

Each dictionary in `profileSequence` contains a profile object and information on the usage of the profile in the transform.

Required keys:

- [kColorSyncProfile](kcolorsyncprofile.md): A [ColorSyncProfile](colorsyncprofile.md).
- [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md): A `CFStringRef` defining the rendering intent.
- [kColorSyncTransformTag](kcolorsynctransformtag.md): A `CFStringRef` defining which tags to use.

Optional key:

- [kColorSyncBlackPointCompensation](kcolorsyncblackpointcompensation.md): A `CFBooleanRef` to enable or disable black point compensation.

## See Also

### Creating and applying a transform

- [ColorSyncTransformConvert(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](colorsynctransformconvert%28________________________%29.md): Converts color data from a source layout to a destination layout using a color transform.
- [ColorSyncTransformGetProfileSequence(\_:)](colorsynctransformgetprofilesequence%28__%29.md): Returns the profile sequence used to create a color transform.
- [ColorSyncTransformCopyProperty(\_:\_:\_:)](colorsynctransformcopyproperty%28______%29.md): Copies a property from a color transform.
- [ColorSyncTransformSetProperty(\_:\_:\_:)](colorsynctransformsetproperty%28______%29.md): Sets a property on a color transform.
- [ColorSyncTransformGetTypeID()](colorsynctransformgettypeid%28%29.md): Returns the type identifier for the `ColorSyncTransform` opaque type.

# ColorSyncTransformCreate (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a color transform from a sequence of profiles.

## Declaration

```objectivec
extern ColorSyncTransformRefColorSyncTransformCreate(CFArrayRef profileSequence, CFDictionaryRef options);
```

## Parameters

- `profileSequence`: An array of dictionaries, each one containing a profile object and the information on the usage of the profile in the transform.
- `options`: A dictionary with additional public global options (for example, preferred CMM, quality, and so on). It can also contain custom options that are CMM specific.

<a id="return-value"></a>

## Return Value

A new [ColorSyncTransformRef](colorsynctransform.md), or `NULL` in case of failure.

<a id="discussion"></a>

## Discussion

Each dictionary in `profileSequence` contains a profile object and information on the usage of the profile in the transform.

Required keys:

- [kColorSyncProfile](kcolorsyncprofile.md): A [ColorSyncProfileRef](colorsyncprofile.md).
- [kColorSyncRenderingIntent](kcolorsyncrenderingintent.md): A `CFStringRef` defining the rendering intent.
- [kColorSyncTransformTag](kcolorsynctransformtag.md): A `CFStringRef` defining which tags to use.

Optional key:

- [kColorSyncBlackPointCompensation](kcolorsyncblackpointcompensation.md): A `CFBooleanRef` to enable or disable black point compensation.

## See Also

### Creating and applying a transform

- [ColorSyncTransformConvert](colorsynctransformconvert%28________________________%29.md): Converts color data from a source layout to a destination layout using a color transform.
- [ColorSyncTransformGetProfileSequence](colorsynctransformgetprofilesequence%28__%29.md): Returns the profile sequence used to create a color transform.
- [ColorSyncTransformCopyProperty](colorsynctransformcopyproperty%28______%29.md): Copies a property from a color transform.
- [ColorSyncTransformSetProperty](colorsynctransformsetproperty%28______%29.md): Sets a property on a color transform.
- [ColorSyncTransformGetTypeID](colorsynctransformgettypeid%28%29.md): Returns the type identifier for the `ColorSyncTransform` opaque type.
