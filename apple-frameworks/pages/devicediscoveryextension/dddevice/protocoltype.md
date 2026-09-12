> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/protocoltype](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/protocoltype)

# protocolType (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A custom universal type that describes the device’s manner of communication with the extension.

## Declaration

```swift
var protocolType: UTType { get set }
```

## See Also

### Indicating the protocol

- [protocol](protocol-swift.property.md): The manner in which the system applies your app’s device discovery extension.
- [DDDevice.Protocol](protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [bluetoothIdentifier](bluetoothidentifier.md): An identifier to communicate with the device through Bluetooth wireless technology.
- [networkEndpoint](networkendpoint-3lah1.md): An object that describes a local-network device.

# protocolType (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A custom universal type that describes the device’s manner of communication with the extension.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite) UTType * protocolType;
```

## See Also

### Indicating the protocol

- [protocol](protocol-swift.property.md): The manner in which the system applies your app’s device discovery extension.
- [DDDeviceProtocol](protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [bluetoothIdentifier](bluetoothidentifier.md): An identifier to communicate with the device through Bluetooth wireless technology.
- [networkEndpoint](networkendpoint-7excg.md): An object that describes a local-network device.
