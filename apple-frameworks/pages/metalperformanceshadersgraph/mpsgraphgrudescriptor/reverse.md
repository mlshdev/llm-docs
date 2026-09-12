> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/reverse](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/reverse)

# reverse (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that defines the time direction of the input sequence.

## Declaration

```swift
var reverse: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the input sequence is passed in reverse time order to the layer. Note: Ignored when `bidirectional = YES`. Default value: `NO`.

# reverse (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that defines the time direction of the input sequence.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL reverse;
```

<a id="discussion"></a>

## Discussion

If set to `YES` then the input sequence is passed in reverse time order to the layer. Note: Ignored when `bidirectional = YES`. Default value: `NO`.
