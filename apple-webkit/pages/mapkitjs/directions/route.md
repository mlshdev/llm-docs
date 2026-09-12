> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/directions/route](https://developer.apple.com/documentation/mapkitjs/directions/route)

# route(request)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Retrieves directions and estimated travel time based on the specified start and end points.

## Declaration

```
route(request: DirectionsRequest): Promise<DirectionsResponse>;
```

## Parameters

- `request`: A [DirectionsRequest](../directionsrequest.md) object that specifies details for the directions you want to retrieve.

<a id="return-value"></a>

## Return Value

A promise that resolves with a [DirectionsResponse](../directionsresponse.md) on success, or rejects with an `Error` on failure.

<a id="Discussion"></a>

## Discussion

Call the [route()](route.md) method to get directions.

The resolved [DirectionsResponse](../directionsresponse.md) object has the following properties:

- [request](../directionsresponse/request.md) is the request object associated with this response.
- [routes](../directionsresponse/routes.md) contains an array of up to three [Route](../route.md) objects returned by the server.

Pass an `AbortSignal` from an `AbortController` to the [signal](../directionsrequest/signal.md) option to allow the controller to cancel a pending request. When the controller aborts, the promise it returns rejects with a `DOMException` whose `name` is `"AbortError"`.

## See Also

### Getting directions

- [DirectionsRequest](../directionsrequest.md): The requested start and end points for a route, as well as the planned mode of transportation.
- [DirectionsResponse](../directionsresponse.md): The directions and estimated travel time for a route.
- [Route](../route.md): Information about a route, including step-by-step instructions, distance, and estimated travel time.
- [RouteStep](../routestep.md): A single step of the route between the requested start and end points.
