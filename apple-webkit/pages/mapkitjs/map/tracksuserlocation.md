> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/tracksuserlocation](https://developer.apple.com/documentation/mapkitjs/map/tracksuserlocation)

# tracksUserLocation

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A Boolean value that determines whether to center the map on the user’s location.

## Declaration

```
get tracksUserLocation(): boolean;
set tracksUserLocation(value: boolean);
```

<a id="Discussion"></a>

## Discussion

Set this property to `true` to center the map on the user location annotation. Enabling this property automatically enables [showsUserLocation](showsuserlocation.md).

Set this property to `false` to stop centering the map on the current location.

A programmatic or user-initiated change to the map’s region that moves the user location annotation off the center automatically disables [tracksUserLocation](tracksuserlocation.md).

## See Also

### Displaying the user’s location

- [showsUserLocation](showsuserlocation.md): A Boolean value that determines whether to show the user’s location on the map.
- [userLocationAnnotation](userlocationannotation.md): An annotation that indicates the user’s location on the map.
