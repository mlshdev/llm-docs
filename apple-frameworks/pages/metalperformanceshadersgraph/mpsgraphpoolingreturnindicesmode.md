> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpoolingreturnindicesmode](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpoolingreturnindicesmode)

# MPSGraphPoolingReturnIndicesMode (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 15.3+ · iPadOS 15.3+ · Mac Catalyst 15.3+ · macOS 12.2+ · tvOS 15.3+ · visionOS 1.0+

The flattening mode for returned indices with max-pooling.

## Declaration

```swift
enum MPSGraphPoolingReturnIndicesMode
```

## Topics

### Enumeration Cases

- [MPSGraphPoolingReturnIndicesMode.globalFlatten1D](mpsgraphpoolingreturnindicesmode/globalflatten1d.md): Returns indices flattened in inner most (last) dimension.
- [MPSGraphPoolingReturnIndicesMode.globalFlatten2D](mpsgraphpoolingreturnindicesmode/globalflatten2d.md): Returns indices flattened in 2 innermost dimensions. eg: HW in NCHW.
- [MPSGraphPoolingReturnIndicesMode.globalFlatten3D](mpsgraphpoolingreturnindicesmode/globalflatten3d.md): Returns indices flattened in 3 innernost dimensions. eg: HWC in NHWC.
- [MPSGraphPoolingReturnIndicesMode.globalFlatten4D](mpsgraphpoolingreturnindicesmode/globalflatten4d.md): Returns indices flattened in 4 innermost dimensions.
- [MPSGraphPoolingReturnIndicesMode.localFlatten1D](mpsgraphpoolingreturnindicesmode/localflatten1d.md): Returns indices within pooling window, flattened in inner most dimension.
- [MPSGraphPoolingReturnIndicesMode.localFlatten2D](mpsgraphpoolingreturnindicesmode/localflatten2d.md): Returns indices within pooling window, flattened in 2 innermost dimensions. eg: HW in NCHW.
- [MPSGraphPoolingReturnIndicesMode.localFlatten3D](mpsgraphpoolingreturnindicesmode/localflatten3d.md): Returns indices within pooling window, flattened in 3 innernost dimensions. eg: HWC in NHWC.
- [MPSGraphPoolingReturnIndicesMode.localFlatten4D](mpsgraphpoolingreturnindicesmode/localflatten4d.md): Returns indices within pooling window, flattened in 4 innermost dimensions.
- [MPSGraphPoolingReturnIndicesMode.none](mpsgraphpoolingreturnindicesmode/none.md): No indices returned.

### Initializers

- [init(rawValue:)](mpsgraphpoolingreturnindicesmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphPoolingReturnIndicesMode (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The flattening mode for returned indices with max-pooling.

## Declaration

```objectivec
enum MPSGraphPoolingReturnIndicesMode : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSGraphPoolingReturnIndicesGlobalFlatten1D](mpsgraphpoolingreturnindicesmode/globalflatten1d.md): Returns indices flattened in inner most (last) dimension.
- [MPSGraphPoolingReturnIndicesGlobalFlatten2D](mpsgraphpoolingreturnindicesmode/globalflatten2d.md): Returns indices flattened in 2 innermost dimensions. eg: HW in NCHW.
- [MPSGraphPoolingReturnIndicesGlobalFlatten3D](mpsgraphpoolingreturnindicesmode/globalflatten3d.md): Returns indices flattened in 3 innernost dimensions. eg: HWC in NHWC.
- [MPSGraphPoolingReturnIndicesGlobalFlatten4D](mpsgraphpoolingreturnindicesmode/globalflatten4d.md): Returns indices flattened in 4 innermost dimensions.
- [MPSGraphPoolingReturnIndicesLocalFlatten1D](mpsgraphpoolingreturnindicesmode/localflatten1d.md): Returns indices within pooling window, flattened in inner most dimension.
- [MPSGraphPoolingReturnIndicesLocalFlatten2D](mpsgraphpoolingreturnindicesmode/localflatten2d.md): Returns indices within pooling window, flattened in 2 innermost dimensions. eg: HW in NCHW.
- [MPSGraphPoolingReturnIndicesLocalFlatten3D](mpsgraphpoolingreturnindicesmode/localflatten3d.md): Returns indices within pooling window, flattened in 3 innernost dimensions. eg: HWC in NHWC.
- [MPSGraphPoolingReturnIndicesLocalFlatten4D](mpsgraphpoolingreturnindicesmode/localflatten4d.md): Returns indices within pooling window, flattened in 4 innermost dimensions.
- [MPSGraphPoolingReturnIndicesNone](mpsgraphpoolingreturnindicesmode/none.md): No indices returned.
