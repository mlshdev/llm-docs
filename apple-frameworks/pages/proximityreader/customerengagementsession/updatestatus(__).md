> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/updatestatus(_:)](https://developer.apple.com/documentation/proximityreader/customerengagementsession/updatestatus(_:))

# updateStatus(\_:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Updates the status on the customer’s screen.

## Declaration

```swift
final func updateStatus(_ status: CustomerEngagement.Status) async throws
```

## Parameters

- `status`: An enum that defines a fixed status text which includes a title and a subtitle.

## Mentioned In

- [Adding support for Tap to Share to your app](../adding-support-for-tap-to-share-to-your-app.md)

<a id="discussion"></a>

## Discussion

When there isn’t any form, like a sign-up form being displayed, the screen defaults to [CustomerEngagement.Status.ready](../customerengagement/status/ready.md) unless there is a [CustomerEngagement.ShoppingCart](../customerengagement/shoppingcart.md). [CustomerEngagement.Status.ready](../customerengagement/status/ready.md) resets the default screen from [CustomerEngagement.ShoppingCart](../customerengagement/shoppingcart.md).

> **Throws**

> [CustomerEngagementSession.Error](error.md) if the request fails.

## See Also

### Updating the customer status and cart

- [updateShoppingCart(\_:)](updateshoppingcart%28__%29.md): Updates the shopping cart on the customer’s device.
