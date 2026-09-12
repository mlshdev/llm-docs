> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/route](https://developer.apple.com/documentation/mapkitjs/route)

# Route

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

Information about a route, including step-by-step instructions, distance, and estimated travel time.

## Declaration

```
class Route
```

<a id="overview"></a>

## Overview

A [Route](route.md) object encapsulates the information for a route that the server returns, including geometry that you can use to draw a path and step-by-step text instructions. You don’t instantiate [Route](route.md) objects directly; MapKit JS returns them as part of the [DirectionsResponse](directionsresponse.md).

## Topics

### Route geometry

- [polyline](route/polyline.md): An instance of a polyline overlay that represents the path of a route.

### Deprecated

- [path](route/path.md): Deprecated. An array of coordinate objects representing the path of the route.

### Route details

- [steps](route/steps.md): An array of steps that compose the overall route.
- [name](route/name.md): The name assigned to the route.
- [distance](route/distance.md): The route distance, in meters.
- [expectedTravelTime](route/expectedtraveltime.md): The expected travel time, in seconds.
- [transportType](route/transporttype.md): The overall route transport type.
- [hasTolls](route/hastolls.md): A Boolean value that indicates whether a route has tolls.

## See Also

### Getting directions

- [route()](directions/route.md): Retrieves directions and estimated travel time based on the specified start and end points.
- [DirectionsRequest](directionsrequest.md): The requested start and end points for a route, as well as the planned mode of transportation.
- [DirectionsResponse](directionsresponse.md): The directions and estimated travel time for a route.
- [RouteStep](routestep.md): A single step of the route between the requested start and end points.
