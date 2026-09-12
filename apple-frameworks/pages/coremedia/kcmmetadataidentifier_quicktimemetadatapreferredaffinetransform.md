> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmmetadataidentifier_quicktimemetadatapreferredaffinetransform](https://developer.apple.com/documentation/coremedia/kcmmetadataidentifier_quicktimemetadatapreferredaffinetransform)

# kCMMetadataIdentifier_QuickTimeMetadataPreferredAffineTransform (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An affine transform to be applied to a video track.

## Declaration

```swift
let kCMMetadataIdentifier_QuickTimeMetadataPreferredAffineTransform: CFString
```

<a id="Discussion"></a>

## Discussion

This affine transform can be used in place of a track matrix for displaying a video track to better reflect the current orientation of a video camera with respect to a scene. For example, if the camera is rotated after a recording has started, the presence of this metadata will allow a player to adjust its rendering at the time the rotation occurred.

## See Also

### Constants

- [kCMMetadataIdentifier_QuickTimeMetadataLocation_ISO6709](kcmmetadataidentifier_quicktimemetadatalocation_iso6709.md): Location information in ISO-6709 format.
- [kCMMetadataIdentifier_QuickTimeMetadataDirection_Facing](kcmmetadataidentifier_quicktimemetadatadirection_facing.md): Direction the observer is facing.
- [kCMMetadataIdentifier_QuickTimeMetadataVideoOrientation](kcmmetadataidentifier_quicktimemetadatavideoorientation.md): Video orientation as defined by TIFF/Exif.
- [kCMMetadataIdentifier_QuickTimeMetadataLivePhotoStillImageTransformReferenceDimensions](kcmmetadataidentifier_quicktimemetadatalivephotostillimagetransformreferencedimensions.md): The dimensions of the live photo still image.
- [kCMMetadataIdentifier_QuickTimeMetadataLivePhotoStillImageTransform](kcmmetadataidentifier_quicktimemetadatalivephotostillimagetransform.md): A perspective transform you use to adjust a Live Photo still image to match the Live Photo movie.

# kCMMetadataIdentifier_QuickTimeMetadataPreferredAffineTransform (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An affine transform to be applied to a video track.

## Declaration

```objectivec
extern CFStringRef const kCMMetadataIdentifier_QuickTimeMetadataPreferredAffineTransform;
```

<a id="Discussion"></a>

## Discussion

This affine transform can be used in place of a track matrix for displaying a video track to better reflect the current orientation of a video camera with respect to a scene. For example, if the camera is rotated after a recording has started, the presence of this metadata will allow a player to adjust its rendering at the time the rotation occurred.

## See Also

### Constants

- [kCMMetadataIdentifier_QuickTimeMetadataLocation_ISO6709](kcmmetadataidentifier_quicktimemetadatalocation_iso6709.md): Location information in ISO-6709 format.
- [kCMMetadataIdentifier_QuickTimeMetadataDirection_Facing](kcmmetadataidentifier_quicktimemetadatadirection_facing.md): Direction the observer is facing.
- [kCMMetadataIdentifier_QuickTimeMetadataVideoOrientation](kcmmetadataidentifier_quicktimemetadatavideoorientation.md): Video orientation as defined by TIFF/Exif.
- [kCMMetadataIdentifier_QuickTimeMetadataLivePhotoStillImageTransformReferenceDimensions](kcmmetadataidentifier_quicktimemetadatalivephotostillimagetransformreferencedimensions.md): The dimensions of the live photo still image.
- [kCMMetadataIdentifier_QuickTimeMetadataLivePhotoStillImageTransform](kcmmetadataidentifier_quicktimemetadatalivephotostillimagetransform.md): A perspective transform you use to adjust a Live Photo still image to match the Live Photo movie.
