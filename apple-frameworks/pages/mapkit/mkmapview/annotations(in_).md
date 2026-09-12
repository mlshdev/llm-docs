> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/annotations(in:)](https://developer.apple.com/documentation/mapkit/mkmapview/annotations(in:))

# annotations(in:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the annotation objects within the specified map rectangle.

## Declaration

```swift
func annotations(in mapRect: MKMapRect) -> Set<AnyHashable>
```

## Parameters

- `mapRect`: The portion of the map that you want to search for annotations.

<a id="return-value"></a>

## Return Value

The set of annotation objects within `mapRect`.

<a id="Discussion"></a>

## Discussion

This method offers a fast way to retrieve the annotation objects in a particular portion of the map. It’s much faster than doing a linear search of the objects in the [annotations](annotations.md) property yourself.

## See Also

### Annotating the map

- [annotations](annotations.md): The annotations associated with the map view.
- [addAnnotation(\_:)](addannotation%28__%29.md): Adds the specified annotation to the map view.
- [addAnnotations(\_:)](addannotations%28__%29.md): Adds an array of annotation objects to the map view.
- [removeAnnotation(\_:)](removeannotation%28__%29.md): Removes the specified annotation object from the map view.
- [removeAnnotations(\_:)](removeannotations%28__%29.md): Removes an array of annotation objects from the map view.

# annotationsInMapRect: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the annotation objects within the specified map rectangle.

## Declaration

```objectivec
- (NSSet<id<MKAnnotation>> *) annotationsInMapRect:(MKMapRect) mapRect;
```

## Parameters

- `mapRect`: The portion of the map that you want to search for annotations.

<a id="return-value"></a>

## Return Value

The set of annotation objects within `mapRect`.

<a id="Discussion"></a>

## Discussion

This method offers a fast way to retrieve the annotation objects in a particular portion of the map. It’s much faster than doing a linear search of the objects in the [annotations](annotations.md) property yourself.

## See Also

### Annotating the map

- [annotations](annotations.md): The annotations associated with the map view.
- [addAnnotation:](addannotation%28__%29.md): Adds the specified annotation to the map view.
- [addAnnotations:](addannotations%28__%29.md): Adds an array of annotation objects to the map view.
- [removeAnnotation:](removeannotation%28__%29.md): Removes the specified annotation object from the map view.
- [removeAnnotations:](removeannotations%28__%29.md): Removes an array of annotation objects from the map view.
