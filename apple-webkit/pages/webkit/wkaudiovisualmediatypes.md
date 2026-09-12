> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkaudiovisualmediatypes](https://developer.apple.com/documentation/webkit/wkaudiovisualmediatypes)

# WKAudiovisualMediaTypes (Swift)

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The media types that require a user gesture to begin playing.

## Declaration

```swift
struct WKAudiovisualMediaTypes
```

<a id="overview"></a>

## Overview

To indicate that no user gestures are required to play media, use an empty set of audio/visual media types, indicated by the empty array literal, `[]`. For example, `let myAudiovisualMediaType: WKAudiovisualMediaTypes = []`.

## Topics

### Media Types

- [audio](wkaudiovisualmediatypes/audio.md): Media types that contain audio require a user gesture to begin playing.
- [video](wkaudiovisualmediatypes/video.md): Media types that contain video require a user gesture to begin playing.
- [all](wkaudiovisualmediatypes/all.md): All media types require a user gesture to begin playing.

### Initializers

- [init(rawValue:)](wkaudiovisualmediatypes/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Setting media playback preferences

- [allowsInlineMediaPlayback](wkwebviewconfiguration/allowsinlinemediaplayback.md): A Boolean value that indicates whether HTML5 videos play inline or use the native full-screen controller.
- [allowsAirPlayForMediaPlayback](wkwebviewconfiguration/allowsairplayformediaplayback.md): A Boolean value that indicates whether the web view allows media playback over AirPlay.
- [allowsPictureInPictureMediaPlayback](wkwebviewconfiguration/allowspictureinpicturemediaplayback.md): A Boolean value that indicates whether HTML5 videos can play Picture in Picture.
- [mediaTypesRequiringUserActionForPlayback](wkwebviewconfiguration/mediatypesrequiringuseractionforplayback.md): The media types that require a user gesture to begin playing.

# WKAudiovisualMediaTypes (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The media types that require a user gesture to begin playing.

## Declaration

```objectivec
enum WKAudiovisualMediaTypes : NSUInteger;
```

<a id="overview"></a>

## Overview

To indicate that no user gestures are required to play media, use an empty set of audio/visual media types, indicated by the empty array literal, `[]`. For example, `let myAudiovisualMediaType: WKAudiovisualMediaTypes = []`.

## Topics

### Media Types

- [WKAudiovisualMediaTypeNone](wkaudiovisualmediatypes/wkaudiovisualmediatypenone.md): No media types require a user gesture to begin playing.
- [WKAudiovisualMediaTypeAudio](wkaudiovisualmediatypes/audio.md): Media types that contain audio require a user gesture to begin playing.
- [WKAudiovisualMediaTypeVideo](wkaudiovisualmediatypes/video.md): Media types that contain video require a user gesture to begin playing.
- [WKAudiovisualMediaTypeAll](wkaudiovisualmediatypes/all.md): All media types require a user gesture to begin playing.

## See Also

### Setting media playback preferences

- [allowsInlineMediaPlayback](wkwebviewconfiguration/allowsinlinemediaplayback.md): A Boolean value that indicates whether HTML5 videos play inline or use the native full-screen controller.
- [allowsAirPlayForMediaPlayback](wkwebviewconfiguration/allowsairplayformediaplayback.md): A Boolean value that indicates whether the web view allows media playback over AirPlay.
- [allowsPictureInPictureMediaPlayback](wkwebviewconfiguration/allowspictureinpicturemediaplayback.md): A Boolean value that indicates whether HTML5 videos can play Picture in Picture.
- [mediaTypesRequiringUserActionForPlayback](wkwebviewconfiguration/mediatypesrequiringuseractionforplayback.md): The media types that require a user gesture to begin playing.
