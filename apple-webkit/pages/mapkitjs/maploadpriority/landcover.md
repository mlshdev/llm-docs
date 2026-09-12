> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/maploadpriority/landcover](https://developer.apple.com/documentation/mapkitjs/maploadpriority/landcover)

# LandCover

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration Case  
**Availability:** MapKit JS 5.73+

Prioritizes loading of the map land cover and borders, without POIs or labels.

## Declaration

```
readonly LandCover: "LandCover";
```

<a id="Discussion"></a>

## Discussion

This value is the default when you don’t provide a prioritization.

## See Also

### Prioritizations

- [PointsOfInterest](pointsofinterest.md): Prioritizes loading of the full standard map, with rendered POIs.
- [None](none.md): Signifies no preference for what to prioritize when loading the map.
