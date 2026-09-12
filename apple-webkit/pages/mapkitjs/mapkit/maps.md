> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapkit/maps](https://developer.apple.com/documentation/mapkitjs/mapkit/maps)

# maps

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.7+

An array that automatically adds and removes maps as the framework creates and destroys them.

## Declaration

```
get maps(): Map[];
```

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

You must load the appropriate library before accessing the array, otherwise, the array throws an `Error`.

## See Also

### Maps

- [Map](../map.md): An embeddable interactive map that you add to a webpage.
