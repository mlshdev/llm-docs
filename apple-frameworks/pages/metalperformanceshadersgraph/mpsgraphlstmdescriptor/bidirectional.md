> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphlstmdescriptor/bidirectional](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphlstmdescriptor/bidirectional)

# bidirectional (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

A parameter that defines a bidirectional LSTM layer.

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
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

A parameter that defines a bidirectional LSTM layer.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL bidirectional;
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the input sequence is traversed in both directions and the two results are concatenated together on the channel-axis. Default value: `NO`.
