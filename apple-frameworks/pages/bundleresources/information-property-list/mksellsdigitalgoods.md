> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/mksellsdigitalgoods](https://developer.apple.com/documentation/bundleresources/information-property-list/mksellsdigitalgoods)

# MKSellsDigitalGoods

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.2+ · iPadOS 26.2+

A Boolean value that indicates whether an alternative distribution app sells digital goods or services.

## Details

`MKSellsDigitalGoods`

<a id="discussion"></a>

## Discussion

Add this property to your app’s target configuration with a value of `YES` if your app participates in alternative distribution and offers the purchase of digital goods or services. Your app participates in alternative distribution if you distribute it outside the App Store, including if it’s a marketplace. If your alternative distribution app doesn’t sell digital goods or services, you still need to add this property to your app’s target configuration with a value of `NO`.

For more information, see [Reporting transactions for the Core Technology Commission](https://developer.apple.com/documentation/marketplacekit/reporting-transactions-for-core-technology-commission).
