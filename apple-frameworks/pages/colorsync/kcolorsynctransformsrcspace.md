> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsynctransformsrcspace](https://developer.apple.com/documentation/colorsync/kcolorsynctransformsrcspace)

# kColorSyncTransformSrcSpace (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key for the transform’s source color space.

## Declaration

```swift
var kColorSyncTransformSrcSpace: Unmanaged<CFString>!
```

## See Also

### Accessing transform properties

- [kColorSyncProfile](kcolorsyncprofile.md): A key for the profile object in a profile-sequence dictionary passed to [ColorSyncTransformCreate(\_:\_:)](colorsynctransformcreate%28____%29.md).
- [kColorSyncTransformCreator](kcolorsynctransformcreator.md): A key for the name of the CMM that created the transform.
- [kColorSyncTransformDeviceToPCS](kcolorsynctransformdevicetopcs.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the device-to-PCS conversion direction.
- [kColorSyncTransformDstSpace](kcolorsynctransformdstspace.md): A key for the transform’s destination color space.
- [kColorSyncTransformInfo](kcolorsynctransforminfo.md): A key for a dictionary of information about the transform.
- [kColorSyncTransformPCSToDevice](kcolorsynctransformpcstodevice.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the PCS-to-device conversion direction.
- [kColorSyncTransformPCSToPCS](kcolorsynctransformpcstopcs.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the PCS-to-PCS conversion direction.
- [kColorSyncTransformProfileSequnce](kcolorsynctransformprofilesequnce.md): A key for the profile sequence used to create the transform.
- [kColorSyncTransformTag](kcolorsynctransformtag.md): A key for the tag identifying which tags of the profile to use in a profile-sequence dictionary.

# kColorSyncTransformSrcSpace (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key for the transform’s source color space.

## Declaration

```objectivec
extern CFStringRef kColorSyncTransformSrcSpace;
```

## See Also

### Accessing transform properties

- [kColorSyncProfile](kcolorsyncprofile.md): A key for the profile object in a profile-sequence dictionary passed to [ColorSyncTransformCreate](colorsynctransformcreate%28____%29.md).
- [kColorSyncTransformCreator](kcolorsynctransformcreator.md): A key for the name of the CMM that created the transform.
- [kColorSyncTransformDeviceToPCS](kcolorsynctransformdevicetopcs.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the device-to-PCS conversion direction.
- [kColorSyncTransformDstSpace](kcolorsynctransformdstspace.md): A key for the transform’s destination color space.
- [kColorSyncTransformInfo](kcolorsynctransforminfo.md): A key for a dictionary of information about the transform.
- [kColorSyncTransformPCSToDevice](kcolorsynctransformpcstodevice.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the PCS-to-device conversion direction.
- [kColorSyncTransformPCSToPCS](kcolorsynctransformpcstopcs.md): A [kColorSyncTransformTag](kcolorsynctransformtag.md) value selecting the PCS-to-PCS conversion direction.
- [kColorSyncTransformProfileSequnce](kcolorsynctransformprofilesequnce.md): A key for the profile sequence used to create the transform.
- [kColorSyncTransformTag](kcolorsynctransformtag.md): A key for the tag identifying which tags of the profile to use in a profile-sequence dictionary.
