> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/maploadpriority/none

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
