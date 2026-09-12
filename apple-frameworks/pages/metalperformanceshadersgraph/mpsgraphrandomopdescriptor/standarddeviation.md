> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor/standarddeviation](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor/standarddeviation)

# standardDeviation (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The standard deviation of the distribution.

## Declaration

```swift
var standardDeviation: Float { get set }
```

<a id="discussion"></a>

## Discussion

This value is used for Normal and Truncated Normal disributions. For Truncated Normal distribution this defines the standard deviation parameter of the underlying Normal distribution, that is the width of the Gaussian, not the true standard deviation of the truncated distribution which typically differs from the standard deviation of the original Normal distribution. Defaults to 0 for uniform distributions and 1 for normal distributions.

# standardDeviation (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The standard deviation of the distribution.

## Declaration

```objectivec
@property (nonatomic, readwrite) float standardDeviation;
```

<a id="discussion"></a>

## Discussion

This value is used for Normal and Truncated Normal disributions. For Truncated Normal distribution this defines the standard deviation parameter of the underlying Normal distribution, that is the width of the Gaussian, not the true standard deviation of the truncated distribution which typically differs from the standard deviation of the original Normal distribution. Defaults to 0 for uniform distributions and 1 for normal distributions.
