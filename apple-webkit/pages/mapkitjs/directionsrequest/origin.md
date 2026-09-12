> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/directionsrequest/origin](https://developer.apple.com/documentation/mapkitjs/directionsrequest/origin)

# origin

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

The starting point for routing directions.

## Declaration

```
origin: string | CoordinateData | Place;
```

<a id="Discussion"></a>

## Discussion

The `orgin` can be a string that’s an address, a coordinate, or a [Place](../place.md) object.

## See Also

### Directions request

- [destination](destination.md): The end point for routing directions.
- [arrivalDate](arrivaldate.md): The arrival date for the trip.
- [departureDate](departuredate.md): The departure date for the trip.
- [requestsAlternateRoutes](requestsalternateroutes.md): A Boolean value that indicates whether the server returns multiple routes when they’re available.
- [transportType](transporttype.md): The mode of transportation the directions apply to.
- [avoidTolls](avoidtolls.md): A Boolean value that prioritizes routes to avoid tolls.
- [signal](signal.md): A signal object allowing you to cancel the request.
