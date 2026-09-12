> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/route/steps](https://developer.apple.com/documentation/mapkitjs/route/steps)

# steps

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

An array of steps that compose the overall route.

## Declaration

```
steps: RouteStep[];
```

<a id="Discussion"></a>

## Discussion

The array contains one or more [RouteStep](../routestep.md) objects representing distinct portions of the route. Each step corresponds to a single direction to follow along the route.

## See Also

### Route details

- [name](name.md): The name assigned to the route.
- [distance](distance.md): The route distance, in meters.
- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [transportType](transporttype.md): The overall route transport type.
- [hasTolls](hastolls.md): A Boolean value that indicates whether a route has tolls.
