> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypayment/shippingcontact](https://developer.apple.com/documentation/applepayontheweb/applepaypayment/shippingcontact)

# shippingContact

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The shipping contact selected by the user for this transaction.

## Declaration

```
ApplePayPaymentContact shippingContact;
```

<a id="Discussion"></a>

## Discussion

The shipping contact information is populated if it is requested in [ApplePayPaymentRequest](../applepaypaymentrequest.md). See [ApplePayPaymentContact](../applepaypaymentcontact.md) for the fields in [shippingContact](shippingcontact.md).

Shipping contact information can contain address, name, phone, and email fields. You determine which fields are present by setting the [requiredShippingContactFields](../applepaypaymentrequest/requiredshippingcontactfields.md) parameter in [ApplePayPaymentRequest](../applepaypaymentrequest.md). Shipping contact details may differ based on the user’s geographic region.

Before the user authorizes the transaction with Touch ID, Face ID, or passcode, you receive redacted address information when [onshippingcontactselected](../applepaysession/onshippingcontactselected.md) is triggered. Although the address is redacted for privacy, it includes sufficient information for you to compute taxes and shipping costs and refresh the corresponding values and total in the payment sheet.

Listing 1. Example of a redacted address in

```javascript
{
"locality": "Cupertino",
"country": "United States",
"postalCode": "95014",
"administrativeArea": "CA",
"familyName": "",
"countryCode": "",
"givenName": ""
}
```

After the user authorizes the transaction, [shippingContact](shippingcontact.md) contains the complete shipping contact data.

Listing 2. Example of  after the user authorizes the transaction

```javascript
{
"locality": "Cupertino",
"country": "United States",
"postalCode": "95014-2083",
"administrativeArea": "CA",
"emailAddress": "ravipatel@example.com",
"familyName": "Patel",
"addressLines": [
"1 Infinite Loop"
],
"givenName": "Ravi",
"countryCode": "US",
"phoneNumber": "(408) 555-5555"
}
```

> **Note**

>  Address information can come from a wide range of sources and may be in a different format than you expect. Always validate the information before you use it.

## See Also

### Billing and shipping contacts

- [billingContact](billingcontact.md): The billing contact selected by the user for this transaction.
- [ApplePayPaymentContact](../applepaypaymentcontact.md): Contact information fields to use for billing and shipping contact information.
