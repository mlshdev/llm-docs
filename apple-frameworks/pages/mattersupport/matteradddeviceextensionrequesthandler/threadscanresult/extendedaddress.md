> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddeviceextensionrequesthandler/threadscanresult/extendedaddress](https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/threadscanresult/extendedaddress)

# extendedAddress

**Framework:** MatterSupport  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

The identifier of an active Thread network Border Agent.

## Declaration

```swift
var extendedAddress: Data
```

<a id="discussion"></a>

## Discussion

This corresponds to the Border Agent ID in [retrieveCredentials(forBorderAgent:completion:)](../../../threadnetwork/thclient/retrievecredentials%28forborderagent_completion_%29.md).

## See Also

### Getting result information

- [channel](channel.md): The Thread network radio channel.
- [extendedPANID](extendedpanid.md): The Thread network extended PAN identifier.
- [linkQualityIndicator](linkqualityindicator.md): A receive quality indicator, as specified by Matter specification.
- [networkName](networkname.md): The Thread network name.
- [panID](panid.md): The Thread network PAN identifier.
- [rssi](rssi.md): The observed RSSI of the network by the device.
- [version](version.md): The version field, as specified by the Matter specification.
