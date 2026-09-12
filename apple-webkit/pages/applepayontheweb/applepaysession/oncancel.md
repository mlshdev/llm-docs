> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaysession/oncancel](https://developer.apple.com/documentation/applepayontheweb/applepaysession/oncancel)

# oncancel

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An event handler that is automatically called when the payment UI is dismissed.

## Declaration

```
attribute EventHandler oncancel;
```

## Mentioned In

- [Apple Pay JS change log](../apple-pay-js-change-log.md)

<a id="Discussion"></a>

## Discussion

This function can be called even after an [onpaymentauthorized](onpaymentauthorized.md) event has been dispatched. Both the user and the web page can dismiss the payment sheet and abandon the transaction.

## See Also

### Ending the session

- [abort](abort.md): Aborts the current Apple Pay session.
