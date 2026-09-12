> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayrequest/requiredbillingcontactfields](https://developer.apple.com/documentation/applepayontheweb/applepayrequest/requiredbillingcontactfields)

# requiredBillingContactFields

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The fields of billing information the user must provide to process the transaction.

## Declaration

```
sequence <ApplePayContactField> requiredBillingContactFields;
```

<a id="Discussion"></a>

## Discussion

Use [requiredBillingContactFields](requiredbillingcontactfields.md) to request the user’s billing address that’s associated with their payment method, as shown in the following listing.

```javascript
"requiredBillingContactFields": [
    "postalAddress"
]
```

You’ll receive the postal address as well as the user’s name after the user authorizes the transaction.

The source of the information may be the user’s “My card” in Contacts, Wallet settings, or may be entered by the user into the payment sheet, either directly or through Contacts.

## See Also

### Requesting billing and shipping contact information

- [requiredShippingContactFields](requiredshippingcontactfields.md): The fields of shipping information the user must provide to fulfill the order.
