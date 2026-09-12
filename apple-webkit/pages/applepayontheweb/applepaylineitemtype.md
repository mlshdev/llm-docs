> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaylineitemtype](https://developer.apple.com/documentation/applepayontheweb/applepaylineitemtype)

# ApplePayLineItemType

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Enumeration  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A type that indicates whether a line item is final or pending.

## Declaration

```
enum ApplePayLineItemType
```

<a id="overview"></a>

## Overview

The constant values are:

- **`final`**: A line item representing the known, final cost.
- **`pending`**: A line item representing an estimated or unknown cost.

## Topics

### Enumeration Cases

- [final](applepaylineitemtype/final.md)
- [pending](applepaylineitemtype/pending.md)

## See Also

### Setting the total and summary line items

- [total](applepaypaymentrequest/total.md): A line item that represents the total for the payment.
- [lineItems](applepaypaymentrequest/lineitems.md): A set of line items that explain recurring payments and additional charges and discounts.
- [ApplePayLineItem](applepaylineitem.md): A line item in a payment request—for example, total, tax, discount, or grand total.
