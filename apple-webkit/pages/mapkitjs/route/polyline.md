> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/route/polyline](https://developer.apple.com/documentation/mapkitjs/route/polyline)

# polyline

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.4+

An instance of a polyline overlay that represents the path of a route.

## Declaration

```
get polyline(): PolylineOverlay;
```

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

You can add the value of the `polyline` property directly to the map.

```javascript
const route = directions.route({
    origin: new mapkit.Coordinate(37.616934, -122.383790),
    destination: new mapkit.Coordinate(37.3349, -122.0090201)
}, function(error, data) {

    const polylines = data.routes.map(function(route) {
        return route.polyline;
    });

    map.showItems(polylines);

});
```
