> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/training](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/training)

# training (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that enables the GRU layer to support training.

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
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that enables the GRU layer to support training.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL training;
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the layer will produce training state tensor as a secondary output. Default value: `NO`.
