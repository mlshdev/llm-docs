> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoaconfiguration/init(networkidentifier:discoverymethod:)](https://developer.apple.com/documentation/nearbyinteraction/nidltdoaconfiguration/init(networkidentifier:discoverymethod:))

# init(networkIdentifier:discoveryMethod:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a DL-TDOA configuration with a network identifier and discovery method.

## Declaration

```swift
init(networkIdentifier: Int, discoveryMethod: NIDLTDOAConfiguration.DiscoveryMethod)
```

## Parameters

- `networkIdentifier`: An ID that distinguishes among multiple tracked areas if there’s more than one tracked area in the vicinity.
- `discoveryMethod`: The technology that the session uses to discover DL-TDOA anchors.

<a id="discussion"></a>

## Discussion

Use this initializer to create a DL-TDOA configuration that specifies a network identifier for a specific tracked area and the method it uses to discover anchors in the tracked area. The network identifier corresponds to the session ID configured in the DL-TDOA anchors. Anchors with the same session ID belong to the same tracked area.

Specify the method your app uses to discover anchors among [NIDLTDOAConfiguration.DiscoveryMethod.wifi](discoverymethod-swift.enum/wifi.md) and [NIDLTDOAConfiguration.DiscoveryMethod.bluetoothLowEnergy](discoverymethod-swift.enum/bluetoothlowenergy.md) to match the infrastructure in your deployment environment.

```swift
let configuration = NIDLTDOAConfiguration(
    networkIdentifier: 1,
    discoveryMethod: .wifi
)
session.run(configuration)
```

## See Also

### Creating a configuration

- [init(networkIdentifier:)](init%28networkidentifier_%29.md): Initializes a Downlink Time-Difference-of-Arrival (DL-TDOA) configuration for a specific tracked area.

# initWithNetworkIdentifier:discoveryMethod: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Initializes a DL-TDOA configuration with a network identifier and discovery method.

## Declaration

```objectivec
- (instancetype) initWithNetworkIdentifier:(NSInteger) networkIdentifier discoveryMethod:(NIDLTDOADiscoveryMethod) discoveryMethod;
```

## Parameters

- `networkIdentifier`: An ID that distinguishes among multiple tracked areas if there’s more than one tracked area in the vicinity.
- `discoveryMethod`: The technology that the session uses to discover DL-TDOA anchors.

<a id="discussion"></a>

## Discussion

Use this initializer to create a DL-TDOA configuration that specifies a network identifier for a specific tracked area and the method it uses to discover anchors in the tracked area. The network identifier corresponds to the session ID configured in the DL-TDOA anchors. Anchors with the same session ID belong to the same tracked area.

Specify the method your app uses to discover anchors among [NIDLTDOADiscoveryMethodWiFi](discoverymethod-swift.enum/wifi.md) and [NIDLTDOADiscoveryMethodBluetoothLowEnergy](discoverymethod-swift.enum/bluetoothlowenergy.md) to match the infrastructure in your deployment environment.

```swift
let configuration = NIDLTDOAConfiguration(
    networkIdentifier: 1,
    discoveryMethod: .wifi
)
session.run(configuration)
```

## See Also

### Creating a configuration

- [initWithNetworkIdentifier:](init%28networkidentifier_%29.md): Initializes a Downlink Time-Difference-of-Arrival (DL-TDOA) configuration for a specific tracked area.
