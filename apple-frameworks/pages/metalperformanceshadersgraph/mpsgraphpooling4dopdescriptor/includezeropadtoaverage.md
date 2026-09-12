> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor/includezeropadtoaverage](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor/includezeropadtoaverage)

# includeZeroPadToAverage (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Defines a mode for average pooling, where samples outside the input tensor count as zeroes in the average computation.

## Declaration

```swift
var includeZeroPadToAverage: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Otherwise the result is sum over samples divided by number of samples that didn’t come from padding. Default value: `NO`.

# includeZeroPadToAverage (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Defines a mode for average pooling, where samples outside the input tensor count as zeroes in the average computation.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL includeZeroPadToAverage;
```

<a id="discussion"></a>

## Discussion

Otherwise the result is sum over samples divided by number of samples that didn’t come from padding. Default value: `NO`.
