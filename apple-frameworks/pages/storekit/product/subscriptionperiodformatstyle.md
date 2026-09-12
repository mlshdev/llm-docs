> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionperiodformatstyle](https://developer.apple.com/documentation/storekit/product/subscriptionperiodformatstyle)

# subscriptionPeriodFormatStyle

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The format style for the date components related to a subscription’s duration.

## Declaration

```swift
@backDeployed(before: iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, macCatalyst 16.0)
var subscriptionPeriodFormatStyle: Date.ComponentsFormatStyle { get }
```

<a id="Discussion"></a>

## Discussion

Use this format style to format text that describes a subscription period, including its length and unit, such as “1 week”, “2 months”, and so on. Use this style with the [formatted(\_:referenceDate:)](subscriptionperiod/formatted%28__referencedate_%29-3t7wd.md) method on [Product.SubscriptionPeriod](subscriptionperiod.md) to format the subscription period for the App Store locale.

> **Note**

>  When using [subscriptionPeriodFormatStyle](subscriptionperiodformatstyle.md) on systems earlier than iOS 16, macOS 13, tvOS 16, and watchOS 9, the property may return a format style with a sentinel locale identifier of `“xx_XX”` in uncommon cases, including if the server has an error, or while testing your app using StoreKit Testing in Xcode. For StoreKit testing, use a later OS version.

## See Also

### Displaying a product description and price

- [displayName](displayname.md): The localized display name of the product, if it exists.
- [description](description.md): The localized description of the product.
- [displayPrice](displayprice.md): The localized string representation of the product price, suitable for display.
- [price](price.md): The decimal representation of the cost of the product, in local currency.
- [priceFormatStyle](priceformatstyle.md): The format style for the numbers in the price of the product.
- [subscriptionPeriodUnitFormatStyle](subscriptionperiodunitformatstyle.md): The format style for subscription period units, such as week, month, or year.
