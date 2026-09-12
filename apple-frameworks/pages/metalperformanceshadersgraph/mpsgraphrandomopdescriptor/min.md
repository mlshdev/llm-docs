> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor/min](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor/min)

# min (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The lower range of the distribution.

## Declaration

```swift
var min: Float { get set }
```

<a id="discussion"></a>

## Discussion

This value is used for Uniform distributions with float data types and Truncated Normal disributions. Defaults to 0 for uniform distributions and -2 for normal distributions.

# min (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The lower range of the distribution.

## Declaration

```objectivec
@property (nonatomic, readwrite) float min;
```

<a id="discussion"></a>

## Discussion

This value is used for Uniform distributions with float data types and Truncated Normal disributions. Defaults to 0 for uniform distributions and -2 for normal distributions.
