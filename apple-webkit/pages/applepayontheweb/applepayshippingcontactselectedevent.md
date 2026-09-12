> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayshippingcontactselectedevent](https://developer.apple.com/documentation/applepayontheweb/applepayshippingcontactselectedevent)

# ApplePayShippingContactSelectedEvent

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Class  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An event object that contains the shipping address the user selects.

## Declaration

```
interface ApplePayShippingContactSelectedEvent
```

<a id="overview"></a>

## Overview

The event handler [onshippingcontactselected](applepaysession/onshippingcontactselected.md) receives this event object when the user selects a shipping contact.

## Topics

### Shipping Contact Properties

- [shippingContact](applepayshippingcontactselectedevent/shippingcontact.md): The shipping address selected by the user.

## See Also

### Handling shipping contact updates

- [onshippingcontactselected](applepaysession/onshippingcontactselected.md): An event handler to call when the user selects a shipping contact in the payment sheet.
- [completeShippingContactSelection](applepaysession/completeshippingcontactselection.md): Completes the selection of a shipping contact with an update.
- [ApplePayShippingContactUpdate](applepayshippingcontactupdate.md): Updated transaction details that result from a change in shipping contact, including any errors.
