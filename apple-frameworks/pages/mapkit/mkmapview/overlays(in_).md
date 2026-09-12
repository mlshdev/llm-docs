> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/overlays(in:)](https://developer.apple.com/documentation/mapkit/mkmapview/overlays(in:))

# overlays(in:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns overlay objects in the specified level of the map.

## Declaration

```swift
func overlays(in level: MKOverlayLevel) -> [any MKOverlay]
```

## Parameters

- `level`: The map level whose overlays you want. For a list of possible values for this parameter, see [MKOverlayLevel](../mkoverlaylevel.md).

<a id="return-value"></a>

## Return Value

An array of objects conforming to the [MKOverlay](../mkoverlay.md) protocol that display in the specified map level. If there are no overlays at the specified level, this method returns an empty array.

<a id="Discussion"></a>

## Discussion

You can use this method to get all of the overlays assigned to a specific map level, which might be a subset of the complete set of overlay objects. For overlapping overlay objects, the order of objects in the array represents their visual order when displayed on the map, with objects in the beginning of the array located behind those at later indexes.

## See Also

### Related Documentation

- [addOverlays(\_:level:)](addoverlays%28__level_%29.md): Adds an array of overlay objects to the map at the specified level.
- [addOverlay(\_:level:)](addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.

### Accessing overlays

- [overlays](overlays.md): The overlay objects associated with the map view.
- [renderer(for:)](renderer%28for_%29.md): Returns the renderer object for drawing the contents of the specified overlay object.
- [MKOverlayLevel](../mkoverlaylevel.md): Constants that indicate the position of overlays relative to other content.
- [view(for:)](view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.

# overlaysInLevel: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns overlay objects in the specified level of the map.

## Declaration

```objectivec
- (NSArray<id<MKOverlay>> *) overlaysInLevel:(MKOverlayLevel) level;
```

## Parameters

- `level`: The map level whose overlays you want. For a list of possible values for this parameter, see [MKOverlayLevel](../mkoverlaylevel.md).

<a id="return-value"></a>

## Return Value

An array of objects conforming to the [MKOverlay](../mkoverlay.md) protocol that display in the specified map level. If there are no overlays at the specified level, this method returns an empty array.

<a id="Discussion"></a>

## Discussion

You can use this method to get all of the overlays assigned to a specific map level, which might be a subset of the complete set of overlay objects. For overlapping overlay objects, the order of objects in the array represents their visual order when displayed on the map, with objects in the beginning of the array located behind those at later indexes.

## See Also

### Related Documentation

- [addOverlays:level:](addoverlays%28__level_%29.md): Adds an array of overlay objects to the map at the specified level.
- [addOverlay:level:](addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.

### Accessing overlays

- [overlays](overlays.md): The overlay objects associated with the map view.
- [rendererForOverlay:](renderer%28for_%29.md): Returns the renderer object for drawing the contents of the specified overlay object.
- [MKOverlayLevel](../mkoverlaylevel.md): Constants that indicate the position of overlays relative to other content.
- [viewForOverlay:](view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.
