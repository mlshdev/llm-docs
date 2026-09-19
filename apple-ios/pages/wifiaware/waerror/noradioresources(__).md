> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waerror/noradioresources(_:)

# WAError.noRadioResources(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An error that occurs if the radio lacks resources.

## Declaration

```swift
case noRadioResources(WAError.NoRadioResourcesDetails)
```

<a id="discussion"></a>

## Discussion

The radio needs resources to support additional active devices, services, or performance requirements. Close any unneeded network `NetworkConnection`s, and stop any unneeded `NetworkBrowser`s and `NetworkListener`s to free resources, and then retry.

## See Also

### Checking for insufficient radio resources

- [WAError.NoRadioResourcesDetails](noradioresourcesdetails.md): The optional details describing what resources are lacking.
