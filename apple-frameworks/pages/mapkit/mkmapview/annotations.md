> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/annotations](https://developer.apple.com/documentation/mapkit/mkmapview/annotations)

# annotations (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The annotations associated with the map view.

## Declaration

```swift
var annotations: [any MKAnnotation] { get }
```

<a id="Discussion"></a>

## Discussion

The objects in this array adopt the [MKAnnotation](../mkannotation.md) protocol. If the map view has no associated annotations, the value of this property is an empty array.

## See Also

### Annotating the map

- [addAnnotation(\_:)](addannotation%28__%29.md): Adds the specified annotation to the map view.
- [addAnnotations(\_:)](addannotations%28__%29.md): Adds an array of annotation objects to the map view.
- [removeAnnotation(\_:)](removeannotation%28__%29.md): Removes the specified annotation object from the map view.
- [removeAnnotations(\_:)](removeannotations%28__%29.md): Removes an array of annotation objects from the map view.
- [annotations(in:)](annotations%28in_%29.md): Returns the annotation objects within the specified map rectangle.

# annotations (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The annotations associated with the map view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<id<MKAnnotation>> * annotations;
```

<a id="Discussion"></a>

## Discussion

The objects in this array adopt the [MKAnnotation](../mkannotation.md) protocol. If the map view has no associated annotations, the value of this property is an empty array.

## See Also

### Annotating the map

- [addAnnotation:](addannotation%28__%29.md): Adds the specified annotation to the map view.
- [addAnnotations:](addannotations%28__%29.md): Adds an array of annotation objects to the map view.
- [removeAnnotation:](removeannotation%28__%29.md): Removes the specified annotation object from the map view.
- [removeAnnotations:](removeannotations%28__%29.md): Removes an array of annotation objects from the map view.
- [annotationsInMapRect:](annotations%28in_%29.md): Returns the annotation objects within the specified map rectangle.
