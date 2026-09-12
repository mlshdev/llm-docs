> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/etarequestoptions/transporttype](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/transporttype)

# transportType

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.46+

The mode of transportation the server uses when estimating arrival times.

## Declaration

```
transportType?: TransportType;
```

<a id="Discussion"></a>

## Discussion

Use `transportType` to specify the mode of transportation for your [route()](../directions/route.md) and [eta()](../directions/eta.md) requests.

The default value of this property is [Automobile](../transporttype/automobile.md).

## See Also

### ETA Request

- [origin](origin.md): The starting point for estimated arrival time requests.
- [departureDate](departuredate.md): The time of departure used in an estimated arrival time request.
- [destinations](destinations.md): An array of coordinates that represent end points for estimated arrival time requests.
- [signal](signal.md): A signal object allowing you to cancel the request.
