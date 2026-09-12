> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphsdpadescriptor/scale](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphsdpadescriptor/scale)

# scale (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The scale applied to the result of the query–key matrix multiply before softmax. Typically set to `1/sqrt(headDimension)`.

## Declaration

```swift
var scale: Float { get set }
```

# scale (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The scale applied to the result of the query–key matrix multiply before softmax. Typically set to `1/sqrt(headDimension)`.

## Declaration

```objectivec
@property (nonatomic) float scale;
```
