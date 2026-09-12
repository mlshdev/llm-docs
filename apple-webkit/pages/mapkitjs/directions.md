> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/directions](https://developer.apple.com/documentation/mapkitjs/directions)

# Directions

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

An object that provides directions and estimated travel time based on the options you provide.

## Declaration

```
class Directions extends Service
```

## Mentioned In

- [MapKit JS 5](mapkit-js-5.md)

## Topics

### Creating a directions object

- [Directions()](directions/directionsconstructor.md): Creates a directions object with options you provide.
- [DirectionsConstructorOptions](directionsconstructoroptions.md): Options that you may provide when creating a directions object.

### Getting estimated arrival times

- [eta()](directions/eta.md): Retrieves estimated arrival times to up to 10 destinations from a single starting point.
- [EtaRequestOptions](etarequestoptions.md): The options you may provide for requesting estimated arrival times.
- [EtaResponse](etaresponse.md): The estimated arrival times for a set of destinations.
- [EtaResult](etaresult.md): The mode of transportation, distance, and travel time estimates for a single destination.

### Getting directions

- [route()](directions/route.md): Retrieves directions and estimated travel time based on the specified start and end points.
- [DirectionsRequest](directionsrequest.md): The requested start and end points for a route, as well as the planned mode of transportation.
- [DirectionsResponse](directionsresponse.md): The directions and estimated travel time for a route.
- [Route](route.md): Information about a route, including step-by-step instructions, distance, and estimated travel time.
- [RouteStep](routestep.md): A single step of the route between the requested start and end points.

### Canceling a directions request

- [cancel()](service/cancel.md): Deprecated. Cancels a request using the provided request promise.

### Deprecated

- [route()](directions/route1.md): Deprecated. Retrieves directions and estimated travel time based on the specified start and end points.
- [eta()](directions/eta1.md): Deprecated. Retrieves estimated arrival times to up to 10 destinations from a single starting point.
- [Transport](directions/transport.md): Deprecated. A static property that refers to an object that describes the available transport type values.

## Relationships

### Inherits From

- [Service](service.md)
