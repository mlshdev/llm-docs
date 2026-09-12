> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/displayprice](https://developer.apple.com/documentation/storekit/product/displayprice)

# displayPrice

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The localized string representation of the product price, suitable for display.

## Declaration

```swift
let displayPrice: String
```

<a id="Discussion"></a>

## Discussion

Use this string to display the price, formatted for the locale. The storefront that the user’s device is connected to determines the locale. For more information, see [Storefront](../storefront.md).

To perform arithmetic calculations with the price, use the [price](price.md) property instead.

## See Also

### Displaying a product description and price

- [displayName](displayname.md): The localized display name of the product, if it exists.
- [description](description.md): The localized description of the product.
- [price](price.md): The decimal representation of the cost of the product, in local currency.
- [priceFormatStyle](priceformatstyle.md): The format style for the numbers in the price of the product.
- [subscriptionPeriodFormatStyle](subscriptionperiodformatstyle.md): The format style for the date components related to a subscription’s duration.
- [subscriptionPeriodUnitFormatStyle](subscriptionperiodunitformatstyle.md): The format style for subscription period units, such as week, month, or year.
