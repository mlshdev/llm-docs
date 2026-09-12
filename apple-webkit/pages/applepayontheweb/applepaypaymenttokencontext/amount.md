> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymenttokencontext/amount](https://developer.apple.com/documentation/applepayontheweb/applepaypaymenttokencontext/amount)

# amount

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The amount to authorize for the payment token context.

## Declaration

```
required DOMString amount;
```

<a id="Discussion"></a>

## Discussion

The sum of the [amount](amount.md) of all the payment token contexts in a payment request must be less than or equal to the grand total amount of the enclosing payment request.
