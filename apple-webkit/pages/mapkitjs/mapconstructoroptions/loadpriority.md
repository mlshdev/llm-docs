> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapconstructoroptions/loadpriority](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/loadpriority)

# loadPriority

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.73+

A value MapKit JS uses for prioritizing the visibility of specific map features before the underlaying map tiles.

## Declaration

```
loadPriority?: MapLoadPriority;
```

<a id="Discussion"></a>

## Discussion

Use this property to optimize the map-loading experience and prioritize the visibility of specific map features. The available prioritization options are:

- [LandCover](../maploadpriority/landcover.md) — Prioritizes loading of the map land cover and borders, without points of interest (POIs) or labels. This is the default.
- [PointsOfInterest](../maploadpriority/pointsofinterest.md) — Prioritizes loading of the full standard map, with rendering of POIs.
- [None](../maploadpriority/none.md) — Signifies no preferences over what to prioritize when loading the map.

## See Also

### Setting the loading priority

- [MapLoadPriority](../maploadpriority.md): Constants that prioritize the visibility of specific map features during map loading.
