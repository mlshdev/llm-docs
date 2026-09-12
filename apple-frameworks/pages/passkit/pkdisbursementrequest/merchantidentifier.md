> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/merchantidentifier](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/merchantidentifier)

# merchantIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

A string that identifies the merchant.

## Declaration

```swift
var merchantIdentifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

This string needs to match one of the merchant IDs you registered with the Developer Portal or in Xcode, which the [Merchant IDs Entitlement](../../bundleresources/entitlements/com.apple.developer.in-app-payments.md) specifies in the app’s entitlements. For more information on adding merchant IDs, see [Configure Apple Pay (iOS, watchOS)](https://help.apple.com/xcode/mac/current/#/deva43983eb7?sub=dev171483d6e).

## See Also

### Setting the merchant information

- [merchantCapabilities](merchantcapabilities.md): A value that represents the payment-processing capabilities of the merchant.
- [supportedNetworks](supportednetworks.md): An array of payment networks the merchant supports.

# merchantIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

A string that identifies the merchant.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * merchantIdentifier;
```

<a id="Discussion"></a>

## Discussion

This string needs to match one of the merchant IDs you registered with the Developer Portal or in Xcode, which the [Merchant IDs Entitlement](../../bundleresources/entitlements/com.apple.developer.in-app-payments.md) specifies in the app’s entitlements. For more information on adding merchant IDs, see [Configure Apple Pay (iOS, watchOS)](https://help.apple.com/xcode/mac/current/#/deva43983eb7?sub=dev171483d6e).

## See Also

### Setting the merchant information

- [merchantCapabilities](merchantcapabilities.md): A value that represents the payment-processing capabilities of the merchant.
- [supportedNetworks](supportednetworks.md): An array of payment networks the merchant supports.
