> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanager/feature](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager/feature)

# CBCentralManager.Feature (Swift)

**Framework:** Core Bluetooth  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

An option set of device-specific features.

## Declaration

```swift
struct Feature
```

## Topics

### Creating a Central Manager Feature Instance

- [init(rawValue:)](feature/init%28rawvalue_%29.md): Creates a central manager feature instance.

### Extended Scan Features

- [extendedScanAndConnect](feature/extendedscanandconnect.md): The hardware supports extended scans and enhanced connection creation.

### Type Properties

- [channelSounding](feature/channelsounding.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Inspecting Feature Support

- [supports(\_:)](supports%28__%29.md): Returns a Boolean that indicates whether the device supports a specific set of features.

# CBCentralManagerFeature (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

An option set of device-specific features.

## Declaration

```objectivec
enum CBCentralManagerFeature : NSUInteger;
```

## Topics

### Extended Scan Features

- [CBCentralManagerFeatureExtendedScanAndConnect](feature/extendedscanandconnect.md): The hardware supports extended scans and enhanced connection creation.

### Enumeration Cases

- [CBCentralManagerFeatureChannelSounding](feature/channelsounding.md)

## See Also

### Inspecting Feature Support

- [supportsFeatures:](supports%28__%29.md): Returns a Boolean that indicates whether the device supports a specific set of features.
