> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/networkendpoint-7excg](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/networkendpoint-7excg)

# networkEndpoint

**Interface language:** Objective-C

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An object that describes a local-network device.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) nw_endpoint_t networkEndpoint;
```

<a id="Discussion"></a>

## Discussion

For the discovery of local-network devices, the extension sets the value of this property to the [endpoint](../../network/nwbrowser/result/endpoint.md) of an [NWBrowser.Result](../../network/nwbrowser/result.md). When a search over the local network succeeds, the browser passes the newly discovered device into your extension’s [browseResultsChangedHandler](../../network/nwbrowser/browseresultschangedhandler.md).

## See Also

### Indicating the protocol

- [protocol](protocol-swift.property.md): The manner in which the system applies your app’s device discovery extension.
- [DDDeviceProtocol](protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [protocolType](protocoltype.md): A custom universal type that describes the device’s manner of communication with the extension.
- [bluetoothIdentifier](bluetoothidentifier.md): An identifier to communicate with the device through Bluetooth wireless technology.
