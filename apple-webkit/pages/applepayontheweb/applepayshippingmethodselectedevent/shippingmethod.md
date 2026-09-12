> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayshippingmethodselectedevent/shippingmethod](https://developer.apple.com/documentation/applepayontheweb/applepayshippingmethodselectedevent/shippingmethod)

# shippingMethod

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The shipping method selected by the user.

## Declaration

```
readonly attribute ApplePayShippingMethod shippingMethod;
```

<a id="Discussion"></a>

## Discussion

See [ApplePayShippingMethod](../applepayshippingmethod.md).

This attribute is contained by the [onshippingmethodselected](../applepaysession/onshippingmethodselected.md) event. Access this attribute using the `event` parameter in the callback function; for example, `var myShippingMethod = event.shippingMethod;`.
