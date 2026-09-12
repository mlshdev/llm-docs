> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/view(for:)-33w8k](https://developer.apple.com/documentation/mapkit/mkmapview/view(for:)-33w8k)

# view(for:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the annotation view associated with the specified annotation object, if any.

## Declaration

```swift
func view(for annotation: any MKAnnotation) -> MKAnnotationView?
```

## Parameters

- `annotation`: The annotation object whose view you want.

<a id="return-value"></a>

## Return Value

The annotation view or `nil` if the view has not yet been created. This method may also return `nil` if the annotation is not in the visible map region and therefore does not have an associated annotation view.

## See Also

### Creating annotation views

- [register(\_:forAnnotationViewWithReuseIdentifier:)](register%28__forannotationviewwithreuseidentifier_%29.md): Registers an annotation view class that the map can create automatically.
- [dequeueReusableAnnotationView(withIdentifier:for:)](dequeuereusableannotationview%28withidentifier_for_%29.md): Returns a reusable annotation view using the specified identifier with a specified existing annotation view, if possible.
- [dequeueReusableAnnotationView(withIdentifier:)](dequeuereusableannotationview%28withidentifier_%29.md): Returns a reusable annotation view using its identifier.
- [MKMapViewDefaultAnnotationViewReuseIdentifier](../mkmapviewdefaultannotationviewreuseidentifier.md): The default reuse identifier for your map’s annotation views.
- [MKMapViewDefaultClusterAnnotationViewReuseIdentifier](../mkmapviewdefaultclusterannotationviewreuseidentifier.md): The default reuse identifier for the annotation view representing a cluster of annotations.

# viewForAnnotation: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the annotation view associated with the specified annotation object, if any.

## Declaration

```objectivec
- (MKAnnotationView *) viewForAnnotation:(id<MKAnnotation>) annotation;
```

## Parameters

- `annotation`: The annotation object whose view you want.

<a id="return-value"></a>

## Return Value

The annotation view or `nil` if the view has not yet been created. This method may also return `nil` if the annotation is not in the visible map region and therefore does not have an associated annotation view.

## See Also

### Creating annotation views

- [registerClass:forAnnotationViewWithReuseIdentifier:](register%28__forannotationviewwithreuseidentifier_%29.md): Registers an annotation view class that the map can create automatically.
- [dequeueReusableAnnotationViewWithIdentifier:forAnnotation:](dequeuereusableannotationview%28withidentifier_for_%29.md): Returns a reusable annotation view using the specified identifier with a specified existing annotation view, if possible.
- [dequeueReusableAnnotationViewWithIdentifier:](dequeuereusableannotationview%28withidentifier_%29.md): Returns a reusable annotation view using its identifier.
- [MKMapViewDefaultAnnotationViewReuseIdentifier](../mkmapviewdefaultannotationviewreuseidentifier.md): The default reuse identifier for your map’s annotation views.
- [MKMapViewDefaultClusterAnnotationViewReuseIdentifier](../mkmapviewdefaultclusterannotationviewreuseidentifier.md): The default reuse identifier for the annotation view representing a cluster of annotations.
