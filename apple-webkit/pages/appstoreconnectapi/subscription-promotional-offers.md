> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscription-promotional-offers](https://developer.apple.com/documentation/appstoreconnectapi/subscription-promotional-offers)

# Subscription Promotional Offers

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Create, modify, and delete promotional offers for auto-renewable subscriptions.

## Topics

### Endpoints

- [Create a promotional offer](post-v1-subscriptionpromotionaloffers.md): Create a promotional offer for an auto-renewable subscription.
- [List all promotional offer prices for a subscription](get-v1-subscriptionpromotionaloffers-_id_-prices.md): Get a list of prices of a promotional offer for an auto-renewable subscription, for a specified territory.
- [List price IDs for a subscription promotional offer](get-v1-subscriptionpromotionaloffers-_id_-relationships-prices.md)
- [Read promotional offer information](get-v1-subscriptionpromotionaloffers-_id_.md): Get details about a specific promotional offer for an auto-renewable subscription.
- [Modify a promotional offer](patch-v1-subscriptionpromotionaloffers-_id_.md): Update the prices for a specific promotional offer for an auto-renewable subscription.
- [Delete a promotional offer from a subscription](delete-v1-subscriptionpromotionaloffers-_id_.md): Delete a specific promotional offer from an auto-renewable subscription.

### Objects

- [SubscriptionPromotionalOffer](subscriptionpromotionaloffer.md): A discounted or free trial offer for an auto-renewable subscription, available to eligible existing or former subscribers.
- [SubscriptionPromotionalOfferCreateRequest](subscriptionpromotionaloffercreaterequest.md): The request body you use to create a subscription promotional offer.
- [SubscriptionPromotionalOfferInlineCreate](subscriptionpromotionalofferinlinecreate.md): An inline object for specifying a promotional offer when creating or updating a subscription.
- [SubscriptionPromotionalOfferPrice](subscriptionpromotionalofferprice.md): The territory-specific customer price and duration for a subscription promotional offer.
- [SubscriptionPromotionalOfferPriceInlineCreate](subscriptionpromotionalofferpriceinlinecreate.md): An inline object for specifying territory pricing when creating a subscription promotional offer.
- [SubscriptionPromotionalOfferPricesResponse](subscriptionpromotionalofferpricesresponse.md): A response containing a list of territory-specific prices for a subscription promotional offer.
- [SubscriptionPromotionalOfferResponse](subscriptionpromotionalofferresponse.md): The response body for endpoints that create, read, or modify a single subscription promotional offer.
- [SubscriptionPromotionalOfferUpdateRequest](subscriptionpromotionalofferupdaterequest.md): The request body you use to update a subscription promotional offer update request.
- [SubscriptionPromotionalOffersResponse](subscriptionpromotionaloffersresponse.md): The response body for endpoints that list promotional offers for a subscription.

## See Also

### Managing Subscription Offers

- [Subscription Offer Codes](subscription-offer-codes.md): Create and manage subscription offers for auto-renewable subscriptions, including one-time use offer codes, and custom offer codes.
- [Subscription Introductory Offers](subscription-introductory-offers.md): Create, modify, and delete introductory offers for auto-renewable subscriptions.
