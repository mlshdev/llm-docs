> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/protocol-swift.property](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/protocol-swift.property)

# protocol (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

The manner in which the system applies your app’s device discovery extension.

## Declaration

```swift
var `protocol`: DDDevice.Protocol { get set }
```

<a id="Discussion"></a>

## Discussion

The value is [DDDevice.Protocol.dial](protocol-swift.enum/dial.md) for the discovery of third-party media receivers.

## See Also

### Indicating the protocol

- [DDDevice.Protocol](protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [protocolType](protocoltype.md): A custom universal type that describes the device’s manner of communication with the extension.
- [bluetoothIdentifier](bluetoothidentifier.md): An identifier to communicate with the device through Bluetooth wireless technology.
- [networkEndpoint](networkendpoint-3lah1.md): An object that describes a local-network device.

# protocol (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

The manner in which the system applies your app’s device discovery extension.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) DDDeviceProtocol protocol;
```

<a id="Discussion"></a>

## Discussion

The value is [DDDeviceProtocolDIAL](protocol-swift.enum/dial.md) for the discovery of third-party media receivers.

## See Also

### Indicating the protocol

- [DDDeviceProtocol](protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [protocolType](protocoltype.md): A custom universal type that describes the device’s manner of communication with the extension.
- [bluetoothIdentifier](bluetoothidentifier.md): An identifier to communicate with the device through Bluetooth wireless technology.
- [networkEndpoint](networkendpoint-7excg.md): An object that describes a local-network device.
