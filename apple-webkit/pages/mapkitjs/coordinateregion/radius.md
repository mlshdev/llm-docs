> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/coordinateregion/radius](https://developer.apple.com/documentation/mapkitjs/coordinateregion/radius)

# radius

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.45+

The distance provided in meters or the longest distance derived from the center point to the region’s bounding box.

## Declaration

```
get radius(): number;
```

<a id="Discussion"></a>

## Discussion

When fetching points of interest with a region, you may compare this value with [MaxRadius](../pointsofinterestsearch/maxradius.md) to determine if this region is larger than the maximum available radius for a points-of-interest search.
