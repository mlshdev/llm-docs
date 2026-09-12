> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor/samplingmethod](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor/samplingmethod)

# samplingMethod (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The sampling method of the distribution.

## Declaration

```swift
var samplingMethod: MPSGraphRandomNormalSamplingMethod { get set }
```

<a id="discussion"></a>

## Discussion

This value is used for Normal and Truncated Normal disributions. See MPSGraphRandomNormalSamplingMethod. Defaults to MPSGraphRandomNormalSamplingInvCDF.

# samplingMethod (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The sampling method of the distribution.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphRandomNormalSamplingMethod samplingMethod;
```

<a id="discussion"></a>

## Discussion

This value is used for Normal and Truncated Normal disributions. See MPSGraphRandomNormalSamplingMethod. Defaults to MPSGraphRandomNormalSamplingInvCDF.
