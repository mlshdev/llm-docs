> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/regioncode](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/regioncode)

# regionCode

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

The merchant’s country code string.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * regionCode;
```

<a id="Discussion"></a>

## Discussion

Set this property to the two-letter [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) country code for the country or region of the merchant’s principal place of business. Consult with your payment service provider (PSP) to determine the appropriate country or region code.

Apple Pay may use the `regionCode` to generate payment and disbursement data that complies with local regulations. For more information on regional compliance, see [Complying with regional regulations](../complying-with-regional-regulations.md).

For more information on region codes, see [ISO 3166 region codes](https://www.iso.org/iso-3166-country-codes.html).

## See Also

### Setting currency and region information

- [currencyCode](currencycode.md): The currency code string for this disbursement.
- [supportedRegions](supportedregions-j9ug.md): An array of two-letter region codes that describes the regions to support.
