> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencysuperresolutionscalerparameters/init(sourceframe:destinationframe:)](https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerparameters/init(sourceframe:destinationframe:))

# init(sourceFrame:destinationFrame:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new low-latency, super-resolution scaler parameters object.

## Declaration

```swift
init(sourceFrame: VTFrameProcessorFrame, destinationFrame: VTFrameProcessorFrame)
```

## Parameters

- `sourceFrame`: Current source frame; must be non `nil`.
- `destinationFrame`: User-allocated pixel buffer that receives the scaled processor output; must be non `nil`.

# initWithSourceFrame:destinationFrame: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new low-latency, super-resolution scaler parameters object.

## Declaration

```objectivec
- (instancetype) initWithSourceFrame:(VTFrameProcessorFrame *) sourceFrame destinationFrame:(VTFrameProcessorFrame *) destinationFrame;
```

## Parameters

- `sourceFrame`: Current source frame; must be non `nil`.
- `destinationFrame`: User-allocated pixel buffer that receives the scaled processor output; must be non `nil`.
