> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/marketplacekit/installrequirements/requireddevicecapabilities

# requiredDeviceCapabilities

**Framework:** MarketplaceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The capabilities that a device requires to install an app.

## Declaration

```swift
var requiredDeviceCapabilities: Set<String>?
```

<a id="discussion"></a>

## Discussion

This set contains one or more [UIRequiredDeviceCapabilities](https://developer.apple.com/documentation/bundleresources/information-property-list/uirequireddevicecapabilities).
