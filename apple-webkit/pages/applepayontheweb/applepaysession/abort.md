> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaysession/abort](https://developer.apple.com/documentation/applepayontheweb/applepaysession/abort)

# abort

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Aborts the current Apple Pay session.

## Declaration

```
undefined abort();
```

<a id="Discussion"></a>

## Discussion

Dismisses the payment sheet and ends the Apple Pay session without completing a transaction. Only the web page can call [abort](abort.md).

## See Also

### Ending the session

- [oncancel](oncancel.md): An event handler that is automatically called when the payment UI is dismissed.
