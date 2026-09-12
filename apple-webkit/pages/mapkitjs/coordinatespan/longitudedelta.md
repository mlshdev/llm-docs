> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/coordinatespan/longitudedelta](https://developer.apple.com/documentation/mapkitjs/coordinatespan/longitudedelta)

# longitudeDelta

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The amount of east-to-west distance (in degrees) to display for the map region.

## Declaration

```
longitudeDelta: number;
```

<a id="Discussion"></a>

## Discussion

The number of kilometers spanned by a longitude range varies based on the current latitude. For example, one degree of longitude spans a distance of approximately 111 kilometers (69 miles) at the equator but shrinks to 0 kilometers at the poles.

## See Also

### Defining the span

- [latitudeDelta](latitudedelta.md): The amount of north-to-south distance (in degrees) to display for the map region.
