> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/currency](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/currency)

# currency

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS

The currency to use for this disbursement.

## Declaration

```swift
var currency: Locale.Currency { get set }
```

<a id="Discussion"></a>

## Discussion

Apple Pay interprets the amounts that this request’s summary items provide as amounts in this currency.

## See Also

### Setting currency and region information

- [region](region.md): The geographic region that describes the location for this disbursement.
- [supportedRegions](supportedregions-1cl0f.md): An array of regions that describe the locations to support.
