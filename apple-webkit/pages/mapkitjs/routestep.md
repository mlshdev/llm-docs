> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/routestep](https://developer.apple.com/documentation/mapkitjs/routestep)

# RouteStep

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

A single step of the route between the requested start and end points.

## Declaration

```
class RouteStep
```

<a id="overview"></a>

## Overview

A [RouteStep](routestep.md) encapsulates information for an individual segment of a route. A [Route](route.md) object’s [steps](route/steps.md) property is an array of [RouteStep](routestep.md) objects. You don’t instantiate [RouteStep](routestep.md) objects directly; MapKit JS returns them as part of the [DirectionsResponse](directionsresponse.md).

## Topics

### Route step geometry

- [path](routestep/path.md): An array of coordinate objects representing the path of the route segment.

### Route step details

- [instructions](routestep/instructions.md): The written instructions for following the path that the step represents.
- [distance](routestep/distance.md): The step distance, in meters.
- [transportType](routestep/transporttype.md): The transport type of the step.

## See Also

### Getting directions

- [route()](directions/route.md): Retrieves directions and estimated travel time based on the specified start and end points.
- [DirectionsRequest](directionsrequest.md): The requested start and end points for a route, as well as the planned mode of transportation.
- [DirectionsResponse](directionsresponse.md): The directions and estimated travel time for a route.
- [Route](route.md): Information about a route, including step-by-step instructions, distance, and estimated travel time.
