> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectmapelement/annotations](https://developer.apple.com/documentation/photosui/phprojectmapelement/annotations)

# annotations (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

An array of optional annotations attached to the map.

## Declaration

```swift
var annotations: [any MKAnnotation] { get }
```

## See Also

### Pinpointing the Map

- [mapType](maptype.md): The type of map in the project.
- [centerCoordinate](centercoordinate.md): The coordinates of the center of the map.
- [heading](heading.md): The heading of the map.
- [pitch](pitch.md): The pitch of the map.
- [altitude](altitude.md): The altitude of the map.

# annotations (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

An array of optional annotations attached to the map.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<id<MKAnnotation>> * annotations;
```

## See Also

### Pinpointing the Map

- [mapType](maptype.md): The type of map in the project.
- [centerCoordinate](centercoordinate.md): The coordinates of the center of the map.
- [heading](heading.md): The heading of the map.
- [pitch](pitch.md): The pitch of the map.
- [altitude](altitude.md): The altitude of the map.
