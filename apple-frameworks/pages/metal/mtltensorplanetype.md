> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorplanetype](https://developer.apple.com/documentation/metal/mtltensorplanetype)

# MTLTensorPlaneType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The possible tensor plane types.

## Declaration

```swift
enum MTLTensorPlaneType
```

## Topics

### Enumeration Cases

- [MTLTensorPlaneType.data](mtltensorplanetype/data.md): The main data plane, which every tensor has
- [MTLTensorPlaneType.scales](mtltensorplanetype/scales.md): The auxiliary plane that stores scale factors for elements in the data plane.

### Initializers

- [init(rawValue:)](mtltensorplanetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MTLTensorPlaneType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The possible tensor plane types.

## Declaration

```objectivec
enum MTLTensorPlaneType : NSInteger;
```

## Topics

### Enumeration Cases

- [MTLTensorPlaneTypeData](mtltensorplanetype/data.md): The main data plane, which every tensor has
- [MTLTensorPlaneTypeScales](mtltensorplanetype/scales.md): The auxiliary plane that stores scale factors for elements in the data plane.
