> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/maploadpriority/none](https://developer.apple.com/documentation/mapkitjs/maploadpriority/none)

# None

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration Case  
**Availability:** MapKit JS 5.73+

Signifies no preference for what to prioritize when loading the map.

## Declaration

```
readonly None: null;
```

<a id="Discussion"></a>

## Discussion

When you use this value, MapKit JS applies its default prioritization, [PointsOfInterest](pointsofinterest.md).

## See Also

### Prioritizations

- [LandCover](landcover.md): Prioritizes loading of the map land cover and borders, without POIs or labels.
- [PointsOfInterest](pointsofinterest.md): Prioritizes loading of the full standard map, with rendered POIs.
