> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/showsuserlocation](https://developer.apple.com/documentation/mapkitjs/map/showsuserlocation)

# showsUserLocation

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A Boolean value that determines whether to show the user’s location on the map.

## Declaration

```
get showsUserLocation(): boolean;
set showsUserLocation(value: boolean);
```

<a id="Discussion"></a>

## Discussion

Set this property to `true` to determine the user’s location and make it visible on the map as a pulsing blue dot annotation.

Set this property to `false` to remove the user location annotation and to stop monitoring the user’s location.

> **Note**

>  This property affects the annotation’s visibility, but it doesn’t update the visible region of the map to put the user’s location in the view.

## See Also

### Displaying the user’s location

- [tracksUserLocation](tracksuserlocation.md): A Boolean value that determines whether to center the map on the user’s location.
- [userLocationAnnotation](userlocationannotation.md): An annotation that indicates the user’s location on the map.
