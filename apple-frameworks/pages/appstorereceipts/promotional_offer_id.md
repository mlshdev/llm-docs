> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts/promotional_offer_id](https://developer.apple.com/documentation/appstorereceipts/promotional_offer_id)

# promotional_offer_id

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Type  
**Availability:** App Store Receipts 1.0+ (deprecated in 1.7)

The identifier of the promotional offer for an auto-renewable subscription that the user redeems.

## Declaration

```
string promotional_offer_id
```

<a id="Discussion"></a>

## Discussion

This field is returned in the JSON response, in the [responseBody.Latest_receipt_info](responsebody/latest_receipt_info-data.dictionary.md) and [responseBody.Receipt.In_app](responsebody/receipt-data.dictionary/in_app-data.dictionary.md) arrays.

You provide this value in the Promotional Offer Identifier field when you create the promotional offer in App Store Connect. For more information, see [Set up promotional offers for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev16dfca448).

You can use the promotional offer ID value to:

- Confirm that the sale of the subscription was from a promotional offer.
- Confirm which promotional offer the user redeemed.
- Keep track of the promotional offers that a user has redeemed to limit discounts you offer, according to your business model.

For more information on promotional offers, see [Implementing promotional offers in your app](../storekit/implementing-promotional-offers-in-your-app.md).

## See Also

### Promotions and offers

- [offer_code_ref_name](offer_code_ref_name.md): Deprecated. The offer-reference name of the subscription offer code that the customer redeems.
