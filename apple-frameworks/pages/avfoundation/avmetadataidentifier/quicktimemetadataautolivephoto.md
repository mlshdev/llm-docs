> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataidentifier/quicktimemetadataautolivephoto](https://developer.apple.com/documentation/avfoundation/avmetadataidentifier/quicktimemetadataautolivephoto)

# quickTimeMetadataAutoLivePhoto (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An identifier that represents whether the live photo movie used auto mode.

## Declaration

```swift
static let quickTimeMetadataAutoLivePhoto: AVMetadataIdentifier
```

<a id="Discussion"></a>

## Discussion

If your app captures Live Photo content, you can add this movie-level metadata to signify that the movie content should only be used if it’s sufficiently dynamic for experiences like swiping between photos or force-touching a photo. For example, photos of static scenes or documents are excluded from the Live Photo experience.

## See Also

### QuickTime metadata identifiers

- [quickTimeMetadataAIMEData](quicktimemetadataaimedata.md): A value of type kCMMetadataBaseDataType_RawData
- [quickTimeMetadataAccessibilityDescription](quicktimemetadataaccessibilitydescription.md): An identifier that represents the accessibility description for the movie file content.
- [quickTimeMetadataAlbum](quicktimemetadataalbum.md): An identifier that represents the name of the album or collection in QuickTime.
- [quickTimeMetadataArranger](quicktimemetadataarranger.md): An identifier that represents the name of the arranger of the movie file content.
- [quickTimeMetadataArtist](quicktimemetadataartist.md): An identifier that represents the name of the artist of the movie file content.
- [quickTimeMetadataArtwork](quicktimemetadataartwork.md): An identifier that represents an image relating to the movie file content.
- [quickTimeMetadataAuthor](quicktimemetadataauthor.md): An identifier that represents the name of the author of the movie file content.
- [quickTimeMetadataCameraFocalLength35mmEquivalent](quicktimemetadatacamerafocallength35mmequivalent.md): A value of type kCMMetadataBaseDataType_UTF8 indicating focal length normalized to the 35mm film equivalent value (e.g. “50.00mm”).
- [quickTimeMetadataCameraFrameReadoutTime](quicktimemetadatacameraframereadouttime.md): An identifier that represents the camera frame readout time in QuickTime.
- [quickTimeMetadataCameraISOSensitivity](quicktimemetadatacameraisosensitivity.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the sensitivity of the camera to light in terms of ISO exposure index (e.g. “800”). See SMPTE RDD 18.
- [quickTimeMetadataCameraIdentifier](quicktimemetadatacameraidentifier.md): An identifier that represents the camera identifier in QuickTime.
- [quickTimeMetadataCameraLensIrisFNumber](quicktimemetadatacameralensirisfnumber.md): A value of type kCMMetadataBaseDataType_UTF8 indicating measure of the amount of light transmitted through the lens. It is the focal length divided by the effective lens aperture diameter (e.g. “F2.8” or “2.8”).
- [quickTimeMetadataCameraLensModel](quicktimemetadatacameralensmodel.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the lens model (e.g. “iPhone 16 Pro back camera 6.765mm f/1.78”).
- [quickTimeMetadataCameraShutterSpeedAngle](quicktimemetadatacamerashutterspeedangle.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the exposure period expressed as an angle in minutes (1/60 degree) (e.g. “21600” or “360.00deg””).
- [quickTimeMetadataCameraShutterSpeedTime](quicktimemetadatacamerashutterspeedtime.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the exposure period expressed as a time per one frame/field period in seconds.

# AVMetadataIdentifierQuickTimeMetadataAutoLivePhoto (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An identifier that represents whether the live photo movie used auto mode.

## Declaration

```objectivec
extern AVMetadataIdentifier const AVMetadataIdentifierQuickTimeMetadataAutoLivePhoto;
```

<a id="Discussion"></a>

## Discussion

If your app captures Live Photo content, you can add this movie-level metadata to signify that the movie content should only be used if it’s sufficiently dynamic for experiences like swiping between photos or force-touching a photo. For example, photos of static scenes or documents are excluded from the Live Photo experience.

## See Also

### QuickTime metadata identifiers

- [AVMetadataIdentifierQuickTimeMetadataAIMEData](quicktimemetadataaimedata.md): A value of type kCMMetadataBaseDataType_RawData
- [AVMetadataIdentifierQuickTimeMetadataAccessibilityDescription](quicktimemetadataaccessibilitydescription.md): An identifier that represents the accessibility description for the movie file content.
- [AVMetadataIdentifierQuickTimeMetadataAlbum](quicktimemetadataalbum.md): An identifier that represents the name of the album or collection in QuickTime.
- [AVMetadataIdentifierQuickTimeMetadataArranger](quicktimemetadataarranger.md): An identifier that represents the name of the arranger of the movie file content.
- [AVMetadataIdentifierQuickTimeMetadataArtist](quicktimemetadataartist.md): An identifier that represents the name of the artist of the movie file content.
- [AVMetadataIdentifierQuickTimeMetadataArtwork](quicktimemetadataartwork.md): An identifier that represents an image relating to the movie file content.
- [AVMetadataIdentifierQuickTimeMetadataAuthor](quicktimemetadataauthor.md): An identifier that represents the name of the author of the movie file content.
- [AVMetadataIdentifierQuickTimeMetadataCameraFocalLength35mmEquivalent](quicktimemetadatacamerafocallength35mmequivalent.md): A value of type kCMMetadataBaseDataType_UTF8 indicating focal length normalized to the 35mm film equivalent value (e.g. “50.00mm”).
- [AVMetadataIdentifierQuickTimeMetadataCameraFrameReadoutTime](quicktimemetadatacameraframereadouttime.md): An identifier that represents the camera frame readout time in QuickTime.
- [AVMetadataIdentifierQuickTimeMetadataCameraISOSensitivity](quicktimemetadatacameraisosensitivity.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the sensitivity of the camera to light in terms of ISO exposure index (e.g. “800”). See SMPTE RDD 18.
- [AVMetadataIdentifierQuickTimeMetadataCameraIdentifier](quicktimemetadatacameraidentifier.md): An identifier that represents the camera identifier in QuickTime.
- [AVMetadataIdentifierQuickTimeMetadataCameraLensIrisFNumber](quicktimemetadatacameralensirisfnumber.md): A value of type kCMMetadataBaseDataType_UTF8 indicating measure of the amount of light transmitted through the lens. It is the focal length divided by the effective lens aperture diameter (e.g. “F2.8” or “2.8”).
- [AVMetadataIdentifierQuickTimeMetadataCameraLensModel](quicktimemetadatacameralensmodel.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the lens model (e.g. “iPhone 16 Pro back camera 6.765mm f/1.78”).
- [AVMetadataIdentifierQuickTimeMetadataCameraShutterSpeedAngle](quicktimemetadatacamerashutterspeedangle.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the exposure period expressed as an angle in minutes (1/60 degree) (e.g. “21600” or “360.00deg””).
- [AVMetadataIdentifierQuickTimeMetadataCameraShutterSpeedTime](quicktimemetadatacamerashutterspeedtime.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the exposure period expressed as a time per one frame/field period in seconds.
