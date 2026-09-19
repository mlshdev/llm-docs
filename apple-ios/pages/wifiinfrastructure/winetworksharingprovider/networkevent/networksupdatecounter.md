> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/networkevent/networksupdatecounter

# networksUpdateCounter

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

A counter that increments whenever the network data changes.

## Declaration

```swift
let networksUpdateCounter: UInt64
```

<a id="discussion"></a>

## Discussion

The counter increments by `1`.

## See Also

### Getting network data

- [networks](networks.md): The latest network data, containing a list of all networks shared to the device.
