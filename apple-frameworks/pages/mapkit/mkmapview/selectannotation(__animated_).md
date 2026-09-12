> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/selectannotation(_:animated:)](https://developer.apple.com/documentation/mapkit/mkmapview/selectannotation(_:animated:))

# selectAnnotation(\_:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Selects the specified annotation and displays a callout view for it.

## Declaration

```swift
func selectAnnotation(_ annotation: any MKAnnotation, animated: Bool)
```

## Parameters

- `annotation`: The annotation object to select.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the map view animates the callout view into position.

<a id="Discussion"></a>

## Discussion

If the specified annotation isn’t onscreen, and, therefore, doesn’t have an associated annotation view, this method has no effect.

## See Also

### Managing annotation selections

- [annotationVisibleRect](annotationvisiblerect.md): The visible rectangle where the map is displaying annotation views.
- [selectedAnnotations](selectedannotations.md): The selected annotations.
- [deselectAnnotation(\_:animated:)](deselectannotation%28__animated_%29.md): Deselects the specified annotation and hides its callout view.

# selectAnnotation:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Selects the specified annotation and displays a callout view for it.

## Declaration

```objectivec
- (void) selectAnnotation:(id<MKAnnotation>) annotation animated:(BOOL) animated;
```

## Parameters

- `annotation`: The annotation object to select.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the map view animates the callout view into position.

<a id="Discussion"></a>

## Discussion

If the specified annotation isn’t onscreen, and, therefore, doesn’t have an associated annotation view, this method has no effect.

## See Also

### Managing annotation selections

- [annotationVisibleRect](annotationvisiblerect.md): The visible rectangle where the map is displaying annotation views.
- [selectedAnnotations](selectedannotations.md): The selected annotations.
- [deselectAnnotation:animated:](deselectannotation%28__animated_%29.md): Deselects the specified annotation and hides its callout view.
