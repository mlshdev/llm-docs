> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdefaultannotationviewreuseidentifier](https://developer.apple.com/documentation/mapkit/mkmapviewdefaultannotationviewreuseidentifier)

# MKMapViewDefaultAnnotationViewReuseIdentifier (Swift)

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The default reuse identifier for your map’s annotation views.

## Declaration

```swift
let MKMapViewDefaultAnnotationViewReuseIdentifier: String
```

<a id="Discussion"></a>

## Discussion

Use this constant to register a default annotation view. This map view uses this default annotation view when your map view’s delegate doesn’t implement the [mapView(\_:viewFor:)](mkmapviewdelegate/mapview%28__viewfor_%29-8humz.md) method, or when that method returns `nil`.

## See Also

### Creating annotation views

- [register(\_:forAnnotationViewWithReuseIdentifier:)](mkmapview/register%28__forannotationviewwithreuseidentifier_%29.md): Registers an annotation view class that the map can create automatically.
- [dequeueReusableAnnotationView(withIdentifier:for:)](mkmapview/dequeuereusableannotationview%28withidentifier_for_%29.md): Returns a reusable annotation view using the specified identifier with a specified existing annotation view, if possible.
- [dequeueReusableAnnotationView(withIdentifier:)](mkmapview/dequeuereusableannotationview%28withidentifier_%29.md): Returns a reusable annotation view using its identifier.
- [view(for:)](mkmapview/view%28for_%29-33w8k.md): Returns the annotation view associated with the specified annotation object, if any.
- [MKMapViewDefaultClusterAnnotationViewReuseIdentifier](mkmapviewdefaultclusterannotationviewreuseidentifier.md): The default reuse identifier for the annotation view representing a cluster of annotations.

# MKMapViewDefaultAnnotationViewReuseIdentifier (Objective-C)

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The default reuse identifier for your map’s annotation views.

## Declaration

```objectivec
extern NSString * const MKMapViewDefaultAnnotationViewReuseIdentifier;
```

<a id="Discussion"></a>

## Discussion

Use this constant to register a default annotation view. This map view uses this default annotation view when your map view’s delegate doesn’t implement the [mapView:viewForAnnotation:](mkmapviewdelegate/mapview%28__viewfor_%29-8humz.md) method, or when that method returns `nil`.

## See Also

### Creating annotation views

- [registerClass:forAnnotationViewWithReuseIdentifier:](mkmapview/register%28__forannotationviewwithreuseidentifier_%29.md): Registers an annotation view class that the map can create automatically.
- [dequeueReusableAnnotationViewWithIdentifier:forAnnotation:](mkmapview/dequeuereusableannotationview%28withidentifier_for_%29.md): Returns a reusable annotation view using the specified identifier with a specified existing annotation view, if possible.
- [dequeueReusableAnnotationViewWithIdentifier:](mkmapview/dequeuereusableannotationview%28withidentifier_%29.md): Returns a reusable annotation view using its identifier.
- [viewForAnnotation:](mkmapview/view%28for_%29-33w8k.md): Returns the annotation view associated with the specified annotation object, if any.
- [MKMapViewDefaultClusterAnnotationViewReuseIdentifier](mkmapviewdefaultclusterannotationviewreuseidentifier.md): The default reuse identifier for the annotation view representing a cluster of annotations.
