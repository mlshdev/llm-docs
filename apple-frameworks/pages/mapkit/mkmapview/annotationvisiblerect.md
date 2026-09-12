> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/annotationvisiblerect](https://developer.apple.com/documentation/mapkit/mkmapview/annotationvisiblerect)

# annotationVisibleRect (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The visible rectangle where the map is displaying annotation views.

## Declaration

```swift
var annotationVisibleRect: CGRect { get }
```

## See Also

### Managing annotation selections

- [selectedAnnotations](selectedannotations.md): The selected annotations.
- [selectAnnotation(\_:animated:)](selectannotation%28__animated_%29.md): Selects the specified annotation and displays a callout view for it.
- [deselectAnnotation(\_:animated:)](deselectannotation%28__animated_%29.md): Deselects the specified annotation and hides its callout view.

# annotationVisibleRect (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The visible rectangle where the map is displaying annotation views.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect annotationVisibleRect;
```

## See Also

### Managing annotation selections

- [selectedAnnotations](selectedannotations.md): The selected annotations.
- [selectAnnotation:animated:](selectannotation%28__animated_%29.md): Selects the specified annotation and displays a callout view for it.
- [deselectAnnotation:animated:](deselectannotation%28__animated_%29.md): Deselects the specified annotation and hides its callout view.
