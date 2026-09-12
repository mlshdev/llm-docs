> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/exchangeoverlay(_:with:)](https://developer.apple.com/documentation/mapkit/mkmapview/exchangeoverlay(_:with:))

# exchangeOverlay(\_:with:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Exchanges the positions of two overlay objects.

## Declaration

```swift
func exchangeOverlay(_ overlay1: any MKOverlay, with overlay2: any MKOverlay)
```

## Parameters

- `overlay1`: The first overlay object.
- `overlay2`: The second overlay object.

<a id="Discussion"></a>

## Discussion

If the overlays are in the same map level, they exchange positions within that level’s array of overlay objects. If they’re in different map levels, the two objects also swap levels. Swapping the position of the overlays affects their visibility in the map view.

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
- [exchangeOverlay(at:withOverlayAt:)](exchangeoverlay%28at_withoverlayat_%29.md): Exchanges the position of two overlay objects at the specified index.

# exchangeOverlay:withOverlay: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Exchanges the positions of two overlay objects.

## Declaration

```objectivec
- (void) exchangeOverlay:(id<MKOverlay>) overlay1 withOverlay:(id<MKOverlay>) overlay2;
```

## Parameters

- `overlay1`: The first overlay object.
- `overlay2`: The second overlay object.

<a id="Discussion"></a>

## Discussion

If the overlays are in the same map level, they exchange positions within that level’s array of overlay objects. If they’re in different map levels, the two objects also swap levels. Swapping the position of the overlays affects their visibility in the map view.

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
- [exchangeOverlayAtIndex:withOverlayAtIndex:](exchangeoverlay%28at_withoverlayat_%29.md): Exchanges the position of two overlay objects at the specified index.
