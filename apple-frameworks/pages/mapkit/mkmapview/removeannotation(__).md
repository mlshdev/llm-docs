> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/removeannotation(_:)](https://developer.apple.com/documentation/mapkit/mkmapview/removeannotation(_:))

# removeAnnotation(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Removes the specified annotation object from the map view.

## Declaration

```swift
func removeAnnotation(_ annotation: any MKAnnotation)
```

## Parameters

- `annotation`: The annotation object to remove. This object needs to conform to the [MKAnnotation](../mkannotation.md) protocol.

<a id="Discussion"></a>

## Discussion

If the annotation is associated with an annotation view, and that view has a reuse identifier, this method removes the annotation view and queues it internally for later reuse. You can retrieve queued annotation views (and associate them with new annotations) using the [dequeueReusableAnnotationView(withIdentifier:)](dequeuereusableannotationview%28withidentifier_%29.md) method.

Removing an annotation object disassociates it from the map view entirely, preventing the map view from displaying it on the map. Typically, you call this method only when you want to hide or delete a specified annotation.

## See Also

### Annotating the map

- [annotations](annotations.md): The annotations associated with the map view.
- [addAnnotation(\_:)](addannotation%28__%29.md): Adds the specified annotation to the map view.
- [addAnnotations(\_:)](addannotations%28__%29.md): Adds an array of annotation objects to the map view.
- [removeAnnotations(\_:)](removeannotations%28__%29.md): Removes an array of annotation objects from the map view.
- [annotations(in:)](annotations%28in_%29.md): Returns the annotation objects within the specified map rectangle.

# removeAnnotation: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Removes the specified annotation object from the map view.

## Declaration

```objectivec
- (void) removeAnnotation:(id<MKAnnotation>) annotation;
```

## Parameters

- `annotation`: The annotation object to remove. This object needs to conform to the [MKAnnotation](../mkannotation.md) protocol.

<a id="Discussion"></a>

## Discussion

If the annotation is associated with an annotation view, and that view has a reuse identifier, this method removes the annotation view and queues it internally for later reuse. You can retrieve queued annotation views (and associate them with new annotations) using the [dequeueReusableAnnotationViewWithIdentifier:](dequeuereusableannotationview%28withidentifier_%29.md) method.

Removing an annotation object disassociates it from the map view entirely, preventing the map view from displaying it on the map. Typically, you call this method only when you want to hide or delete a specified annotation.

## See Also

### Annotating the map

- [annotations](annotations.md): The annotations associated with the map view.
- [addAnnotation:](addannotation%28__%29.md): Adds the specified annotation to the map view.
- [addAnnotations:](addannotations%28__%29.md): Adds an array of annotation objects to the map view.
- [removeAnnotations:](removeannotations%28__%29.md): Removes an array of annotation objects from the map view.
- [annotationsInMapRect:](annotations%28in_%29.md): Returns the annotation objects within the specified map rectangle.
