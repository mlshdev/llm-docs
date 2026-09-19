> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkmapview/selectedannotations

# selectedAnnotations (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The selected annotations.

## Declaration

```swift
var selectedAnnotations: [any MKAnnotation] { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a new array to this property selects only the first annotation in the array.

## See Also

### Managing annotation selections

- [annotationVisibleRect](annotationvisiblerect.md): The visible rectangle where the map is displaying annotation views.
- [selectAnnotation(\_:animated:)](selectannotation%28__animated_%29.md): Selects the specified annotation and displays a callout view for it.
- [deselectAnnotation(\_:animated:)](deselectannotation%28__animated_%29.md): Deselects the specified annotation and hides its callout view.

# selectedAnnotations (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The selected annotations.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<id<MKAnnotation>> * selectedAnnotations;
```

<a id="Discussion"></a>

## Discussion

Assigning a new array to this property selects only the first annotation in the array.

## See Also

### Managing annotation selections

- [annotationVisibleRect](annotationvisiblerect.md): The visible rectangle where the map is displaying annotation views.
- [selectAnnotation:animated:](selectannotation%28__animated_%29.md): Selects the specified annotation and displays a callout view for it.
- [deselectAnnotation:animated:](deselectannotation%28__animated_%29.md): Deselects the specified annotation and hides its callout view.
