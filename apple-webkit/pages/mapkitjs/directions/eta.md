> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/directions/eta](https://developer.apple.com/documentation/mapkitjs/directions/eta)

# eta(request)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.46+

Retrieves estimated arrival times to up to 10 destinations from a single starting point.

## Declaration

```
eta(request: EtaRequestOptions): Promise<EtaResponse>;
```

## Parameters

- `request`: An [EtaRequestOptions](../etarequestoptions.md) object that specifies details for the server to provide estimated arrival times at one or more destinations.

<a id="return-value"></a>

## Return Value

A promise that resolves with an [EtaResponse](../etaresponse.md) on success, or rejects with an `Error` on failure.

<a id="Discussion"></a>

## Discussion

To get a set of estimated arrival times, provide an [EtaRequestOptions](../etarequestoptions.md) object when you call the [eta()](eta.md) method. You can provide up to 10 destinations. The server returns an error if you request more than 10 destinations in a single request.

Pass an `AbortSignal` from an `AbortController` to the [signal](../etarequestoptions/signal.md) option to allow the controller to cancel a pending request. When the controller aborts, the promise it returns rejects with a `DOMException` whose `name` is `"AbortError"`.

## See Also

### Getting estimated arrival times

- [EtaRequestOptions](../etarequestoptions.md): The options you may provide for requesting estimated arrival times.
- [EtaResponse](../etaresponse.md): The estimated arrival times for a set of destinations.
- [EtaResult](../etaresult.md): The mode of transportation, distance, and travel time estimates for a single destination.
