> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionblurconfiguration/init(framewidth:frameheight:useprecomputedflow:qualityprioritization:revision:)](https://developer.apple.com/documentation/videotoolbox/vtmotionblurconfiguration/init(framewidth:frameheight:useprecomputedflow:qualityprioritization:revision:))

# init(frameWidth:frameHeight:usePrecomputedFlow:qualityPrioritization:revision:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

Creates a new motion blur configuration with specified flow width and height.

## Declaration

```swift
init?(frameWidth: Int, frameHeight: Int, usePrecomputedFlow: Bool, qualityPrioritization: VTMotionBlurConfiguration.QualityPrioritization, revision: VTMotionBlurConfiguration.Revision)
```

## Parameters

- `frameWidth`: The width of the source frame in pixels. Maximum value is 8192 pixels for macOS, and 4096 pixels for iOS.
- `frameHeight`: The height of the source frame in pixels. Maximum value is 4320 pixels for macOS, and 2160 pixels for iOS.
- `usePrecomputedFlow`: If true it indicates that the optical flow will be provided by the user, if false this configuration will compute the optical flow on the fly.
- `qualityPrioritization`: Instance to control quality and performance levels. See VEMotionBlurConfigurationQualityPrioritization for more information.
- `revision`: The specific algorithm or configuration revision that is to be used to perform the request.

<a id="discussion"></a>

## Discussion

Initialization fails if the dimensions are out of range or revision is unsupported.

# initWithFrameWidth:frameHeight:usePrecomputedFlow:qualityPrioritization:revision: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

Creates a new motion blur configuration with specified flow width and height.

## Declaration

```objectivec
- (instancetype) initWithFrameWidth:(NSInteger) frameWidth frameHeight:(NSInteger) frameHeight usePrecomputedFlow:(BOOL) usePrecomputedFlow qualityPrioritization:(VTMotionBlurConfigurationQualityPrioritization) qualityPrioritization revision:(VTMotionBlurConfigurationRevision) revision;
```

## Parameters

- `frameWidth`: The width of the source frame in pixels. Maximum value is 8192 pixels for macOS, and 4096 pixels for iOS.
- `frameHeight`: The height of the source frame in pixels. Maximum value is 4320 pixels for macOS, and 2160 pixels for iOS.
- `usePrecomputedFlow`: If true it indicates that the optical flow will be provided by the user, if false this configuration will compute the optical flow on the fly.
- `qualityPrioritization`: Instance to control quality and performance levels. See VEMotionBlurConfigurationQualityPrioritization for more information.
- `revision`: The specific algorithm or configuration revision that is to be used to perform the request.

<a id="discussion"></a>

## Discussion

Initialization fails if the dimensions are out of range or revision is unsupported.
