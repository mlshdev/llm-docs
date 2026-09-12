> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/removeoverlay(_:)](https://developer.apple.com/documentation/mapkit/mkmapview/removeoverlay(_:))

# removeOverlay(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Removes a single overlay object from the map.

## Declaration

```swift
func removeOverlay(_ overlay: any MKOverlay)
```

## Parameters

- `overlay`: The overlay object to remove.

<a id="Discussion"></a>

## Discussion

This method removes the overlay regardless of the level that it’s in. Removing an overlay also removes its corresponding renderer, if one is in use. If the specified overlay isn’t associated with the map view, this method does nothing.

## See Also

### Related Documentation

- [addOverlay(\_:)](addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays(\_:)](addoverlays%28__%29.md): Adds an array of overlay objects to the map.

### Removing overlays

- [removeOverlays(\_:)](removeoverlays%28__%29.md): Removes one or more overlay objects from the map.

# removeOverlay: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Removes a single overlay object from the map.

## Declaration

```objectivec
- (void) removeOverlay:(id<MKOverlay>) overlay;
```

## Parameters

- `overlay`: The overlay object to remove.

<a id="Discussion"></a>

## Discussion

This method removes the overlay regardless of the level that it’s in. Removing an overlay also removes its corresponding renderer, if one is in use. If the specified overlay isn’t associated with the map view, this method does nothing.

## See Also

### Related Documentation

- [addOverlay:](addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays:](addoverlays%28__%29.md): Adds an array of overlay objects to the map.

### Removing overlays

- [removeOverlays:](removeoverlays%28__%29.md): Removes one or more overlay objects from the map.
