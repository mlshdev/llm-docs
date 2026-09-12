> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapuserlocationchangeevent/floorlevel](https://developer.apple.com/documentation/mapkitjs/mapuserlocationchangeevent/floorlevel)

# floorLevel

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The current floor the user is on.

## Declaration

```
readonly floorLevel: number | null;
```

<a id="Discussion"></a>

## Discussion

This property returns either a floor number or `null`, which represents the current floor the user is on. `null` may indicate that the browser doesn’t expose this property.
