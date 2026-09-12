> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaymodifier/total](https://developer.apple.com/documentation/applepayontheweb/applepaymodifier/total)

# total

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A line item that represents the total payment.

## Declaration

```
ApplePayLineItem total;
```

## Mentioned In

- [Apple Pay on the Web Version 12 Release Notes](../apple-pay-on-the-web-version-12-release-notes.md)

<a id="Discussion"></a>

## Discussion

The total must be a positive number greater than zero. This value is the final amount that the payment request authorizes.

## See Also

### Payment line items

- [additionalLineItems](additionallineitems.md): A set of line items that explain additional charges and discounts.
