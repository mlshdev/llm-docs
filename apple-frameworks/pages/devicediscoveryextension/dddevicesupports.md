> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevicesupports](https://developer.apple.com/documentation/devicediscoveryextension/dddevicesupports)

# DDDeviceSupports (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

## Declaration

```swift
struct DDDeviceSupports
```

## Topics

### Initializers

- [init(rawValue:)](dddevicesupports/init%28rawvalue_%29.md)

### Type Properties

- [bluetoothHID](dddevicesupports/bluetoothhid.md): Device supports bring up of classic transport profiles when low energy transport for peripheral is connected.
- [bluetoothPairingLE](dddevicesupports/bluetoothpairingle.md)
- [bluetoothTransportBridging](dddevicesupports/bluetoothtransportbridging.md)

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

# DDDeviceSupports (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

## Declaration

```objectivec
enum DDDeviceSupports : NSUInteger;
```

## Topics

### Enumeration Cases

- [DDDeviceSupportsBluetoothHID](dddevicesupports/bluetoothhid.md): Device supports bring up of classic transport profiles when low energy transport for peripheral is connected.
- [DDDeviceSupportsBluetoothPairingLE](dddevicesupports/bluetoothpairingle.md)
- [DDDeviceSupportsBluetoothTransportBridging](dddevicesupports/bluetoothtransportbridging.md)
