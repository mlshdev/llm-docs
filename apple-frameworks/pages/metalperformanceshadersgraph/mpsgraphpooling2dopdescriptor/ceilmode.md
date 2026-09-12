> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor/ceilmode](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor/ceilmode)

# ceilMode (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Affects how the graph computes the output size.

## Declaration

```swift
var ceilMode: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If set to `YES` then output size is computed by rounding up instead of down when dividing input size by stride. Default value: `NO`.

# ceilMode (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Affects how the graph computes the output size.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL ceilMode;
```

<a id="discussion"></a>

## Discussion

If set to `YES` then output size is computed by rounding up instead of down when dividing input size by stride. Default value: `NO`.
