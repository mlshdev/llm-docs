> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphlstmdescriptor/producecell](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphlstmdescriptor/producecell)

# produceCell (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

A parameter that controls whether or not to return the output cell from the LSTM layer.

## Declaration

```swift
var produceCell: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If set to `YES` then this layer will produce the internal cell of the LSTM unit as secondary output. Default value: `NO`.

# produceCell (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

A parameter that controls whether or not to return the output cell from the LSTM layer.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL produceCell;
```

<a id="discussion"></a>

## Discussion

If set to `YES` then this layer will produce the internal cell of the LSTM unit as secondary output. Default value: `NO`.
