> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagement](https://developer.apple.com/documentation/proximityreader/customerengagement)

# CustomerEngagement

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An enumeration of the shared data between the merchant and customer.

## Declaration

```swift
enum CustomerEngagement
```

<a id="overview"></a>

## Overview

Use this enumeration to authenticate credentials, display customer screen states, and get customer information.

## Topics

### Creating authentication credentials

- [CustomerEngagement.Token](customerengagement/token.md): A token that authenticates access to a customer engagement session.

### Providing shopping cart token for payment request

- [CustomerEngagement.ShoppingCartToken](customerengagement/shoppingcarttoken.md): A token referencing the shopping cart.

### Displaying customer screen states

- [CustomerEngagement.Status](customerengagement/status.md): A predefined set of customer engagement screen states.

### Getting customer information

- [CustomerEngagement.Address](customerengagement/address.md): A customer’s address collected during a customer engagement session.
- [CustomerEngagement.CustomerInfo](customerengagement/customerinfo.md): A response structure that describes customer information.
- [CustomerEngagement.SignUp](customerengagement/signup.md): Contact information and marketing consent selections a customer provides during a sign-up request.
- [CustomerEngagement.ShoppingCart](customerengagement/shoppingcart.md): A structure that describes the shopping cart content.

## See Also

### Tap to Share

- [Adding support for Tap to Share to your app](adding-support-for-tap-to-share-to-your-app.md): Request and share customer information on device.
- [CustomerEngagementSession](customerengagementsession.md): The object you use to share and request customer information.
