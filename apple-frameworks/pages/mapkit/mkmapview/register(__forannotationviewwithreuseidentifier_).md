> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/register(_:forannotationviewwithreuseidentifier:)](https://developer.apple.com/documentation/mapkit/mkmapview/register(_:forannotationviewwithreuseidentifier:))

# register(\_:forAnnotationViewWithReuseIdentifier:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Registers an annotation view class that the map can create automatically.

## Declaration

```swift
func register(_ viewClass: AnyClass?, forAnnotationViewWithReuseIdentifier identifier: String)
```

## Parameters

- `viewClass`: The class of an annotation view that you use in your map. The class needs to be a subclass of [MKAnnotationView](../mkannotationview.md).
- `identifier`: The reuse identifier to associate with the specified class. This parameter can’t be `nil` or an empty string.

<a id="Discussion"></a>

## Discussion

Use this method to register one or more views that you use to display annotations on your map. Register your classes before adding any annotations to the map.

When you register an annotation view class using this method, the [dequeueReusableAnnotationView(withIdentifier:for:)](dequeuereusableannotationview%28withidentifier_for_%29.md) method uses the provided identifier to create the view that you register. It creates a new view only if an existing view isn’t available for reuse.

## See Also

### Creating annotation views

- [dequeueReusableAnnotationView(withIdentifier:for:)](dequeuereusableannotationview%28withidentifier_for_%29.md): Returns a reusable annotation view using the specified identifier with a specified existing annotation view, if possible.
- [dequeueReusableAnnotationView(withIdentifier:)](dequeuereusableannotationview%28withidentifier_%29.md): Returns a reusable annotation view using its identifier.
- [view(for:)](view%28for_%29-33w8k.md): Returns the annotation view associated with the specified annotation object, if any.
- [MKMapViewDefaultAnnotationViewReuseIdentifier](../mkmapviewdefaultannotationviewreuseidentifier.md): The default reuse identifier for your map’s annotation views.
- [MKMapViewDefaultClusterAnnotationViewReuseIdentifier](../mkmapviewdefaultclusterannotationviewreuseidentifier.md): The default reuse identifier for the annotation view representing a cluster of annotations.

# registerClass:forAnnotationViewWithReuseIdentifier: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Registers an annotation view class that the map can create automatically.

## Declaration

```objectivec
- (void) registerClass:(Class) viewClass forAnnotationViewWithReuseIdentifier:(NSString *) identifier;
```

## Parameters

- `viewClass`: The class of an annotation view that you use in your map. The class needs to be a subclass of [MKAnnotationView](../mkannotationview.md).
- `identifier`: The reuse identifier to associate with the specified class. This parameter can’t be `nil` or an empty string.

<a id="Discussion"></a>

## Discussion

Use this method to register one or more views that you use to display annotations on your map. Register your classes before adding any annotations to the map.

When you register an annotation view class using this method, the [dequeueReusableAnnotationViewWithIdentifier:forAnnotation:](dequeuereusableannotationview%28withidentifier_for_%29.md) method uses the provided identifier to create the view that you register. It creates a new view only if an existing view isn’t available for reuse.

## See Also

### Creating annotation views

- [dequeueReusableAnnotationViewWithIdentifier:forAnnotation:](dequeuereusableannotationview%28withidentifier_for_%29.md): Returns a reusable annotation view using the specified identifier with a specified existing annotation view, if possible.
- [dequeueReusableAnnotationViewWithIdentifier:](dequeuereusableannotationview%28withidentifier_%29.md): Returns a reusable annotation view using its identifier.
- [viewForAnnotation:](view%28for_%29-33w8k.md): Returns the annotation view associated with the specified annotation object, if any.
- [MKMapViewDefaultAnnotationViewReuseIdentifier](../mkmapviewdefaultannotationviewreuseidentifier.md): The default reuse identifier for your map’s annotation views.
- [MKMapViewDefaultClusterAnnotationViewReuseIdentifier](../mkmapviewdefaultclusterannotationviewreuseidentifier.md): The default reuse identifier for the annotation view representing a cluster of annotations.
