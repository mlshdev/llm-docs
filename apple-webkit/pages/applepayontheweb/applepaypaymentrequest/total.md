> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentrequest/total](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentrequest/total)

# total

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A line item that represents the total for the payment.

## Declaration

```
required ApplePayLineItem total;
```

## Mentioned In

- [Apple Pay on the Web Version 4 Release Notes](../apple-pay-on-the-web-version-4-release-notes.md)

<a id="Discussion"></a>

## Discussion

See [ApplePayLineItem](../applepaylineitem.md).

The [amount](../applepaylineitem/amount.md) of the `total` must be greater than or equal to zero and the [label](../applepaylineitem/label.md) must be non-empty to pass validation.

Provide a business name in the [label](../applepaylineitem/label.md) field. Use the same business name people see when they look for the charge on their bank or credit card statement, for example, `“COMPANY, INC."`.

```javascript
"total": {
    "label": "COMPANY, INC.",
    "type": "final",
    "amount": "38.06"
}
```

> **Note**

>  In versions of Apple Pay JS prior to version 4, the `amount` of the `total` must be greater than zero. Check for version availability using [supportsVersion](../applepaysession/supportsversion.md) before setting a zero `amount`.

## See Also

### Setting the total and summary line items

- [lineItems](lineitems.md): A set of line items that explain recurring payments and additional charges and discounts.
- [ApplePayLineItem](../applepaylineitem.md): A line item in a payment request—for example, total, tax, discount, or grand total.
- [ApplePayLineItemType](../applepaylineitemtype.md): A type that indicates whether a line item is final or pending.
