> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/insertoverlay(_:below:)](https://developer.apple.com/documentation/mapkit/mkmapview/insertoverlay(_:below:))

# insertOverlay(\_:below:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Inserts one overlay object below another.

## Declaration

```swift
func insertOverlay(_ overlay: any MKOverlay, below sibling: any MKOverlay)
```

## Parameters

- `overlay`: The overlay object to insert.
- `sibling`: An existing object in the [overlays](overlays.md) array. This object needs to exist in the array and can’t be `nil`.

<a id="Discussion"></a>

## Discussion

This method inserts the overlay into the [MKOverlayLevel.aboveLabels](../mkoverlaylevel/abovelabels.md) level and positions it relative to the specified sibling. When displaying it, the map view displays the overlay’s contents beneath that of its sibling. If the sibling isn’t in the same map level, this method appends the overlay to the end of the list of overlays at the indicated level.

## See Also

### Adding and inserting overlays

- [addOverlay(\_:level:)](addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.
- [addOverlays(\_:level:)](addoverlays%28__level_%29.md): Adds an array of overlay objects to the map at the specified level.
- [addOverlay(\_:)](addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays(\_:)](addoverlays%28__%29.md): Adds an array of overlay objects to the map.
- [insertOverlay(\_:at:level:)](insertoverlay%28__at_level_%29.md): Inserts an overlay object into the level at the specified index.
- [insertOverlay(\_:at:)](insertoverlay%28__at_%29.md): Inserts an overlay object into the list associated with the map.
- [insertOverlay(\_:above:)](insertoverlay%28__above_%29.md): Inserts one overlay object above another.
- [exchangeOverlay(\_:with:)](exchangeoverlay%28__with_%29.md): Exchanges the positions of two overlay objects.
- [exchangeOverlay(at:withOverlayAt:)](exchangeoverlay%28at_withoverlayat_%29.md): Exchanges the position of two overlay objects at the specified index.

# insertOverlay:belowOverlay: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Inserts one overlay object below another.

## Declaration

```objectivec
- (void) insertOverlay:(id<MKOverlay>) overlay belowOverlay:(id<MKOverlay>) sibling;
```

## Parameters

- `overlay`: The overlay object to insert.
- `sibling`: An existing object in the [overlays](overlays.md) array. This object needs to exist in the array and can’t be `nil`.

<a id="Discussion"></a>

## Discussion

This method inserts the overlay into the [MKOverlayLevelAboveLabels](../mkoverlaylevel/abovelabels.md) level and positions it relative to the specified sibling. When displaying it, the map view displays the overlay’s contents beneath that of its sibling. If the sibling isn’t in the same map level, this method appends the overlay to the end of the list of overlays at the indicated level.

## See Also

### Adding and inserting overlays

- [addOverlay:level:](addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.
- [addOverlays:level:](addoverlays%28__level_%29.md): Adds an array of overlay objects to the map at the specified level.
- [addOverlay:](addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays:](addoverlays%28__%29.md): Adds an array of overlay objects to the map.
- [insertOverlay:atIndex:level:](insertoverlay%28__at_level_%29.md): Inserts an overlay object into the level at the specified index.
- [insertOverlay:atIndex:](insertoverlay%28__at_%29.md): Inserts an overlay object into the list associated with the map.
- [insertOverlay:aboveOverlay:](insertoverlay%28__above_%29.md): Inserts one overlay object above another.
- [exchangeOverlay:withOverlay:](exchangeoverlay%28__with_%29.md): Exchanges the positions of two overlay objects.
- [exchangeOverlayAtIndex:withOverlayAtIndex:](exchangeoverlay%28at_withoverlayat_%29.md): Exchanges the position of two overlay objects at the specified index.
