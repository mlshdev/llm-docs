> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphtensor/shape](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphtensor/shape)

# shape (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The shape of the tensor.

## Declaration

```swift
var shape: [NSNumber]? { get }
```

<a id="discussion"></a>

## Discussion

Nil shape represents an unranked tensor. -1 value for a dimension represents that it will be resolved via shape inference at runtime and it can be anything.

# shape (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The shape of the tensor.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) MPSShape * shape;
```

<a id="discussion"></a>

## Discussion

Nil shape represents an unranked tensor. -1 value for a dimension represents that it will be resolved via shape inference at runtime and it can be anything.
