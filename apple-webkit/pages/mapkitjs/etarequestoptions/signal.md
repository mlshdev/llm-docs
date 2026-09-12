> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/etarequestoptions/signal](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/signal)

# signal

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 6.0+

A signal object allowing you to cancel the request.

## Declaration

```
signal?: AbortSignal;
```

<a id="Discussion"></a>

## Discussion

Pass an `AbortSignal` from an `AbortController` to allow the controller to cancel a pending ETA request. When the controller aborts, the promise it returns rejects with a `DOMException` whose `name` is `"AbortError"`.

## See Also

### ETA Request

- [origin](origin.md): The starting point for estimated arrival time requests.
- [departureDate](departuredate.md): The time of departure used in an estimated arrival time request.
- [destinations](destinations.md): An array of coordinates that represent end points for estimated arrival time requests.
- [transportType](transporttype.md): The mode of transportation the server uses when estimating arrival times.
