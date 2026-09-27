> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/networkevent/networks

# networks

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The latest network data, containing a list of all networks shared to the device.

## Declaration

```swift
let networks: [WINetworkSharingProvider.Network]
```

<a id="discussion"></a>

## Discussion

The list will be filtered to networks matching the provided predicate, with a predicate was provided when getting the `WINetworkSharingProvider/networkListUpdates(matching:)` sequence.

## See Also

### Getting network data

- [networksUpdateCounter](networksupdatecounter.md): A counter that increments whenever the network data changes.
