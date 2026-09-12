> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/bluetoothidentifier](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/bluetoothidentifier)

# bluetoothIdentifier (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An identifier to communicate with the device through Bluetooth wireless technology.

## Declaration

```swift
var bluetoothIdentifier: UUID? { get set }
```

<a id="Discussion"></a>

## Discussion

An extension may set this property to the Bluetooth identifier of a discovered [CBPeripheral](../../corebluetooth/cbperipheral.md).

## See Also

### Indicating the protocol

- [protocol](protocol-swift.property.md): The manner in which the system applies your app’s device discovery extension.
- [DDDevice.Protocol](protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [protocolType](protocoltype.md): A custom universal type that describes the device’s manner of communication with the extension.
- [networkEndpoint](networkendpoint-3lah1.md): An object that describes a local-network device.

# bluetoothIdentifier (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An identifier to communicate with the device through Bluetooth wireless technology.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) NSUUID * bluetoothIdentifier;
```

<a id="Discussion"></a>

## Discussion

An extension may set this property to the Bluetooth identifier of a discovered [CBPeripheral](../../corebluetooth/cbperipheral.md).

## See Also

### Indicating the protocol

- [protocol](protocol-swift.property.md): The manner in which the system applies your app’s device discovery extension.
- [DDDeviceProtocol](protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [protocolType](protocoltype.md): A custom universal type that describes the device’s manner of communication with the extension.
- [networkEndpoint](networkendpoint-7excg.md): An object that describes a local-network device.
