> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpaddingmode](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpaddingmode)

# MPSGraphPaddingMode (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The tensor padding mode.

## Declaration

```swift
enum MPSGraphPaddingMode
```

## Topics

### Enumeration Cases

- [MPSGraphPaddingMode.antiPeriodic](mpsgraphpaddingmode/antiperiodic.md): Anti Periodic `x[-2] -> -x[L-3]`
- [MPSGraphPaddingMode.clampToEdge](mpsgraphpaddingmode/clamptoedge.md): ClampToEdge (PyTorch ReplicationPad)
- [MPSGraphPaddingMode.constant](mpsgraphpaddingmode/constant.md): Constant
- [MPSGraphPaddingMode.periodic](mpsgraphpaddingmode/periodic.md): Periodic `x[-2] -> x[L-3], where L is size of x.`
- [MPSGraphPaddingMode.reflect](mpsgraphpaddingmode/reflect.md): Reflect
- [MPSGraphPaddingMode.symmetric](mpsgraphpaddingmode/symmetric.md): Symmetric
- [MPSGraphPaddingMode.zero](mpsgraphpaddingmode/zero.md): Zero

### Initializers

- [init(rawValue:)](mpsgraphpaddingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphPaddingMode (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The tensor padding mode.

## Declaration

```objectivec
enum MPSGraphPaddingMode : NSInteger;
```

## Topics

### Enumeration Cases

- [MPSGraphPaddingModeAntiPeriodic](mpsgraphpaddingmode/antiperiodic.md): Anti Periodic `x[-2] -> -x[L-3]`
- [MPSGraphPaddingModeClampToEdge](mpsgraphpaddingmode/clamptoedge.md): ClampToEdge (PyTorch ReplicationPad)
- [MPSGraphPaddingModeConstant](mpsgraphpaddingmode/constant.md): Constant
- [MPSGraphPaddingModePeriodic](mpsgraphpaddingmode/periodic.md): Periodic `x[-2] -> x[L-3], where L is size of x.`
- [MPSGraphPaddingModeReflect](mpsgraphpaddingmode/reflect.md): Reflect
- [MPSGraphPaddingModeSymmetric](mpsgraphpaddingmode/symmetric.md): Symmetric
- [MPSGraphPaddingModeZero](mpsgraphpaddingmode/zero.md): Zero
