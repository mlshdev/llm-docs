> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/directions/eta1](https://developer.apple.com/documentation/mapkitjs/directions/eta1)

# eta(request, callback)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.46+ (deprecated in 6.0)

Retrieves estimated arrival times to up to 10 destinations from a single starting point.

> Instead of passing in a callback, handle the returned promise instead. See [eta()](eta.md).

## Declaration

```
eta(
    request: EtaRequestOptions,
    callback: (error: Error | null, result: EtaResponse | null) => void,
): Promise<EtaResponse>;
```

## Parameters

- `request`: An [EtaRequestOptions](../etarequestoptions.md) object that specifies details for the server to provide estimated arrival times at one or more destinations.
- `callback`: A callback function that receives the estimated time response object, returned asynchronously.

<a id="return-value"></a>

## Return Value

A promise that resolves with an [EtaResponse](../etaresponse.md) on success.

<a id="Discussion"></a>

## Discussion

To get a set of estimated arrival times, provide an [EtaRequestOptions](../etarequestoptions.md) object when you call the [eta()](eta1.md) method. You can provide up to 10 destinations. The server returns an error if you request more than 10 destinations in a single request.

Estimated times are returned asynchronously via a callback function. MapKit JS invokes the callback function with two arguments, `error` on failure and `data` on success.

`error` contains an error code and a text description of the error. `data` is an [EtaResponse](../etaresponse.md) object.

## See Also

### Deprecated

- [route()](route1.md): Deprecated. Retrieves directions and estimated travel time based on the specified start and end points.
- [Transport](transport.md): Deprecated. A static property that refers to an object that describes the available transport type values.
