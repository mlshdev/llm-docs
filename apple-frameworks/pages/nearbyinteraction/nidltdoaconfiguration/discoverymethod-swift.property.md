> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoaconfiguration/discoverymethod-swift.property](https://developer.apple.com/documentation/nearbyinteraction/nidltdoaconfiguration/discoverymethod-swift.property)

# discoveryMethod (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The technology your app uses to discover DL-TDOA anchors.

## Declaration

```swift
var discoveryMethod: NIDLTDOAConfiguration.DiscoveryMethod { get set }
```

<a id="discussion"></a>

## Discussion

This property specifies Wi-Fi or Bluetooth Low Energy, depending on how your app scans for nearby DL-TDOA anchors. Set this property when configuring the session by calling [init(networkIdentifier:discoveryMethod:)](init%28networkidentifier_discoverymethod_%29.md).

If you use the [init(networkIdentifier:)](init%28networkidentifier_%29.md) initializer instead, the framework defaults the property to [NIDLTDOAConfiguration.DiscoveryMethod.bluetoothLowEnergy](discoverymethod-swift.enum/bluetoothlowenergy.md).

## See Also

### Specifing the discovery method

- [NIDLTDOAConfiguration.DiscoveryMethod](discoverymethod-swift.enum.md): The technologies an app can use to discover Downlink Time-Difference-of-Arrival anchors.

# discoveryMethod (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The technology your app uses to discover DL-TDOA anchors.

## Declaration

```objectivec
@property (nonatomic, assign) NIDLTDOADiscoveryMethod discoveryMethod;
```

<a id="discussion"></a>

## Discussion

This property specifies Wi-Fi or Bluetooth Low Energy, depending on how your app scans for nearby DL-TDOA anchors. Set this property when configuring the session by calling [initWithNetworkIdentifier:discoveryMethod:](init%28networkidentifier_discoverymethod_%29.md).

If you use the [initWithNetworkIdentifier:](init%28networkidentifier_%29.md) initializer instead, the framework defaults the property to [NIDLTDOADiscoveryMethodBluetoothLowEnergy](discoverymethod-swift.enum/bluetoothlowenergy.md).

## See Also

### Specifing the discovery method

- [NIDLTDOADiscoveryMethod](discoverymethod-swift.enum.md): The technologies an app can use to discover Downlink Time-Difference-of-Arrival anchors.
