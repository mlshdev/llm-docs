> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframerateconversionconfiguration/init(framewidth:frameheight:useprecomputedflow:qualityprioritization:revision:)](https://developer.apple.com/documentation/videotoolbox/vtframerateconversionconfiguration/init(framewidth:frameheight:useprecomputedflow:qualityprioritization:revision:))

# init(frameWidth:frameHeight:usePrecomputedFlow:qualityPrioritization:revision:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

Creates a new frame rate conversion configuration with specified flow width and height.

## Declaration

```swift
init?(frameWidth: Int, frameHeight: Int, usePrecomputedFlow: Bool, qualityPrioritization: VTFrameRateConversionConfiguration.QualityPrioritization, revision: VTFrameRateConversionConfiguration.Revision)
```

## Parameters

- `frameWidth`: The width of source frame in pixels. The maximum value is 8192 pixels for macOS, and 4096 pixels for iOS.
- `frameHeight`: The height of source frame in pixels. The maximum value is 4320 pixels for macOS, and 2160 pixels for iOS.
- `usePrecomputedFlow`: If true the optical flow will be provided by the user, else this configuration will compute the optical flow on the fly.
- `qualityPrioritization`: Instance to control quality and performance levels. See VEFrameRateConversionConfigurationQualityPrioritization for more information.
- `revision`: The specific algorithm or configuration revision that is used to perform the request.

<a id="discussion"></a>

## Discussion

Initialization fails if the dimensions are out of range or if the revision is unsupported.

# initWithFrameWidth:frameHeight:usePrecomputedFlow:qualityPrioritization:revision: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

Creates a new frame rate conversion configuration with specified flow width and height.

## Declaration

```objectivec
- (instancetype) initWithFrameWidth:(NSInteger) frameWidth frameHeight:(NSInteger) frameHeight usePrecomputedFlow:(BOOL) usePrecomputedFlow qualityPrioritization:(VTFrameRateConversionConfigurationQualityPrioritization) qualityPrioritization revision:(VTFrameRateConversionConfigurationRevision) revision;
```

## Parameters

- `frameWidth`: The width of source frame in pixels. The maximum value is 8192 pixels for macOS, and 4096 pixels for iOS.
- `frameHeight`: The height of source frame in pixels. The maximum value is 4320 pixels for macOS, and 2160 pixels for iOS.
- `usePrecomputedFlow`: If true the optical flow will be provided by the user, else this configuration will compute the optical flow on the fly.
- `qualityPrioritization`: Instance to control quality and performance levels. See VEFrameRateConversionConfigurationQualityPrioritization for more information.
- `revision`: The specific algorithm or configuration revision that is used to perform the request.

<a id="discussion"></a>

## Discussion

Initialization fails if the dimensions are out of range or if the revision is unsupported.
