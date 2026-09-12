> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/exchangeoverlay(at:withoverlayat:)](https://developer.apple.com/documentation/mapkit/mkmapview/exchangeoverlay(at:withoverlayat:))

# exchangeOverlay(at:withOverlayAt:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Exchanges the position of two overlay objects at the specified index.

## Declaration

```swift
func exchangeOverlay(at index1: Int, withOverlayAt index2: Int)
```

## Parameters

- `index1`: The index of an overlay in the [MKOverlayLevel.aboveLabels](../mkoverlaylevel/abovelabels.md) map level.
- `index2`: The index of another overlay in the [MKOverlayLevel.aboveLabels](../mkoverlaylevel/abovelabels.md) map level.

<a id="Discussion"></a>

## Discussion

If you need to exchange overlays in other map levels, use the [exchangeOverlay(\_:with:)](exchangeoverlay%28__with_%29.md) method.

## See Also

### Adding and inserting overlays

- [addOverlay(\_:level:)](addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.
- [addOverlays(\_:level:)](addoverlays%28__level_%29.md): Adds an array of overlay objects to the map at the specified level.
- [addOverlay(\_:)](addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays(\_:)](addoverlays%28__%29.md): Adds an array of overlay objects to the map.
- [insertOverlay(\_:at:level:)](insertoverlay%28__at_level_%29.md): Inserts an overlay object into the level at the specified index.
- [insertOverlay(\_:at:)](insertoverlay%28__at_%29.md): Inserts an overlay object into the list associated with the map.
- [insertOverlay(\_:above:)](insertoverlay%28__above_%29.md): Inserts one overlay object above another.
- [insertOverlay(\_:below:)](insertoverlay%28__below_%29.md): Inserts one overlay object below another.
- [exchangeOverlay(\_:with:)](exchangeoverlay%28__with_%29.md): Exchanges the positions of two overlay objects.

# exchangeOverlayAtIndex:withOverlayAtIndex: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Exchanges the position of two overlay objects at the specified index.

## Declaration

```objectivec
- (void) exchangeOverlayAtIndex:(NSUInteger) index1 withOverlayAtIndex:(NSUInteger) index2;
```

## Parameters

- `index1`: The index of an overlay in the [MKOverlayLevelAboveLabels](../mkoverlaylevel/abovelabels.md) map level.
- `index2`: The index of another overlay in the [MKOverlayLevelAboveLabels](../mkoverlaylevel/abovelabels.md) map level.

<a id="Discussion"></a>

## Discussion

If you need to exchange overlays in other map levels, use the [exchangeOverlay:withOverlay:](exchangeoverlay%28__with_%29.md) method.

## See Also

### Adding and inserting overlays

- [addOverlay:level:](addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.
- [addOverlays:level:](addoverlays%28__level_%29.md): Adds an array of overlay objects to the map at the specified level.
- [addOverlay:](addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays:](addoverlays%28__%29.md): Adds an array of overlay objects to the map.
- [insertOverlay:atIndex:level:](insertoverlay%28__at_level_%29.md): Inserts an overlay object into the level at the specified index.
- [insertOverlay:atIndex:](insertoverlay%28__at_%29.md): Inserts an overlay object into the list associated with the map.
- [insertOverlay:aboveOverlay:](insertoverlay%28__above_%29.md): Inserts one overlay object above another.
- [insertOverlay:belowOverlay:](insertoverlay%28__below_%29.md): Inserts one overlay object below another.
- [exchangeOverlay:withOverlay:](exchangeoverlay%28__with_%29.md): Exchanges the positions of two overlay objects.
