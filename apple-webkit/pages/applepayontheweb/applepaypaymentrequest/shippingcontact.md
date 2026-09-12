> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentrequest/shippingcontact](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentrequest/shippingcontact)

# shippingContact

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Shipping contact information for the user.

## Declaration

```
ApplePayPaymentContact shippingContact;
```

<a id="Discussion"></a>

## Discussion

If you have an up-to-date shipping address on file, you can set it here. See [ApplePayPaymentContact](../applepaypaymentcontact.md) for the fields in [shippingContact](shippingcontact.md).

The information you provide in [shippingContact](shippingcontact.md) is displayed in the payment sheet as the default shipping address. The user can either keep the address you provided or select another address.

Provide your user’s shipping contact info only if you are requiring shipping contact information.

## See Also

### Providing known contact information

- [billingContact](billingcontact.md): Billing contact information for the user.
- [ApplePayPaymentContact](../applepaypaymentcontact.md): Contact information fields to use for billing and shipping contact information.
