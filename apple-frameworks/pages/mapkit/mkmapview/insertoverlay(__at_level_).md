> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/insertoverlay(_:at:level:)](https://developer.apple.com/documentation/mapkit/mkmapview/insertoverlay(_:at:level:))

# insertOverlay(\_:at:level:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Inserts an overlay object into the level at the specified index.

## Declaration

```swift
func insertOverlay(_ overlay: any MKOverlay, at index: Int, level: MKOverlayLevel)
```

## Parameters

- `overlay`: The overlay object to insert.
- `index`: The index at which to insert the overlay object. If this value is greater than the number of objects in the [overlays](overlays.md) property, this method appends the object to the end of the array.
- `level`: The map level at which to place the overlay. For a list of possible values for this parameter, see [MKOverlayLevel](../mkoverlaylevel.md).

<a id="Discussion"></a>

## Discussion

Inserting an overlay at a specific level places that overlay’s visual representation in front of or behind other map content such as map labels and point-of-interest icons.

## See Also

### Adding and inserting overlays

- [addOverlay(\_:level:)](addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.
- [addOverlays(\_:level:)](addoverlays%28__level_%29.md): Adds an array of overlay objects to the map at the specified level.
- [addOverlay(\_:)](addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays(\_:)](addoverlays%28__%29.md): Adds an array of overlay objects to the map.
- [insertOverlay(\_:at:)](insertoverlay%28__at_%29.md): Inserts an overlay object into the list associated with the map.
- [insertOverlay(\_:above:)](insertoverlay%28__above_%29.md): Inserts one overlay object above another.
- [insertOverlay(\_:below:)](insertoverlay%28__below_%29.md): Inserts one overlay object below another.
- [exchangeOverlay(\_:with:)](exchangeoverlay%28__with_%29.md): Exchanges the positions of two overlay objects.
- [exchangeOverlay(at:withOverlayAt:)](exchangeoverlay%28at_withoverlayat_%29.md): Exchanges the position of two overlay objects at the specified index.

# insertOverlay:atIndex:level: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Inserts an overlay object into the level at the specified index.

## Declaration

```objectivec
- (void) insertOverlay:(id<MKOverlay>) overlay atIndex:(NSUInteger) index level:(MKOverlayLevel) level;
```

## Parameters

- `overlay`: The overlay object to insert.
- `index`: The index at which to insert the overlay object. If this value is greater than the number of objects in the [overlays](overlays.md) property, this method appends the object to the end of the array.
- `level`: The map level at which to place the overlay. For a list of possible values for this parameter, see [MKOverlayLevel](../mkoverlaylevel.md).

<a id="Discussion"></a>

## Discussion

Inserting an overlay at a specific level places that overlay’s visual representation in front of or behind other map content such as map labels and point-of-interest icons.

## See Also

### Adding and inserting overlays

- [addOverlay:level:](addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.
- [addOverlays:level:](addoverlays%28__level_%29.md): Adds an array of overlay objects to the map at the specified level.
- [addOverlay:](addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays:](addoverlays%28__%29.md): Adds an array of overlay objects to the map.
- [insertOverlay:atIndex:](insertoverlay%28__at_%29.md): Inserts an overlay object into the list associated with the map.
- [insertOverlay:aboveOverlay:](insertoverlay%28__above_%29.md): Inserts one overlay object above another.
- [insertOverlay:belowOverlay:](insertoverlay%28__below_%29.md): Inserts one overlay object below another.
- [exchangeOverlay:withOverlay:](exchangeoverlay%28__with_%29.md): Exchanges the positions of two overlay objects.
- [exchangeOverlayAtIndex:withOverlayAtIndex:](exchangeoverlay%28at_withoverlayat_%29.md): Exchanges the position of two overlay objects at the specified index.
