> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/route/distance

# distance

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The route distance, in meters.

## Declaration

```
distance: number;
```

<a id="Discussion"></a>

## Discussion

This property reflects the distance that the user covers while traversing the path of the route. It isn’t a straight line distance between the [origin](../directionsrequest/origin.md) and [destination](../directionsrequest/destination.md).

## See Also

### Route details

- [steps](steps.md): An array of steps that compose the overall route.
- [name](name.md): The name assigned to the route.
- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [transportType](transporttype.md): The overall route transport type.
- [hasTolls](hastolls.md): A Boolean value that indicates whether a route has tolls.
