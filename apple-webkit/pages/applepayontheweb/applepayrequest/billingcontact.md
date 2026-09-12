> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayrequest/billingcontact](https://developer.apple.com/documentation/applepayontheweb/applepayrequest/billingcontact)

# billingContact

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The customer’s billing contact information.

## Declaration

```
ApplePayPaymentContact billingContact;
```

<a id="Discussion"></a>

## Discussion

If you have an up-to-date billing address for the customer on file, you can set it here. This billing address appears in the payment sheet. The user can either use the address you specify or select a different address.

> **Note**

>  If you supply a billing address, you must also request `“postalAddress”` in [requiredBillingContactFields](../applepaypaymentrequest/requiredbillingcontactfields.md).

## See Also

### Known contact information

- [shippingContact](shippingcontact.md): The customer’s shipping contact information.
- [shippingContactEditingMode](shippingcontacteditingmode.md): A value that indicates if the shipping mode prevents the user editing the shipping address.
- [ApplePayPaymentContact](../applepaypaymentcontact.md): Contact information fields to use for billing and shipping contact information.
- [ApplePayShippingContactEditingMode](../applepayshippingcontacteditingmode.md): Values that indicate whether the shipping mode prevents the user from editing fields of the shipping address.
