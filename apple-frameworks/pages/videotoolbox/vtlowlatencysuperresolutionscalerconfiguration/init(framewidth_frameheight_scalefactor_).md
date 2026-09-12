> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/init(framewidth:frameheight:scalefactor:)](https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/init(framewidth:frameheight:scalefactor:))

# init(frameWidth:frameHeight:scaleFactor:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new low-latency super-resolution scaler configuration with specified frame width and height.

## Declaration

```swift
init(frameWidth: Int, frameHeight: Int, scaleFactor: Float)
```

## Parameters

- `frameWidth`: Width of source frame in pixels.
- `frameHeight`: Height of source frame in pixels.
- `scaleFactor`: The scale factor to apply. This must be a supported value that [supportedScaleFactorsForFrameWidth:frameHeight:](supportedscalefactorsforframewidth_frameheight_.md) returns.

# initWithFrameWidth:frameHeight:scaleFactor: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new low-latency super-resolution scaler configuration with specified frame width and height.

## Declaration

```objectivec
- (instancetype) initWithFrameWidth:(NSInteger) frameWidth frameHeight:(NSInteger) frameHeight scaleFactor:(float) scaleFactor;
```

## Parameters

- `frameWidth`: Width of source frame in pixels.
- `frameHeight`: Height of source frame in pixels.
- `scaleFactor`: The scale factor to apply. This must be a supported value that [supportedScaleFactorsForFrameWidth:frameHeight:](supportedscalefactorsforframewidth_frameheight_.md) returns.
