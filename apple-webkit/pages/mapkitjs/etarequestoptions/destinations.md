> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/etarequestoptions/destinations](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/destinations)

# destinations

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.46+

An array of coordinates that represent end points for estimated arrival time requests.

## Declaration

```
destinations: CoordinateData[];
```

<a id="Discussion"></a>

## Discussion

A [Coordinate](../coordinate.md) represents each destination in the array. You may get coordinates from [search()](../search/search.md) or [lookup()](../geocoder/lookup.md), which return [Place](../place.md) objects that contain coordinates. You may provide up to 10 destinations in the array.

## See Also

### ETA Request

- [origin](origin.md): The starting point for estimated arrival time requests.
- [departureDate](departuredate.md): The time of departure used in an estimated arrival time request.
- [transportType](transporttype.md): The mode of transportation the server uses when estimating arrival times.
- [signal](signal.md): A signal object allowing you to cancel the request.
