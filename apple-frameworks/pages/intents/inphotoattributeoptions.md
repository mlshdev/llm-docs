> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inphotoattributeoptions](https://developer.apple.com/documentation/intents/inphotoattributeoptions)

# INPhotoAttributeOptions (Swift)

**Framework:** Intents  
**Kind:** Structure  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Constants indicating attributes of a photo.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
struct INPhotoAttributeOptions
```

## Topics

### Photo

- [photo](inphotoattributeoptions/photo.md): Deprecated. A still image.
- [bouncePhoto](inphotoattributeoptions/bouncephoto.md): Deprecated. A live photo edited with the bounce effect.
- [burstPhoto](inphotoattributeoptions/burstphoto.md): Deprecated. A burst-mode photo.
- [hdrPhoto](inphotoattributeoptions/hdrphoto.md): Deprecated. An HDR photo.
- [livePhoto](inphotoattributeoptions/livephoto.md): Deprecated. A live photo.
- [longExposurePhoto](inphotoattributeoptions/longexposurephoto.md): Deprecated. A live photo edited with the long exxposure effect.
- [loopPhoto](inphotoattributeoptions/loopphoto.md): Deprecated. A live photo edited with the loop effect.
- [squarePhoto](inphotoattributeoptions/squarephoto.md): Deprecated. A square photo.
- [panoramaPhoto](inphotoattributeoptions/panoramaphoto.md): Deprecated. A panorama photo.
- [portraitPhoto](inphotoattributeoptions/portraitphoto.md): Deprecated. A portrait photo.
- [GIF](inphotoattributeoptions/gif.md): Deprecated. A Graphics Interchange Format image.
- [flash](inphotoattributeoptions/flash.md): Deprecated. A photo taken with a flash.
- [selfie](inphotoattributeoptions/selfie.md): Deprecated. A selfie.

### Video

- [video](inphotoattributeoptions/video.md): Deprecated. A video.
- [timeLapseVideo](inphotoattributeoptions/timelapsevideo.md): Deprecated. A time-lapse video.
- [slowMotionVideo](inphotoattributeoptions/slowmotionvideo.md): Deprecated. A slow-motion video.

### Filter

- [noirFilter](inphotoattributeoptions/noirfilter.md): Deprecated. A noir filter.
- [chromeFilter](inphotoattributeoptions/chromefilter.md): Deprecated. A chrome filter.
- [instantFilter](inphotoattributeoptions/instantfilter.md): Deprecated. An instant filter.
- [tonalFilter](inphotoattributeoptions/tonalfilter.md): Deprecated. A tonal filter.
- [transferFilter](inphotoattributeoptions/transferfilter.md): Deprecated. A transfer filter.
- [monoFilter](inphotoattributeoptions/monofilter.md): Deprecated. A mono filter.
- [fadeFilter](inphotoattributeoptions/fadefilter.md): Deprecated. A fade filter.
- [processFilter](inphotoattributeoptions/processfilter.md): Deprecated. A process filter.

### Orientation

- [landscapeOrientation](inphotoattributeoptions/landscapeorientation.md): Deprecated. A landscape aspect ratio.
- [portraitOrientation](inphotoattributeoptions/portraitorientation.md): Deprecated. A portrait aspect ratio.

### Other

- [favorite](inphotoattributeoptions/favorite.md): Deprecated. A favorite item.
- [frontFacingCamera](inphotoattributeoptions/frontfacingcamera.md): Deprecated. Taken using a front-facing camera.
- [screenshot](inphotoattributeoptions/screenshot.md): Deprecated. A screenshot.

### Initializers

- [init(rawValue:)](inphotoattributeoptions/init%28rawvalue_%29.md): Deprecated. Creates a new instance with the specified raw value.

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

# INPhotoAttributeOptions (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Constants indicating attributes of a photo.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INPhotoAttributeOptions : NSUInteger;
```

## Topics

### Photo

- [INPhotoAttributeOptionPhoto](inphotoattributeoptions/photo.md): Deprecated. A still image.
- [INPhotoAttributeOptionBouncePhoto](inphotoattributeoptions/bouncephoto.md): Deprecated. A live photo edited with the bounce effect.
- [INPhotoAttributeOptionBurstPhoto](inphotoattributeoptions/burstphoto.md): Deprecated. A burst-mode photo.
- [INPhotoAttributeOptionHDRPhoto](inphotoattributeoptions/hdrphoto.md): Deprecated. An HDR photo.
- [INPhotoAttributeOptionLivePhoto](inphotoattributeoptions/livephoto.md): Deprecated. A live photo.
- [INPhotoAttributeOptionLongExposurePhoto](inphotoattributeoptions/longexposurephoto.md): Deprecated. A live photo edited with the long exxposure effect.
- [INPhotoAttributeOptionLoopPhoto](inphotoattributeoptions/loopphoto.md): Deprecated. A live photo edited with the loop effect.
- [INPhotoAttributeOptionSquarePhoto](inphotoattributeoptions/squarephoto.md): Deprecated. A square photo.
- [INPhotoAttributeOptionPanoramaPhoto](inphotoattributeoptions/panoramaphoto.md): Deprecated. A panorama photo.
- [INPhotoAttributeOptionPortraitPhoto](inphotoattributeoptions/portraitphoto.md): Deprecated. A portrait photo.
- [INPhotoAttributeOptionGIF](inphotoattributeoptions/gif.md): Deprecated. A Graphics Interchange Format image.
- [INPhotoAttributeOptionFlash](inphotoattributeoptions/flash.md): Deprecated. A photo taken with a flash.
- [INPhotoAttributeOptionSelfie](inphotoattributeoptions/selfie.md): Deprecated. A selfie.

### Video

- [INPhotoAttributeOptionVideo](inphotoattributeoptions/video.md): Deprecated. A video.
- [INPhotoAttributeOptionTimeLapseVideo](inphotoattributeoptions/timelapsevideo.md): Deprecated. A time-lapse video.
- [INPhotoAttributeOptionSlowMotionVideo](inphotoattributeoptions/slowmotionvideo.md): Deprecated. A slow-motion video.

### Filter

- [INPhotoAttributeOptionNoirFilter](inphotoattributeoptions/noirfilter.md): Deprecated. A noir filter.
- [INPhotoAttributeOptionChromeFilter](inphotoattributeoptions/chromefilter.md): Deprecated. A chrome filter.
- [INPhotoAttributeOptionInstantFilter](inphotoattributeoptions/instantfilter.md): Deprecated. An instant filter.
- [INPhotoAttributeOptionTonalFilter](inphotoattributeoptions/tonalfilter.md): Deprecated. A tonal filter.
- [INPhotoAttributeOptionTransferFilter](inphotoattributeoptions/transferfilter.md): Deprecated. A transfer filter.
- [INPhotoAttributeOptionMonoFilter](inphotoattributeoptions/monofilter.md): Deprecated. A mono filter.
- [INPhotoAttributeOptionFadeFilter](inphotoattributeoptions/fadefilter.md): Deprecated. A fade filter.
- [INPhotoAttributeOptionProcessFilter](inphotoattributeoptions/processfilter.md): Deprecated. A process filter.

### Orientation

- [INPhotoAttributeOptionLandscapeOrientation](inphotoattributeoptions/landscapeorientation.md): Deprecated. A landscape aspect ratio.
- [INPhotoAttributeOptionPortraitOrientation](inphotoattributeoptions/portraitorientation.md): Deprecated. A portrait aspect ratio.

### Other

- [INPhotoAttributeOptionFavorite](inphotoattributeoptions/favorite.md): Deprecated. A favorite item.
- [INPhotoAttributeOptionFrontFacingCamera](inphotoattributeoptions/frontfacingcamera.md): Deprecated. Taken using a front-facing camera.
- [INPhotoAttributeOptionScreenshot](inphotoattributeoptions/screenshot.md): Deprecated. A screenshot.
