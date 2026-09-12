> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencyframeinterpolationconfiguration/init(framewidth:frameheight:spatialscalefactor:)](https://developer.apple.com/documentation/videotoolbox/vtlowlatencyframeinterpolationconfiguration/init(framewidth:frameheight:spatialscalefactor:))

# init(frameWidth:frameHeight:spatialScaleFactor:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new low-latency frame interpolation configuration for spatial scaling and temporal scaling.

## Declaration

```swift
init?(frameWidth: Int, frameHeight: Int, spatialScaleFactor: Int)
```

## Parameters

- `frameWidth`: Width of source frame in pixels.
- `frameHeight`: Height of source frame in pixels.
- `spatialScaleFactor`: The requested spatial scale factor as an integer. Currently, the processor supports only 2x spatial scaling.

<a id="discussion"></a>

## Discussion

When you configure the processor for spatial scaling, the low-latency frame interpolation processor only supports 2x spatial upscaling and a single frame of temporal interpolation at a 0.5 interpolation phase.

## See Also

### Creating a frame interpolation configuration

- [init(frameWidth:frameHeight:numberOfInterpolatedFrames:)](init%28framewidth_frameheight_numberofinterpolatedframes_%29.md): Creates a new low-latency frame interpolation configuration for frame-rate conversion.

# initWithFrameWidth:frameHeight:spatialScaleFactor: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new low-latency frame interpolation configuration for spatial scaling and temporal scaling.

## Declaration

```objectivec
- (instancetype) initWithFrameWidth:(NSInteger) frameWidth frameHeight:(NSInteger) frameHeight spatialScaleFactor:(NSInteger) spatialScaleFactor;
```

## Parameters

- `frameWidth`: Width of source frame in pixels.
- `frameHeight`: Height of source frame in pixels.
- `spatialScaleFactor`: The requested spatial scale factor as an integer. Currently, the processor supports only 2x spatial scaling.

<a id="discussion"></a>

## Discussion

When you configure the processor for spatial scaling, the low-latency frame interpolation processor only supports 2x spatial upscaling and a single frame of temporal interpolation at a 0.5 interpolation phase.

## See Also

### Creating a frame interpolation configuration

- [initWithFrameWidth:frameHeight:numberOfInterpolatedFrames:](init%28framewidth_frameheight_numberofinterpolatedframes_%29.md): Creates a new low-latency frame interpolation configuration for frame-rate conversion.
