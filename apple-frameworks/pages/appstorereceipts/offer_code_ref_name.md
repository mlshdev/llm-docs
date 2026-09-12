> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts/offer_code_ref_name](https://developer.apple.com/documentation/appstorereceipts/offer_code_ref_name)

# offer_code_ref_name

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Type  
**Availability:** App Store Receipts 1.4+ (deprecated in 1.7)

The offer-reference name of the subscription offer code that the customer redeems.

## Declaration

```
string offer_code_ref_name
```

<a id="Discussion"></a>

## Discussion

When a customer successfully redeems an offer code, this field is present in the receipt and contains the reference name of the offer. You establish the offer reference name in App Store Connect when you configure offers and create the offer codes. For more information about setting up offers, see [Set Up Offer Codes](https://help.apple.com/app-store-connect/#/dev6a098e4b1).

Use this value to:

- Determine whether the sale of the subscription was from an offer code campaign.
- Determine the specific offer the customer redeemed.
- Keep track of subscription-offer codes a customer has redeemed, to limit discounts you offer, according to your business model.

For more information on offers and offer codes, see [Implementing offer codes in your app](../storekit/implementing-offer-codes-in-your-app.md).

## See Also

### Promotions and offers

- [promotional_offer_id](promotional_offer_id.md): Deprecated. The identifier of the promotional offer for an auto-renewable subscription that the user redeems.
