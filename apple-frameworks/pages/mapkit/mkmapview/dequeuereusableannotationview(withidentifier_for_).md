> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/dequeuereusableannotationview(withidentifier:for:)](https://developer.apple.com/documentation/mapkit/mkmapview/dequeuereusableannotationview(withidentifier:for:))

# dequeueReusableAnnotationView(withIdentifier:for:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a reusable annotation view using the specified identifier with a specified existing annotation view, if possible.

## Declaration

```swift
func dequeueReusableAnnotationView(withIdentifier identifier: String, for annotation: any MKAnnotation) -> MKAnnotationView
```

## Parameters

- `identifier`: A string identifying the annotation view to create.
- `annotation`: The annotation the map is displaying. This method automatically assigns this annotation object to the returned annotation view.

<a id="return-value"></a>

## Return Value

An annotation view with the specified identifier.

<a id="Discussion"></a>

## Discussion

For performance reasons, be sure to reuse [MKAnnotationView](../mkannotationview.md) objects in your map views. As annotation views move offscreen, the map view moves them to an internally managed reuse queue. As new annotations move onscreen, and the map view prompts your code to provide a corresponding annotation view, use this method to dequeue an existing view. Dequeueing saves time and memory during performance-critical operations, such as scrolling.

If the map view can dequeue an existing view, this method tries to create one from the specified identifier. Before this can happen, you need to register an annotation view class using the [register(\_:forAnnotationViewWithReuseIdentifier:)](register%28__forannotationviewwithreuseidentifier_%29.md) method. If there’s no registered class with the appropriate identifier, this method throws an exception.

## See Also

### Creating annotation views

- [register(\_:forAnnotationViewWithReuseIdentifier:)](register%28__forannotationviewwithreuseidentifier_%29.md): Registers an annotation view class that the map can create automatically.
- [dequeueReusableAnnotationView(withIdentifier:)](dequeuereusableannotationview%28withidentifier_%29.md): Returns a reusable annotation view using its identifier.
- [view(for:)](view%28for_%29-33w8k.md): Returns the annotation view associated with the specified annotation object, if any.
- [MKMapViewDefaultAnnotationViewReuseIdentifier](../mkmapviewdefaultannotationviewreuseidentifier.md): The default reuse identifier for your map’s annotation views.
- [MKMapViewDefaultClusterAnnotationViewReuseIdentifier](../mkmapviewdefaultclusterannotationviewreuseidentifier.md): The default reuse identifier for the annotation view representing a cluster of annotations.

# dequeueReusableAnnotationViewWithIdentifier:forAnnotation: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a reusable annotation view using the specified identifier with a specified existing annotation view, if possible.

## Declaration

```objectivec
- (MKAnnotationView *) dequeueReusableAnnotationViewWithIdentifier:(NSString *) identifier forAnnotation:(id<MKAnnotation>) annotation;
```

## Parameters

- `identifier`: A string identifying the annotation view to create.
- `annotation`: The annotation the map is displaying. This method automatically assigns this annotation object to the returned annotation view.

<a id="return-value"></a>

## Return Value

An annotation view with the specified identifier.

<a id="Discussion"></a>

## Discussion

For performance reasons, be sure to reuse [MKAnnotationView](../mkannotationview.md) objects in your map views. As annotation views move offscreen, the map view moves them to an internally managed reuse queue. As new annotations move onscreen, and the map view prompts your code to provide a corresponding annotation view, use this method to dequeue an existing view. Dequeueing saves time and memory during performance-critical operations, such as scrolling.

If the map view can dequeue an existing view, this method tries to create one from the specified identifier. Before this can happen, you need to register an annotation view class using the [registerClass:forAnnotationViewWithReuseIdentifier:](register%28__forannotationviewwithreuseidentifier_%29.md) method. If there’s no registered class with the appropriate identifier, this method throws an exception.

## See Also

### Creating annotation views

- [registerClass:forAnnotationViewWithReuseIdentifier:](register%28__forannotationviewwithreuseidentifier_%29.md): Registers an annotation view class that the map can create automatically.
- [dequeueReusableAnnotationViewWithIdentifier:](dequeuereusableannotationview%28withidentifier_%29.md): Returns a reusable annotation view using its identifier.
- [viewForAnnotation:](view%28for_%29-33w8k.md): Returns the annotation view associated with the specified annotation object, if any.
- [MKMapViewDefaultAnnotationViewReuseIdentifier](../mkmapviewdefaultannotationviewreuseidentifier.md): The default reuse identifier for your map’s annotation views.
- [MKMapViewDefaultClusterAnnotationViewReuseIdentifier](../mkmapviewdefaultclusterannotationviewreuseidentifier.md): The default reuse identifier for the annotation view representing a cluster of annotations.
