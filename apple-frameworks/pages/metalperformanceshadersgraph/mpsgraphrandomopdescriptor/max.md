> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor/max](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor/max)

# max (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The upper range of the distribution.

## Declaration

```swift
var max: Float { get set }
```

<a id="discussion"></a>

## Discussion

This value is used for Uniform distributions with float data types and Truncated Normal disributions. Defaults to 1 for uniform distributions and 2 for normal distributions.

# max (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The upper range of the distribution.

## Declaration

```objectivec
@property (nonatomic, readwrite) float max;
```

<a id="discussion"></a>

## Discussion

This value is used for Uniform distributions with float data types and Truncated Normal disributions. Defaults to 1 for uniform distributions and 2 for normal distributions.
