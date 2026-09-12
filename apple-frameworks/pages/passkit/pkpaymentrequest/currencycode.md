> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/currencycode](https://developer.apple.com/documentation/passkit/pkpaymentrequest/currencycode)

# currencyCode (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The three-letter ISO 4217 currency code that determines the currency the payment request uses.

## Declaration

```swift
var currencyCode: String { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to the three-letter code for the currency used by this payment request. Apple Pay interprets the amounts provided by the summary items attached to this request as amounts in this currency.

The framework translates the currency code from the alphabetic code to the corresponding numeric code. The numeric code is passed to the Secure Element and appears in the encrypted payment data. For more information on the Secure Element, see [A Payment Token Is Created When a Payment Is Authorized](https://developer.apple.com/library/archive/ApplePay_Guide/Authorization.html#//apple_ref/doc/uid/TP40014764-CH4-SW4) in [Apple Pay Programming Guide](https://developer.apple.com/library/archive/ApplePay_Guide/index.html#//apple_ref/doc/uid/TP40014764).

## See Also

### Setting currency and region information

- [supportedCountries](supportedcountries.md): A list of ISO 3166 country codes to limit payments to cards from specific countries or regions.
- [countryCode](countrycode.md): The merchant’s two-letter ISO 3166 country code.

# currencyCode (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The three-letter ISO 4217 currency code that determines the currency the payment request uses.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * currencyCode;
```

<a id="Discussion"></a>

## Discussion

Set this property to the three-letter code for the currency used by this payment request. Apple Pay interprets the amounts provided by the summary items attached to this request as amounts in this currency.

The framework translates the currency code from the alphabetic code to the corresponding numeric code. The numeric code is passed to the Secure Element and appears in the encrypted payment data. For more information on the Secure Element, see [A Payment Token Is Created When a Payment Is Authorized](https://developer.apple.com/library/archive/ApplePay_Guide/Authorization.html#//apple_ref/doc/uid/TP40014764-CH4-SW4) in [Apple Pay Programming Guide](https://developer.apple.com/library/archive/ApplePay_Guide/index.html#//apple_ref/doc/uid/TP40014764).

## See Also

### Setting currency and region information

- [supportedCountries](supportedcountries.md): A list of ISO 3166 country codes to limit payments to cards from specific countries or regions.
- [countryCode](countrycode.md): The merchant’s two-letter ISO 3166 country code.
