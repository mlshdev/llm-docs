> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductdiscount/price](https://developer.apple.com/documentation/storekit/skproductdiscount/price)

# price (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The discount price of the product in the local currency.

> Use Product.SubscriptionOffer.displayPrice.

## Declaration

```swift
var price: NSDecimalNumber { get }
```

<a id="Discussion"></a>

## Discussion

Use the [priceLocale](pricelocale.md) to format the price.

## See Also

### Getting Price and Payment Mode

- [priceLocale](pricelocale.md): Deprecated. The locale used to format the discount price of the product.
- [paymentMode](paymentmode-swift.property.md): Deprecated. The payment mode for this product discount.
- [SKProductDiscount.PaymentMode](paymentmode-swift.enum.md): Deprecated. Values representing the payment modes for a product discount.

# price (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The discount price of the product in the local currency.

> Use Product.SubscriptionOffer.displayPrice.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDecimalNumber * price;
```

<a id="Discussion"></a>

## Discussion

Use the [priceLocale](pricelocale.md) to format the price.

## See Also

### Getting Price and Payment Mode

- [priceLocale](pricelocale.md): Deprecated. The locale used to format the discount price of the product.
- [paymentMode](paymentmode-swift.property.md): Deprecated. The payment mode for this product discount.
- [SKProductDiscountPaymentMode](paymentmode-swift.enum.md): Deprecated. Values representing the payment modes for a product discount.
