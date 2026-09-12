> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphlstmdescriptor/training](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphlstmdescriptor/training)

# training (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

A parameter that enables the LSTM layer to support training.

## Declaration

```swift
var training: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the layer will produce training state tensor as a secondary output. Default value: `NO`.

# training (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

A parameter that enables the LSTM layer to support training.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL training;
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the layer will produce training state tensor as a secondary output. Default value: `NO`.
