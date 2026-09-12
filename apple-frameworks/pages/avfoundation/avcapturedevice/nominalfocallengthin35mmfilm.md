> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/nominalfocallengthin35mmfilm](https://developer.apple.com/documentation/avfoundation/avcapturedevice/nominalfocallengthin35mmfilm)

# nominalFocalLengthIn35mmFilm (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The nominal 35mm equivalent focal length of the capture device’s lens.

## Declaration

```swift
var nominalFocalLengthIn35mmFilm: Float { get }
```

<a id="discussion"></a>

## Discussion

This value represents a nominal measurement of the device’s field of view, expressed as a 35mm equivalent focal length, measured diagonally. The value is similar to the `FocalLengthIn35mmFormat` EXIF entry (see [kCGImagePropertyExifFocalLenIn35mmFilm](../../imageio/kcgimagepropertyexiffocallenin35mmfilm.md)) for a photo captured using the device’s format where [isHighestPhotoQualitySupported](format/ishighestphotoqualitysupported.md) is `true` or when you’ve configured the session with the [photo](../avcapturesession/preset/photo.md) preset.

This property value is `0` for virtual devices and external cameras.

# nominalFocalLengthIn35mmFilm (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The nominal 35mm equivalent focal length of the capture device’s lens.

## Declaration

```objectivec
@property (nonatomic, readonly) float nominalFocalLengthIn35mmFilm;
```

<a id="discussion"></a>

## Discussion

This value represents a nominal measurement of the device’s field of view, expressed as a 35mm equivalent focal length, measured diagonally. The value is similar to the `FocalLengthIn35mmFormat` EXIF entry (see [kCGImagePropertyExifFocalLenIn35mmFilm](../../imageio/kcgimagepropertyexiffocallenin35mmfilm.md)) for a photo captured using the device’s format where [highestPhotoQualitySupported](format/ishighestphotoqualitysupported.md) is `true` or when you’ve configured the session with the [AVCaptureSessionPresetPhoto](../avcapturesession/preset/photo.md) preset.

This property value is `0` for virtual devices and external cameras.
