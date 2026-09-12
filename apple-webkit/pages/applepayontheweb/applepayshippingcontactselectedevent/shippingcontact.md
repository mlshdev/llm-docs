> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayshippingcontactselectedevent/shippingcontact](https://developer.apple.com/documentation/applepayontheweb/applepayshippingcontactselectedevent/shippingcontact)

# shippingContact

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The shipping address selected by the user.

## Declaration

```
readonly attribute ApplePayPaymentContact shippingContact;
```

<a id="Discussion"></a>

## Discussion

This attribute is contained by the [onshippingcontactselected](../applepaysession/onshippingcontactselected.md) event. Access this attribute using the event parameter in the callback function; for example, `var myShippingContact = event.shippingContact;`.
