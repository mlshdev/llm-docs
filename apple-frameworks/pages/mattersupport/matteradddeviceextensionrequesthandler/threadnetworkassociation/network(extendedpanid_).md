> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddeviceextensionrequesthandler/threadnetworkassociation/network(extendedpanid:)](https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/threadnetworkassociation/network(extendedpanid:))

# network(extendedPANID:)

**Framework:** MatterSupport  
**Kind:** Type Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

Obtains the Thread network extended PAN identifier.

## Declaration

```swift
static func network(extendedPANID: UInt64) -> MatterAddDeviceExtensionRequestHandler.ThreadNetworkAssociation
```

<a id="return-value"></a>

## Return Value

The Thread network extended PAN identifier.

<a id="discussion"></a>

## Discussion

The system retrieves the network parameters from [retrieveCredentials(forExtendedPANID:completion:)](../../../threadnetwork/thclient/retrievecredentials%28forextendedpanid_completion_%29.md) using the provided parameter. The credentials must be present in the store or else association and pairing fails.

## See Also

### Getting network information

- [defaultSystemNetwork](defaultsystemnetwork.md): A sentinel value to represent the system’s default Thread network.
