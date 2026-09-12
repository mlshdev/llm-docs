> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataidentifier/quicktimemetadatalivephotovitalityscore](https://developer.apple.com/documentation/avfoundation/avmetadataidentifier/quicktimemetadatalivephotovitalityscore)

# quickTimeMetadataLivePhotoVitalityScore (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An identifier that represents the vitality score of the Live Photo movie.

## Declaration

```swift
static let quickTimeMetadataLivePhotoVitalityScore: AVMetadataIdentifier
```

<a id="Discussion"></a>

## Discussion

Live Photo movies may be algorithmically scored from `0.0` to `1.0` on their level of vitality. A Live Photo movie with a low vitality score offers little dynamism to the still photo it accompanies. The vitality score is normalized and independent of the vitality scoring version of the algorithm defined by [quickTimeMetadataLivePhotoVitalityScoringVersion](quicktimemetadatalivephotovitalityscoringversion.md).

If a Live Photo movie contains the [quickTimeMetadataAutoLivePhoto](quicktimemetadataautolivephoto.md) key and its value is nonzero, apps should read the [quickTimeMetadataLivePhotoVitalityScore](quicktimemetadatalivephotovitalityscore.md) value and only display the movie’s content if the score is `0.5` or higher.

If the capture session includes a metadata output configured to provide face, dog, or cat metadata objects, their presence greatly increases the vitality score.

## See Also

### QuickTime metadata identifiers

- [quickTimeMetadataAIMEData](quicktimemetadataaimedata.md): A value of type kCMMetadataBaseDataType_RawData
- [quickTimeMetadataAccessibilityDescription](quicktimemetadataaccessibilitydescription.md): An identifier that represents the accessibility description for the movie file content.
- [quickTimeMetadataAlbum](quicktimemetadataalbum.md): An identifier that represents the name of the album or collection in QuickTime.
- [quickTimeMetadataArranger](quicktimemetadataarranger.md): An identifier that represents the name of the arranger of the movie file content.
- [quickTimeMetadataArtist](quicktimemetadataartist.md): An identifier that represents the name of the artist of the movie file content.
- [quickTimeMetadataArtwork](quicktimemetadataartwork.md): An identifier that represents an image relating to the movie file content.
- [quickTimeMetadataAuthor](quicktimemetadataauthor.md): An identifier that represents the name of the author of the movie file content.
- [quickTimeMetadataAutoLivePhoto](quicktimemetadataautolivephoto.md): An identifier that represents whether the live photo movie used auto mode.
- [quickTimeMetadataCameraFocalLength35mmEquivalent](quicktimemetadatacamerafocallength35mmequivalent.md): A value of type kCMMetadataBaseDataType_UTF8 indicating focal length normalized to the 35mm film equivalent value (e.g. “50.00mm”).
- [quickTimeMetadataCameraFrameReadoutTime](quicktimemetadatacameraframereadouttime.md): An identifier that represents the camera frame readout time in QuickTime.
- [quickTimeMetadataCameraISOSensitivity](quicktimemetadatacameraisosensitivity.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the sensitivity of the camera to light in terms of ISO exposure index (e.g. “800”). See SMPTE RDD 18.
- [quickTimeMetadataCameraIdentifier](quicktimemetadatacameraidentifier.md): An identifier that represents the camera identifier in QuickTime.
- [quickTimeMetadataCameraLensIrisFNumber](quicktimemetadatacameralensirisfnumber.md): A value of type kCMMetadataBaseDataType_UTF8 indicating measure of the amount of light transmitted through the lens. It is the focal length divided by the effective lens aperture diameter (e.g. “F2.8” or “2.8”).
- [quickTimeMetadataCameraLensModel](quicktimemetadatacameralensmodel.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the lens model (e.g. “iPhone 16 Pro back camera 6.765mm f/1.78”).
- [quickTimeMetadataCameraShutterSpeedAngle](quicktimemetadatacamerashutterspeedangle.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the exposure period expressed as an angle in minutes (1/60 degree) (e.g. “21600” or “360.00deg””).

# AVMetadataIdentifierQuickTimeMetadataLivePhotoVitalityScore (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An identifier that represents the vitality score of the Live Photo movie.

## Declaration

```objectivec
extern AVMetadataIdentifier const AVMetadataIdentifierQuickTimeMetadataLivePhotoVitalityScore;
```

<a id="Discussion"></a>

## Discussion

Live Photo movies may be algorithmically scored from `0.0` to `1.0` on their level of vitality. A Live Photo movie with a low vitality score offers little dynamism to the still photo it accompanies. The vitality score is normalized and independent of the vitality scoring version of the algorithm defined by [AVMetadataIdentifierQuickTimeMetadataLivePhotoVitalityScoringVersion](quicktimemetadatalivephotovitalityscoringversion.md).

If a Live Photo movie contains the [AVMetadataIdentifierQuickTimeMetadataAutoLivePhoto](quicktimemetadataautolivephoto.md) key and its value is nonzero, apps should read the [AVMetadataIdentifierQuickTimeMetadataLivePhotoVitalityScore](quicktimemetadatalivephotovitalityscore.md) value and only display the movie’s content if the score is `0.5` or higher.

If the capture session includes a metadata output configured to provide face, dog, or cat metadata objects, their presence greatly increases the vitality score.

## See Also

### QuickTime metadata identifiers

- [AVMetadataIdentifierQuickTimeMetadataAIMEData](quicktimemetadataaimedata.md): A value of type kCMMetadataBaseDataType_RawData
- [AVMetadataIdentifierQuickTimeMetadataAccessibilityDescription](quicktimemetadataaccessibilitydescription.md): An identifier that represents the accessibility description for the movie file content.
- [AVMetadataIdentifierQuickTimeMetadataAlbum](quicktimemetadataalbum.md): An identifier that represents the name of the album or collection in QuickTime.
- [AVMetadataIdentifierQuickTimeMetadataArranger](quicktimemetadataarranger.md): An identifier that represents the name of the arranger of the movie file content.
- [AVMetadataIdentifierQuickTimeMetadataArtist](quicktimemetadataartist.md): An identifier that represents the name of the artist of the movie file content.
- [AVMetadataIdentifierQuickTimeMetadataArtwork](quicktimemetadataartwork.md): An identifier that represents an image relating to the movie file content.
- [AVMetadataIdentifierQuickTimeMetadataAuthor](quicktimemetadataauthor.md): An identifier that represents the name of the author of the movie file content.
- [AVMetadataIdentifierQuickTimeMetadataAutoLivePhoto](quicktimemetadataautolivephoto.md): An identifier that represents whether the live photo movie used auto mode.
- [AVMetadataIdentifierQuickTimeMetadataCameraFocalLength35mmEquivalent](quicktimemetadatacamerafocallength35mmequivalent.md): A value of type kCMMetadataBaseDataType_UTF8 indicating focal length normalized to the 35mm film equivalent value (e.g. “50.00mm”).
- [AVMetadataIdentifierQuickTimeMetadataCameraFrameReadoutTime](quicktimemetadatacameraframereadouttime.md): An identifier that represents the camera frame readout time in QuickTime.
- [AVMetadataIdentifierQuickTimeMetadataCameraISOSensitivity](quicktimemetadatacameraisosensitivity.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the sensitivity of the camera to light in terms of ISO exposure index (e.g. “800”). See SMPTE RDD 18.
- [AVMetadataIdentifierQuickTimeMetadataCameraIdentifier](quicktimemetadatacameraidentifier.md): An identifier that represents the camera identifier in QuickTime.
- [AVMetadataIdentifierQuickTimeMetadataCameraLensIrisFNumber](quicktimemetadatacameralensirisfnumber.md): A value of type kCMMetadataBaseDataType_UTF8 indicating measure of the amount of light transmitted through the lens. It is the focal length divided by the effective lens aperture diameter (e.g. “F2.8” or “2.8”).
- [AVMetadataIdentifierQuickTimeMetadataCameraLensModel](quicktimemetadatacameralensmodel.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the lens model (e.g. “iPhone 16 Pro back camera 6.765mm f/1.78”).
- [AVMetadataIdentifierQuickTimeMetadataCameraShutterSpeedAngle](quicktimemetadatacamerashutterspeedangle.md): A value of type kCMMetadataBaseDataType_UTF8 indicating the exposure period expressed as an angle in minutes (1/60 degree) (e.g. “21600” or “360.00deg””).
