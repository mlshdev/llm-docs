> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/apps/attributes-data.dictionary/offers-data.dictionary](https://developer.apple.com/documentation/devicemanagement/apps/attributes-data.dictionary/offers-data.dictionary)

# Apps.Attributes.Offers

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

## Declaration

```
object Apps.Attributes.Offers
```

## Properties

- `assets` — `[Apps.Attributes.Offers.Assets]`:
- `buyParams` — `string`:
- `currencyCode` — `string`:
- `discounts` — `[Apps.Attributes.Offers.Discounts]`:
- `download` — `Apps.Attributes.Offers.Download`:
- `expectedReleaseDate` — `string`:
- `offerSummary` — `string`:
- `price` — `number`:
- `priceFormatted` — `string`:
- `pricePerUnit` — `number`:
- `pricePerUnitFormatted` — `string`:
- `quantity` — `integer`:
- `recurringSubscriptionPeriod` — `string`:
- `type` — `string` (required): **Allowed values:** `anonymousDownload`, `buy`, `complete`, `get`, `preorder`, `preordered`, `purchased`, `radio`, `redownload`, `rent`, `subscribe`, `subscription`, `update`

## Topics

### Related Objects

- [Apps.Attributes.Offers.Assets](offers-data.dictionary/assets-data.dictionary.md)
- [Apps.Attributes.Offers.Discounts](offers-data.dictionary/discounts-data.dictionary.md)
- [Apps.Attributes.Offers.Download](offers-data.dictionary/download-data.dictionary.md)

## See Also

### Related Objects

- [Apps.Attributes.ContentRatingsBySystem](contentratingsbysystem-data.dictionary.md)
- [Apps.Attributes.FileSizeByDevice](filesizebydevice-data.dictionary.md)
- [Apps.Attributes.LatestVersionInfo](latestversioninfo-data.dictionary.md)
- [Apps.Attributes.RequirementsByDeviceFamily](requirementsbydevicefamily-data.dictionary.md)
- [Apps.Attributes.ScreenshotsByType](screenshotsbytype-data.dictionary.md)
- [Apps.Attributes.TaxExclusivePrices](taxexclusiveprices-data.dictionary.md)
- [Apps.Attributes.UserRating](userrating-data.dictionary.md)
- [Apps.Attributes.VersionHistory](versionhistory-data.dictionary.md)
