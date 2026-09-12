> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapstyle/imagery](https://developer.apple.com/documentation/mapkit/mapstyle/imagery)

# imagery

**Framework:** MapKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A map style that represents a satellite image of the area the map displays.

## Declaration

```swift
static var imagery: MapStyle { get }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  In watchOS, depending on rendering calculations, MapKit may render the map using the Standard map style rather than requested Hybrid or Imagery styles.

## See Also

### Map styles

- [hybrid](hybrid.md): A map style that represents a satellite image of the area, including the paths of roads with their names layered on top.
- [standard](standard.md): A map style that represents the default map presentation, which is a street map that shows the position of all roads and some road names, depending upon the zoom level of the map.
