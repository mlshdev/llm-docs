> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/boundingregion/boundingregionconstructor](https://developer.apple.com/documentation/mapkitjs/boundingregion/boundingregionconstructor)

# new BoundingRegion(northLatitude, eastLongitude, southLatitude, westLongitude)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a rectangular bounding region, which the latitude and longitude coordinates of the rectangle’s northeast and southwest corners define.

## Declaration

```
constructor(
    northLatitude?: number,
    eastLongitude?: number,
    southLatitude?: number,
    westLongitude?: number,
);
```

## Parameters

- `northLatitude`: The north latitude of the bounding region.
- `eastLongitude`: The east longitude of the bounding region.
- `southLatitude`: The south latitude of the bounding region.
- `westLongitude`: The west longitude of the bounding region.

<a id="Discussion"></a>

## Discussion

The example below creates a new bounding region by passing the required longitude and latitude coordinates to the constructor:

```javascript
const region = new mapkit.BoundingRegion(northLatitude, eastLongitude, southLatitude, westLongitude);
```
