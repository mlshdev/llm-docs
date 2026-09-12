> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/etaresult/statictraveltime](https://developer.apple.com/documentation/mapkitjs/etaresult/statictraveltime)

# staticTravelTime

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.46+

The estimated travel time in seconds, excluding delays for traffic.

## Declaration

```
staticTravelTime: number | null;
```

<a id="Discussion"></a>

## Discussion

This static travel time reflects the time it takes to arrive at the destination under ideal conditions.

## See Also

### Estimated Arrival Times

- [transportType](transporttype.md): The mode of transportation used to estimate the arrival time.
- [destination](destination.md): The coordinates that represent the endpoint for estimated arrival time requests.
- [distance](distance.md): The route distance in meters.
- [expectedTravelTime](expectedtraveltime.md): The estimated travel time in seconds, including delays due to traffic.
