> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/route/transporttype](https://developer.apple.com/documentation/mapkitjs/route/transporttype)

# transportType

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The overall route transport type.

## Declaration

```
transportType: TransportType | null;
```

<a id="Discussion"></a>

## Discussion

This property reflects the primary transport type used for the route. Individual steps of the route might use different transport types.

## See Also

### Route details

- [steps](steps.md): An array of steps that compose the overall route.
- [name](name.md): The name assigned to the route.
- [distance](distance.md): The route distance, in meters.
- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [hasTolls](hastolls.md): A Boolean value that indicates whether a route has tolls.
