> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/bidirectional](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/bidirectional)

# bidirectional (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that defines a bidirectional GRU layer.

## Declaration

```swift
var bidirectional: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the input sequence is traversed in both directions and the two results are concatenated together on the channel-axis. Default value: `NO`.

# bidirectional (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that defines a bidirectional GRU layer.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL bidirectional;
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the input sequence is traversed in both directions and the two results are concatenated together on the channel-axis. Default value: `NO`.
