> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/updateshoppingcart(_:)](https://developer.apple.com/documentation/proximityreader/customerengagementsession/updateshoppingcart(_:))

# updateShoppingCart(\_:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Updates the shopping cart on the customer’s device.

## Declaration

```swift
final func updateShoppingCart(_ shoppingCart: CustomerEngagement.ShoppingCart) async throws -> CustomerEngagement.ShoppingCartToken
```

## Parameters

- `shoppingCart`: A structure of the shopping cart, consisting of shopping cart items and the summary.

<a id="return-value"></a>

## Return Value

[CustomerEngagement.ShoppingCartToken](../customerengagement/shoppingcarttoken.md) for making payment request using [requestPayment(for:using:delegate:)](requestpayment%28for_using_delegate_%29.md).

## Mentioned In

- [Adding support for Tap to Share to your app](../adding-support-for-tap-to-share-to-your-app.md)

<a id="discussion"></a>

## Discussion

This function can be called repeatedly as the shopping cart is populated, and each update replaces the entire shopping cart.

When there isn’t any form, like a sign-up form being displayed, the screen defaults to the current [CustomerEngagement.ShoppingCart](../customerengagement/shoppingcart.md).

> **Throws**

> [CustomerEngagementSession.Error](error.md) if the request fails.

## See Also

### Updating the customer status and cart

- [updateStatus(\_:)](updatestatus%28__%29.md): Updates the status on the customer’s screen.
