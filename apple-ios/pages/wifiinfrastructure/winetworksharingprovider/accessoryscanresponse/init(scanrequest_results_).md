> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/accessoryscanresponse/init(scanrequest:results:)

# init(scanRequest:results:)

**Framework:** Wi-Fi Infrastructure  
**Kind:** Initializer  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

Creates an accessory scan response.

## Declaration

```swift
init(scanRequest: WINetworkSharingProvider.AccessoryScanRequest, results: [WINetworkSharingProvider.AccessoryScanResult])
```

## Parameters

- `scanRequest`: The original scan request.
- `results`: The list of accessory scan results.
