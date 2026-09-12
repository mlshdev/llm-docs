> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductdiscount/paymentmode-swift.property](https://developer.apple.com/documentation/storekit/skproductdiscount/paymentmode-swift.property)

# paymentMode (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The payment mode for this product discount.

> Use Product.SubscriptionOffer.paymentMode.

## Declaration

```swift
var paymentMode: SKProductDiscount.PaymentMode { get }
```

<a id="Discussion"></a>

## Discussion

The payment mode indicates how the product discount [price](price.md) is charged:

- One or more times, for [SKProductDiscount.PaymentMode.payAsYouGo](paymentmode-swift.enum/payasyougo.md) mode
- Once in advance, for [SKProductDiscount.PaymentMode.payUpFront](paymentmode-swift.enum/payupfront.md) mode
- No initial charge, for [SKProductDiscount.PaymentMode.freeTrial](paymentmode-swift.enum/freetrial.md) mode.

Use the payment mode to display an accurate description of the product discount in your UI. For design guidance, see [Human Interface Guidelines \> In-App Purchase](https://developer.apple.com/ios/human-interface-guidelines/technologies/in-app-purchase/).

## See Also

### Getting Price and Payment Mode

- [price](price.md): Deprecated. The discount price of the product in the local currency.
- [priceLocale](pricelocale.md): Deprecated. The locale used to format the discount price of the product.
- [SKProductDiscount.PaymentMode](paymentmode-swift.enum.md): Deprecated. Values representing the payment modes for a product discount.

# paymentMode (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The payment mode for this product discount.

> Use Product.SubscriptionOffer.paymentMode.

## Declaration

```objectivec
@property (nonatomic, readonly) SKProductDiscountPaymentMode paymentMode;
```

<a id="Discussion"></a>

## Discussion

The payment mode indicates how the product discount [price](price.md) is charged:

- One or more times, for [SKProductDiscountPaymentModePayAsYouGo](paymentmode-swift.enum/payasyougo.md) mode
- Once in advance, for [SKProductDiscountPaymentModePayUpFront](paymentmode-swift.enum/payupfront.md) mode
- No initial charge, for [SKProductDiscountPaymentModeFreeTrial](paymentmode-swift.enum/freetrial.md) mode.

Use the payment mode to display an accurate description of the product discount in your UI. For design guidance, see [Human Interface Guidelines \> In-App Purchase](https://developer.apple.com/ios/human-interface-guidelines/technologies/in-app-purchase/).

## See Also

### Getting Price and Payment Mode

- [price](price.md): Deprecated. The discount price of the product in the local currency.
- [priceLocale](pricelocale.md): Deprecated. The locale used to format the discount price of the product.
- [SKProductDiscountPaymentMode](paymentmode-swift.enum.md): Deprecated. Values representing the payment modes for a product discount.
