> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/appdistributor/eligibilityregion](https://developer.apple.com/documentation/marketplacekit/appdistributor/eligibilityregion)

# eligibilityRegion

**Framework:** MarketplaceKit  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A country code for the device’s current region.

## Declaration

```swift
static var eligibilityRegion: String? { get async }
```

## Mentioned In

- [Distributing your app on an alternative app marketplace](../distributing-your-app-on-an-alternative-marketplace.md)
- [Participating in alternative distribution for specific regions](../participating-in-alternative-distribution-for-specific-regions.md)

<a id="discussion"></a>

## Discussion

This property returns the device’s current country code based on its region setting, for example, `ie` for Ireland, and `jp` for Japan.

An app that installs from an alternative app marketplace can use the country code to determine whether the app meets criteria for transaction reporting. For more information, see [Reporting transactions for the Core Technology Commission](../reporting-transactions-for-core-technology-commission.md).
