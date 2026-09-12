> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/etaresult/expectedtraveltime](https://developer.apple.com/documentation/mapkitjs/etaresult/expectedtraveltime)

# expectedTravelTime

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.46+

The estimated travel time in seconds, including delays due to traffic.

## Declaration

```
expectedTravelTime: number;
```

<a id="Discussion"></a>

## Discussion

The [expectedTravelTime](expectedtraveltime.md) reflects the estimated time, in seconds, it takes to complete the route including traffic delay estimates.

## See Also

### Estimated Arrival Times

- [transportType](transporttype.md): The mode of transportation used to estimate the arrival time.
- [destination](destination.md): The coordinates that represent the endpoint for estimated arrival time requests.
- [distance](distance.md): The route distance in meters.
- [staticTravelTime](statictraveltime.md): The estimated travel time in seconds, excluding delays for traffic.
