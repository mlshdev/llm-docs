> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/search/region](https://developer.apple.com/documentation/mapkitjs/search/region)

# region

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A map region that provides a hint about the geographic area to search.

## Declaration

```
get region(): CoordinateRegion | null;
set region(value: CoordinateRegionData | null);
```

<a id="Discussion"></a>

## Discussion

This property specifies a region of a map in which to search. In a map application, this is typically the region the map displays.

```javascript
{ region: map.region }
```
