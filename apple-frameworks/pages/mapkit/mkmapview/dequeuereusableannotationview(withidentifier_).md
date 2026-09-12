> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/dequeuereusableannotationview(withidentifier:)](https://developer.apple.com/documentation/mapkit/mkmapview/dequeuereusableannotationview(withidentifier:))

# dequeueReusableAnnotationView(withIdentifier:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns a reusable annotation view using its identifier.

## Declaration

```swift
func dequeueReusableAnnotationView(withIdentifier identifier: String) -> MKAnnotationView?
```

## Parameters

- `identifier`: A string identifying the annotation view for the map view to reuse. This string is the same one you specify when initializing the annotation view using the [init(annotation:reuseIdentifier:)](../mkannotationview/init%28annotation_reuseidentifier_%29.md) method.

<a id="return-value"></a>

## Return Value

An annotation view with the specified identifier, or `nil` if no such object exists in the reuse queue.

<a id="Discussion"></a>

## Discussion

For performance reasons, it’s best practice to reuse [MKAnnotationView](../mkannotationview.md) objects in your map views. As annotation views move offscreen, the map view moves them to an internally managed reuse queue. As new annotations move onscreen, and the map view prompts your code to provide a corresponding annotation view, attempt to dequeue an existing view before creating a new one. Dequeueing saves time and memory during performance-critical operations like scrolling.

## See Also

### Creating annotation views

- [register(\_:forAnnotationViewWithReuseIdentifier:)](register%28__forannotationviewwithreuseidentifier_%29.md): Registers an annotation view class that the map can create automatically.
- [dequeueReusableAnnotationView(withIdentifier:for:)](dequeuereusableannotationview%28withidentifier_for_%29.md): Returns a reusable annotation view using the specified identifier with a specified existing annotation view, if possible.
- [view(for:)](view%28for_%29-33w8k.md): Returns the annotation view associated with the specified annotation object, if any.
- [MKMapViewDefaultAnnotationViewReuseIdentifier](../mkmapviewdefaultannotationviewreuseidentifier.md): The default reuse identifier for your map’s annotation views.
- [MKMapViewDefaultClusterAnnotationViewReuseIdentifier](../mkmapviewdefaultclusterannotationviewreuseidentifier.md): The default reuse identifier for the annotation view representing a cluster of annotations.

# dequeueReusableAnnotationViewWithIdentifier: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns a reusable annotation view using its identifier.

## Declaration

```objectivec
- (MKAnnotationView *) dequeueReusableAnnotationViewWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A string identifying the annotation view for the map view to reuse. This string is the same one you specify when initializing the annotation view using the [initWithAnnotation:reuseIdentifier:](../mkannotationview/init%28annotation_reuseidentifier_%29.md) method.

<a id="return-value"></a>

## Return Value

An annotation view with the specified identifier, or `nil` if no such object exists in the reuse queue.

<a id="Discussion"></a>

## Discussion

For performance reasons, it’s best practice to reuse [MKAnnotationView](../mkannotationview.md) objects in your map views. As annotation views move offscreen, the map view moves them to an internally managed reuse queue. As new annotations move onscreen, and the map view prompts your code to provide a corresponding annotation view, attempt to dequeue an existing view before creating a new one. Dequeueing saves time and memory during performance-critical operations like scrolling.

## See Also

### Creating annotation views

- [registerClass:forAnnotationViewWithReuseIdentifier:](register%28__forannotationviewwithreuseidentifier_%29.md): Registers an annotation view class that the map can create automatically.
- [dequeueReusableAnnotationViewWithIdentifier:forAnnotation:](dequeuereusableannotationview%28withidentifier_for_%29.md): Returns a reusable annotation view using the specified identifier with a specified existing annotation view, if possible.
- [viewForAnnotation:](view%28for_%29-33w8k.md): Returns the annotation view associated with the specified annotation object, if any.
- [MKMapViewDefaultAnnotationViewReuseIdentifier](../mkmapviewdefaultannotationviewreuseidentifier.md): The default reuse identifier for your map’s annotation views.
- [MKMapViewDefaultClusterAnnotationViewReuseIdentifier](../mkmapviewdefaultclusterannotationviewreuseidentifier.md): The default reuse identifier for the annotation view representing a cluster of annotations.
