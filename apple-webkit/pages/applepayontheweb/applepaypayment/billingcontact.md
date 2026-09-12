> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypayment/billingcontact](https://developer.apple.com/documentation/applepayontheweb/applepaypayment/billingcontact)

# billingContact

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The billing contact selected by the user for this transaction.

## Declaration

```
ApplePayPaymentContact billingContact;
```

<a id="Discussion"></a>

## Discussion

The billing contact information is populated if it is requested in [ApplePayPaymentRequest](../applepaypaymentrequest.md).

After the user authorizes the transaction with Touch ID, Face ID, or passcode, `billingContact` contains the complete billing contact data. See [ApplePayPaymentContact](../applepaypaymentcontact.md) for the billing contact field values.

> **Note**

>  Address information can come from a wide range of sources. Always validate the information before you use it.

## See Also

### Billing and shipping contacts

- [shippingContact](shippingcontact.md): The shipping contact selected by the user for this transaction.
- [ApplePayPaymentContact](../applepaypaymentcontact.md): Contact information fields to use for billing and shipping contact information.
