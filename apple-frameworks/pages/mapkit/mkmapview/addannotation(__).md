> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/addannotation(_:)](https://developer.apple.com/documentation/mapkit/mkmapview/addannotation(_:))

# addAnnotation(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Adds the specified annotation to the map view.

## Declaration

```swift
func addAnnotation(_ annotation: any MKAnnotation)
```

## Parameters

- `annotation`: The annotation object to add to the receiver. This object must conform to the [MKAnnotation](../mkannotation.md) protocol. The map view retains the specified object.

## See Also

### Annotating the map

- [annotations](annotations.md): The annotations associated with the map view.
- [addAnnotations(\_:)](addannotations%28__%29.md): Adds an array of annotation objects to the map view.
- [removeAnnotation(\_:)](removeannotation%28__%29.md): Removes the specified annotation object from the map view.
- [removeAnnotations(\_:)](removeannotations%28__%29.md): Removes an array of annotation objects from the map view.
- [annotations(in:)](annotations%28in_%29.md): Returns the annotation objects within the specified map rectangle.

# addAnnotation: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Adds the specified annotation to the map view.

## Declaration

```objectivec
- (void) addAnnotation:(id<MKAnnotation>) annotation;
```

## Parameters

- `annotation`: The annotation object to add to the receiver. This object must conform to the [MKAnnotation](../mkannotation.md) protocol. The map view retains the specified object.

## See Also

### Annotating the map

- [annotations](annotations.md): The annotations associated with the map view.
- [addAnnotations:](addannotations%28__%29.md): Adds an array of annotation objects to the map view.
- [removeAnnotation:](removeannotation%28__%29.md): Removes the specified annotation object from the map view.
- [removeAnnotations:](removeannotations%28__%29.md): Removes an array of annotation objects from the map view.
- [annotationsInMapRect:](annotations%28in_%29.md): Returns the annotation objects within the specified map rectangle.
