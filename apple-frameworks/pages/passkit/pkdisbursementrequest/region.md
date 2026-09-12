> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/region](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/region)

# region

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS

The geographic region that describes the location for this disbursement.

## Declaration

```swift
var region: Locale.Region { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to the [Locale.Region](../../foundation/locale/region-swift.struct.md) for the country or region of the merchant’s principal place of business. Consult with your payment service provider (PSP) to determine the appropriate country or region code.

Apple Pay may use the `region` to generate payment and disbursement data that complies with local regulations. For more information on regional compliance, see [Complying with regional regulations](../complying-with-regional-regulations.md).

## See Also

### Setting currency and region information

- [currency](currency.md): The currency to use for this disbursement.
- [supportedRegions](supportedregions-1cl0f.md): An array of regions that describe the locations to support.
