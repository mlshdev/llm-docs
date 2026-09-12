> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/etarequestoptions/origin](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/origin)

# origin

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.46+

The starting point for estimated arrival time requests.

## Declaration

```
origin: CoordinateData;
```

<a id="Discussion"></a>

## Discussion

The [origin](origin.md) can be a [Coordinate](../coordinate.md), a [Place](../place.md) object, or a string that’s an address. Other services, such as Search and Geocoder, return [Place](../place.md) objects.

## See Also

### ETA Request

- [departureDate](departuredate.md): The time of departure used in an estimated arrival time request.
- [destinations](destinations.md): An array of coordinates that represent end points for estimated arrival time requests.
- [transportType](transporttype.md): The mode of transportation the server uses when estimating arrival times.
- [signal](signal.md): A signal object allowing you to cancel the request.
