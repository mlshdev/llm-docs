> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/directionsresponse/origin](https://developer.apple.com/documentation/mapkitjs/directionsresponse/origin)

# origin

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.55+

An optional starting point for routing directions.

## Declaration

```
origin?: Coordinate | Place;
```

<a id="Discussion"></a>

## Discussion

If you use [Coordinate](../coordinate.md) to request directions with [route()](../directions/route.md), MapKit JS returns a `mapkit.Coordinate` in the direction’s response. If you use a string or a [Place](../place.md) to request directions, the property may be `null` or a `Place` instance.

When MapKit JS returns a `Place` instance, it may contain additional details that weren’t included in the original item used to request directions.

## See Also

### Directions response

- [routes](routes.md): An array of route objects.
- [destination](destination.md): An optional end point for routing directions.
