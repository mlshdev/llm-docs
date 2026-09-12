> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/directionsrequest/avoidtolls](https://developer.apple.com/documentation/mapkitjs/directionsrequest/avoidtolls)

# avoidTolls

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.72+

A Boolean value that prioritizes routes to avoid tolls.

## Declaration

```
avoidTolls?: boolean;
```

<a id="Discussion"></a>

## Discussion

Set this value to `true` to prioritize routes that don’t have any tolls. The returned routes may contain tolls if no reasonable toll-free routes exist, even if `avoidTolls` is `true`. To verify toll assumptions, check [hasTolls](../route/hastolls.md). The default is `false`.

## See Also

### Directions request

- [origin](origin.md): The starting point for routing directions.
- [destination](destination.md): The end point for routing directions.
- [arrivalDate](arrivaldate.md): The arrival date for the trip.
- [departureDate](departuredate.md): The departure date for the trip.
- [requestsAlternateRoutes](requestsalternateroutes.md): A Boolean value that indicates whether the server returns multiple routes when they’re available.
- [transportType](transporttype.md): The mode of transportation the directions apply to.
- [signal](signal.md): A signal object allowing you to cancel the request.
