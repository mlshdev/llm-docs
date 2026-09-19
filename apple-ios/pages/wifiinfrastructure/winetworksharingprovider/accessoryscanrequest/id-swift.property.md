> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanrequest/id-swift.property

# id

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

A stable identifier that uniquely identifies this scan request.

## Declaration

```swift
var id: WINetworkSharingProvider.AccessoryScanRequest.ID { get }
```

<a id="discussion"></a>

## Discussion

The identifier is unique per accessory and per app extension launch.

## See Also

### Identifying a scan request

- [WINetworkSharingProvider.AccessoryScanRequest.ID](id-swift.typealias.md): The type of value that uniquely identifies this scan request.
