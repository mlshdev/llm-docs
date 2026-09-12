> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoaconfiguration/init(networkidentifier:)](https://developer.apple.com/documentation/nearbyinteraction/nidltdoaconfiguration/init(networkidentifier:))

# init(networkIdentifier:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initializes a Downlink Time-Difference-of-Arrival (DL-TDOA) configuration for a specific tracked area.

## Declaration

```swift
init(networkIdentifier: Int)
```

## Parameters

- `networkIdentifier`: An identifier for the DL-TDOA network that the session belongs to. Anchors that share the same network ID are part of one ranging network that can span multiple anchor clusters.

<a id="discussion"></a>

## Discussion

When you call this method, the [discoveryMethod](discoverymethod-swift.property.md) defaults to [NIDLTDOAConfiguration.DiscoveryMethod.bluetoothLowEnergy](discoverymethod-swift.enum/bluetoothlowenergy.md). To initialize a configuration and specify your deployment’s discovery method, call [init(networkIdentifier:discoveryMethod:)](init%28networkidentifier_discoverymethod_%29.md) instead.

## See Also

### Creating a configuration

- [init(networkIdentifier:discoveryMethod:)](init%28networkidentifier_discoverymethod_%29.md): Initializes a DL-TDOA configuration with a network identifier and discovery method.

# initWithNetworkIdentifier: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Initializes a Downlink Time-Difference-of-Arrival (DL-TDOA) configuration for a specific tracked area.

## Declaration

```objectivec
- (instancetype) initWithNetworkIdentifier:(NSInteger) networkIdentifier;
```

## Parameters

- `networkIdentifier`: An identifier for the DL-TDOA network that the session belongs to. Anchors that share the same network ID are part of one ranging network that can span multiple anchor clusters.

<a id="discussion"></a>

## Discussion

When you call this method, the [discoveryMethod](discoverymethod-swift.property.md) defaults to [NIDLTDOADiscoveryMethodBluetoothLowEnergy](discoverymethod-swift.enum/bluetoothlowenergy.md). To initialize a configuration and specify your deployment’s discovery method, call [initWithNetworkIdentifier:discoveryMethod:](init%28networkidentifier_discoverymethod_%29.md) instead.

## See Also

### Creating a configuration

- [initWithNetworkIdentifier:discoveryMethod:](init%28networkidentifier_discoverymethod_%29.md): Initializes a DL-TDOA configuration with a network identifier and discovery method.
