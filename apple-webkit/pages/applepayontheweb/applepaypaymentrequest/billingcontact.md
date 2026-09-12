> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentrequest/billingcontact](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentrequest/billingcontact)

# billingContact

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Billing contact information for the user.

## Declaration

```
ApplePayPaymentContact billingContact;
```

<a id="Discussion"></a>

## Discussion

If you have an up-to-date billing address on file, you can set it here. This billing address appears in the payment sheet. The user can either use the address you specify or select a different address.

> **Note**

>  If you supply a billing address, you must also request “`postalAddress`” in [requiredBillingContactFields](requiredbillingcontactfields.md).

## See Also

### Providing known contact information

- [shippingContact](shippingcontact.md): Shipping contact information for the user.
- [ApplePayPaymentContact](../applepaypaymentcontact.md): Contact information fields to use for billing and shipping contact information.
