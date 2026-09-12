> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/removeoverlays(_:)](https://developer.apple.com/documentation/mapkit/mkmapview/removeoverlays(_:))

# removeOverlays(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Removes one or more overlay objects from the map.

## Declaration

```swift
func removeOverlays(_ overlays: [any MKOverlay])
```

## Parameters

- `overlays`: An array of objects, each of which conforms to the [MKOverlay](../mkoverlay.md) protocol.

<a id="Discussion"></a>

## Discussion

This method removes the specified overlays regardless of which level each one is in. Removing an overlay also removes its corresponding renderer, if one is in use. The method ignores an overlay object if it isn’t associated with the map view.

## See Also

### Related Documentation

- [addOverlay(\_:)](addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays(\_:)](addoverlays%28__%29.md): Adds an array of overlay objects to the map.

### Removing overlays

- [removeOverlay(\_:)](removeoverlay%28__%29.md): Removes a single overlay object from the map.

# removeOverlays: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Removes one or more overlay objects from the map.

## Declaration

```objectivec
- (void) removeOverlays:(NSArray<id<MKOverlay>> *) overlays;
```

## Parameters

- `overlays`: An array of objects, each of which conforms to the [MKOverlay](../mkoverlay.md) protocol.

<a id="Discussion"></a>

## Discussion

This method removes the specified overlays regardless of which level each one is in. Removing an overlay also removes its corresponding renderer, if one is in use. The method ignores an overlay object if it isn’t associated with the map view.

## See Also

### Related Documentation

- [addOverlay:](addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays:](addoverlays%28__%29.md): Adds an array of overlay objects to the map.

### Removing overlays

- [removeOverlay:](removeoverlay%28__%29.md): Removes a single overlay object from the map.
