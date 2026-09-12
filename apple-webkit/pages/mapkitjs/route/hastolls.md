> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/route/hastolls](https://developer.apple.com/documentation/mapkitjs/route/hastolls)

# hasTolls

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.72+

A Boolean value that indicates whether a route has tolls.

## Declaration

```
hasTolls: boolean | null;
```

<a id="Discussion"></a>

## Discussion

When `true`, this route has tolls. If `false`, this route doesn’t have any tolls. If `null`, the route may or may not have tolls.

## See Also

### Route details

- [steps](steps.md): An array of steps that compose the overall route.
- [name](name.md): The name assigned to the route.
- [distance](distance.md): The route distance, in meters.
- [expectedTravelTime](expectedtraveltime.md): The expected travel time, in seconds.
- [transportType](transporttype.md): The overall route transport type.
