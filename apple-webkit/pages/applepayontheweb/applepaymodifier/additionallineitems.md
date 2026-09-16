> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applepayontheweb/applepaymodifier/additionallineitems

# additionalLineItems

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A set of line items that explain additional charges and discounts.

## Declaration

```
sequence <ApplePayLineItem> additionalLineItems;
```

## Mentioned In

- [Apple Pay on the Web Version 12 Release Notes](../apple-pay-on-the-web-version-12-release-notes.md)

<a id="Discussion"></a>

## Discussion

A line item can describe an additional charge or discount, and can consist of positive or negative numbers.

## See Also

### Payment line items

- [total](total.md): A line item that represents the total payment.
