> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/directionsresponse](https://developer.apple.com/documentation/mapkitjs/directionsresponse)

# DirectionsResponse

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface  
**Availability:** MapKit JS 5.0+

The directions and estimated travel time for a route.

## Declaration

```
interface DirectionsResponse
```

## Mentioned In

- [MapKit JS 5](mapkit-js-5.md)

<a id="overview"></a>

## Overview

To get directions, create an instance of [Directions](directions.md) and call the [route()](directions/route.md) method.

The [route()](directions/route.md) method returns a promise that resolves with a `DirectionsResponse` on success.

## Topics

### Directions response

- [routes](directionsresponse/routes.md): An array of route objects.
- [origin](directionsresponse/origin.md): An optional starting point for routing directions.
- [destination](directionsresponse/destination.md): An optional end point for routing directions.

### Deprecated

- [request](directionsresponse/request.md): Deprecated. The request object associated with the direction’s response.

## See Also

### Getting directions

- [route()](directions/route.md): Retrieves directions and estimated travel time based on the specified start and end points.
- [DirectionsRequest](directionsrequest.md): The requested start and end points for a route, as well as the planned mode of transportation.
- [Route](route.md): Information about a route, including step-by-step instructions, distance, and estimated travel time.
- [RouteStep](routestep.md): A single step of the route between the requested start and end points.
