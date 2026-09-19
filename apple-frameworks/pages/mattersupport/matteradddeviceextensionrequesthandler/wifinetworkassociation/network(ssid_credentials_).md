> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/wifinetworkassociation/network(ssid:credentials:)

# network(ssid:credentials:)

**Framework:** MatterSupport  
**Kind:** Type Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

Maintains information about a specific Wi-Fi network.

## Declaration

```swift
static func network(ssid: Data, credentials: Data) -> MatterAddDeviceExtensionRequestHandler.WiFiNetworkAssociation
```

## Parameters

- `ssid`: The SSID of the Wi-Fi network to associate to.
- `credentials`: The credentials that the systems requires for associating to that network.

<a id="discussion"></a>

## Discussion

The credentials represent the passphrase that the system needs to associate to the SSID, if one is required. The security type of the Wi-Fi network determines the content of this field, its format, and its valid length.

## See Also

### Getting network information

- [defaultSystemNetwork](defaultsystemnetwork.md): The current Wi-Fi network of the iOS device.
