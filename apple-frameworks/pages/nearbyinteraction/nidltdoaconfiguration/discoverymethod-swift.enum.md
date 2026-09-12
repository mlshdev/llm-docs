> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoaconfiguration/discoverymethod-swift.enum](https://developer.apple.com/documentation/nearbyinteraction/nidltdoaconfiguration/discoverymethod-swift.enum)

# NIDLTDOAConfiguration.DiscoveryMethod (Swift)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The technologies an app can use to discover Downlink Time-Difference-of-Arrival anchors.

## Declaration

```swift
enum DiscoveryMethod
```

<a id="overview"></a>

## Overview

When you create a DL-TDOA configuration ([NIDLTDOAConfiguration](../nidltdoaconfiguration.md)), specify the method that the session uses to discover nearby anchors, among Wi-Fi or Bluetooth Low Energy, by calling [init(networkIdentifier:discoveryMethod:)](init%28networkidentifier_discoverymethod_%29.md). The framework needs to know the anchor discovery technology upfront, to match your deployment environment.

The default value is [NIDLTDOAConfiguration.DiscoveryMethod.bluetoothLowEnergy](discoverymethod-swift.enum/bluetoothlowenergy.md).

## Topics

### Specifying the discovery technology

- [NIDLTDOAConfiguration.DiscoveryMethod.wifi](discoverymethod-swift.enum/wifi.md): A method to discover DL-TDOA anchors using Wi-Fi.
- [NIDLTDOAConfiguration.DiscoveryMethod.bluetoothLowEnergy](discoverymethod-swift.enum/bluetoothlowenergy.md): A method to discover DL-TDOA anchors using Bluetooth Low Energy.

### Createing a discovery method

- [init(rawValue:)](discoverymethod-swift.enum/init%28rawvalue_%29.md): Initializes a discovery method from a raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifing the discovery method

- [discoveryMethod](discoverymethod-swift.property.md): The technology your app uses to discover DL-TDOA anchors.

# NIDLTDOADiscoveryMethod (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

The technologies an app can use to discover Downlink Time-Difference-of-Arrival anchors.

## Declaration

```objectivec
enum NIDLTDOADiscoveryMethod : NSInteger;
```

<a id="overview"></a>

## Overview

When you create a DL-TDOA configuration ([NIDLTDOAConfiguration](../nidltdoaconfiguration.md)), specify the method that the session uses to discover nearby anchors, among Wi-Fi or Bluetooth Low Energy, by calling [initWithNetworkIdentifier:discoveryMethod:](init%28networkidentifier_discoverymethod_%29.md). The framework needs to know the anchor discovery technology upfront, to match your deployment environment.

The default value is [NIDLTDOADiscoveryMethodBluetoothLowEnergy](discoverymethod-swift.enum/bluetoothlowenergy.md).

## Topics

### Specifying the discovery technology

- [NIDLTDOADiscoveryMethodWiFi](discoverymethod-swift.enum/wifi.md): A method to discover DL-TDOA anchors using Wi-Fi.
- [NIDLTDOADiscoveryMethodBluetoothLowEnergy](discoverymethod-swift.enum/bluetoothlowenergy.md): A method to discover DL-TDOA anchors using Bluetooth Low Energy.

## See Also

### Specifing the discovery method

- [discoveryMethod](discoverymethod-swift.property.md): The technology your app uses to discover DL-TDOA anchors.
