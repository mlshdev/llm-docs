> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/countrycode](https://developer.apple.com/documentation/passkit/pkpaymentrequest/countrycode)

# countryCode (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The merchant’s two-letter ISO 3166 country code.

## Declaration

```swift
var countryCode: String { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to the two-letter ISO 3166 code for the country or region of the merchant’s principle place of business. This is often the location for settling the payment. The system stores the country code in the Secure Element as is. For more information on the Secure Element, see [A Payment Token Is Created When a Payment Is Authorized](https://developer.apple.com/library/archive/ApplePay_Guide/Authorization.html#//apple_ref/doc/uid/TP40014764-CH4-SW4) in [Apple Pay Programming Guide](https://developer.apple.com/library/archive/ApplePay_Guide/index.html#//apple_ref/doc/uid/TP40014764). Consult with your payment service provider (PSP) to determine the appropriate country code.

Apple Pay may use the `countryCode` to generate payment data that complies with local regulations. For more information on regional compliance, see [Complying with regional regulations](../complying-with-regional-regulations.md).

## See Also

### Setting currency and region information

- [currencyCode](currencycode.md): The three-letter ISO 4217 currency code that determines the currency the payment request uses.
- [supportedCountries](supportedcountries.md): A list of ISO 3166 country codes to limit payments to cards from specific countries or regions.

# countryCode (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The merchant’s two-letter ISO 3166 country code.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * countryCode;
```

<a id="Discussion"></a>

## Discussion

Set this property to the two-letter ISO 3166 code for the country or region of the merchant’s principle place of business. This is often the location for settling the payment. The system stores the country code in the Secure Element as is. For more information on the Secure Element, see [A Payment Token Is Created When a Payment Is Authorized](https://developer.apple.com/library/archive/ApplePay_Guide/Authorization.html#//apple_ref/doc/uid/TP40014764-CH4-SW4) in [Apple Pay Programming Guide](https://developer.apple.com/library/archive/ApplePay_Guide/index.html#//apple_ref/doc/uid/TP40014764). Consult with your payment service provider (PSP) to determine the appropriate country code.

Apple Pay may use the `countryCode` to generate payment data that complies with local regulations. For more information on regional compliance, see [Complying with regional regulations](../complying-with-regional-regulations.md).

## See Also

### Setting currency and region information

- [currencyCode](currencycode.md): The three-letter ISO 4217 currency code that determines the currency the payment request uses.
- [supportedCountries](supportedcountries.md): A list of ISO 3166 country codes to limit payments to cards from specific countries or regions.
