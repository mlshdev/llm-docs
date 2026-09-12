> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphfftdescriptor/scalingmode](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphfftdescriptor/scalingmode)

# scalingMode (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The scaling mode of the fast fourier transform (FFT) operation.

## Declaration

```swift
var scalingMode: MPSGraphFFTScalingMode { get set }
```

<a id="discussion"></a>

## Discussion

Note that the scaling mode is independent from the phase factor. Default value: `MPSGraphFFTScalingModeNone`.

# scalingMode (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The scaling mode of the fast fourier transform (FFT) operation.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphFFTScalingMode scalingMode;
```

<a id="discussion"></a>

## Discussion

Note that the scaling mode is independent from the phase factor. Default value: `MPSGraphFFTScalingModeNone`.
