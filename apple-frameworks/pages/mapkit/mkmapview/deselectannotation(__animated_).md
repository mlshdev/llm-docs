> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/deselectannotation(_:animated:)](https://developer.apple.com/documentation/mapkit/mkmapview/deselectannotation(_:animated:))

# deselectAnnotation(\_:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Deselects the specified annotation and hides its callout view.

## Declaration

```swift
func deselectAnnotation(_ annotation: (any MKAnnotation)?, animated: Bool)
```

## Parameters

- `annotation`: The annotation object to deselect.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the map view animates the callout view offscreen.

## See Also

### Managing annotation selections

- [annotationVisibleRect](annotationvisiblerect.md): The visible rectangle where the map is displaying annotation views.
- [selectedAnnotations](selectedannotations.md): The selected annotations.
- [selectAnnotation(\_:animated:)](selectannotation%28__animated_%29.md): Selects the specified annotation and displays a callout view for it.

# deselectAnnotation:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Deselects the specified annotation and hides its callout view.

## Declaration

```objectivec
- (void) deselectAnnotation:(id<MKAnnotation>) annotation animated:(BOOL) animated;
```

## Parameters

- `annotation`: The annotation object to deselect.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the map view animates the callout view offscreen.

## See Also

### Managing annotation selections

- [annotationVisibleRect](annotationvisiblerect.md): The visible rectangle where the map is displaying annotation views.
- [selectedAnnotations](selectedannotations.md): The selected annotations.
- [selectAnnotation:animated:](selectannotation%28__animated_%29.md): Selects the specified annotation and displays a callout view for it.
