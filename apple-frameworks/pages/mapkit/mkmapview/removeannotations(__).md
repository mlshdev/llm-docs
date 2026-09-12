> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/removeannotations(_:)](https://developer.apple.com/documentation/mapkit/mkmapview/removeannotations(_:))

# removeAnnotations(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Removes an array of annotation objects from the map view.

## Declaration

```swift
func removeAnnotations(_ annotations: [any MKAnnotation])
```

## Parameters

- `annotations`: The array of annotations to remove. Objects in the array need to conform to the [MKAnnotation](../mkannotation.md) protocol.

<a id="Discussion"></a>

## Discussion

If any annotation object in the array has an associated annotation view, and if that view has a reuse identifier, this method removes the annotation view and queues it internally for later reuse. You can retrieve queued annotation views (and associate them with new annotations) using the [dequeueReusableAnnotationView(withIdentifier:)](dequeuereusableannotationview%28withidentifier_%29.md) method.

Removing annotation objects disassociates them from the map view entirely, preventing the map view from displaying them on the map. Typically, you call this method only when you want to hide or delete the specified annotations.

## See Also

### Annotating the map

- [annotations](annotations.md): The annotations associated with the map view.
- [addAnnotation(\_:)](addannotation%28__%29.md): Adds the specified annotation to the map view.
- [addAnnotations(\_:)](addannotations%28__%29.md): Adds an array of annotation objects to the map view.
- [removeAnnotation(\_:)](removeannotation%28__%29.md): Removes the specified annotation object from the map view.
- [annotations(in:)](annotations%28in_%29.md): Returns the annotation objects within the specified map rectangle.

# removeAnnotations: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Removes an array of annotation objects from the map view.

## Declaration

```objectivec
- (void) removeAnnotations:(NSArray<id<MKAnnotation>> *) annotations;
```

## Parameters

- `annotations`: The array of annotations to remove. Objects in the array need to conform to the [MKAnnotation](../mkannotation.md) protocol.

<a id="Discussion"></a>

## Discussion

If any annotation object in the array has an associated annotation view, and if that view has a reuse identifier, this method removes the annotation view and queues it internally for later reuse. You can retrieve queued annotation views (and associate them with new annotations) using the [dequeueReusableAnnotationViewWithIdentifier:](dequeuereusableannotationview%28withidentifier_%29.md) method.

Removing annotation objects disassociates them from the map view entirely, preventing the map view from displaying them on the map. Typically, you call this method only when you want to hide or delete the specified annotations.

## See Also

### Annotating the map

- [annotations](annotations.md): The annotations associated with the map view.
- [addAnnotation:](addannotation%28__%29.md): Adds the specified annotation to the map view.
- [addAnnotations:](addannotations%28__%29.md): Adds an array of annotation objects to the map view.
- [removeAnnotation:](removeannotation%28__%29.md): Removes the specified annotation object from the map view.
- [annotationsInMapRect:](annotations%28in_%29.md): Returns the annotation objects within the specified map rectangle.
