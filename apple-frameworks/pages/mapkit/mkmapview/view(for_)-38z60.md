> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/view(for:)-38z60](https://developer.apple.com/documentation/mapkit/mkmapview/view(for:)-38z60)

# view(for:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the view associated with the overlay object, if any.

> Use the [renderer(for:)](renderer%28for_%29.md) method instead.

## Declaration

```swift
func view(for overlay: any MKOverlay) -> MKOverlayView
```

## Parameters

- `overlay`: The overlay object whose view you want.

<a id="return-value"></a>

## Return Value

The view associated with the overlay object or `nil` if the overlay is not onscreen.

## See Also

### Methods

- [mapView(\_:didAddOverlayViews:)](../mkmapviewdelegate/mapview%28__didaddoverlayviews_%29.md): Deprecated. Tells the delegate when the map adds one or more overlay views to the map.
- [mapView(\_:viewFor:)](../mkmapviewdelegate/mapview%28__viewfor_%29-6j267.md): Deprecated. Asks the delegate for the overlay view to use when displaying the specified overlay object.

# viewForOverlay: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the view associated with the overlay object, if any.

> Use the [rendererForOverlay:](renderer%28for_%29.md) method instead.

## Declaration

```objectivec
- (MKOverlayView *) viewForOverlay:(id<MKOverlay>) overlay;
```

## Parameters

- `overlay`: The overlay object whose view you want.

<a id="return-value"></a>

## Return Value

The view associated with the overlay object or `nil` if the overlay is not onscreen.

## See Also

### Methods

- [mapView:didAddOverlayViews:](../mkmapviewdelegate/mapview%28__didaddoverlayviews_%29.md): Deprecated. Tells the delegate when the map adds one or more overlay views to the map.
- [mapView:viewForOverlay:](../mkmapviewdelegate/mapview%28__viewfor_%29-6j267.md): Deprecated. Asks the delegate for the overlay view to use when displaying the specified overlay object.
