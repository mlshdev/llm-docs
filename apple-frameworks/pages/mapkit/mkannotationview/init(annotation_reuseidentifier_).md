> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/init(annotation:reuseidentifier:)](https://developer.apple.com/documentation/mapkit/mkannotationview/init(annotation:reuseidentifier:))

# init(annotation:reuseIdentifier:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates and returns a new annotation view.

## Declaration

```swift
init(annotation: (any MKAnnotation)?, reuseIdentifier: String?)
```

## Parameters

- `annotation`: The annotation object to associate with the new view.
- `reuseIdentifier`: If you plan to reuse the annotation view for similar types of annotations, pass a string to identify it. Although you can pass `nil` if you don’t intend to reuse the view, reusing annotation views is generally best practice.

<a id="return-value"></a>

## Return Value

The initialized annotation view, or `nil` if there’s a problem initializing the object.

<a id="Discussion"></a>

## Discussion

The reuse identifier provides a way for you to improve performance by recycling annotation views as the map scrolls on and off of the map. As MapKit no longer needs views, the map view moves them to a reuse queue. When a new annotation becomes visible, your app can request a view for that annotation by passing the appropriate reuse identifier string to the [dequeueReusableAnnotationView(withIdentifier:)](../mkmapview/dequeuereusableannotationview%28withidentifier_%29.md) method of [MKMapView](../mkmapview.md).

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating and preparing an annotation view

- [init(coder:)](init%28coder_%29.md): Creates an annotation view using data from the specified unarchiver.
- [prepareForReuse()](prepareforreuse%28%29.md): Calls this method when removing the view from the reuse queue.
- [prepareForDisplay()](preparefordisplay%28%29.md): Notifies the annotation view that the map view is about to display it.

# initWithAnnotation:reuseIdentifier: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates and returns a new annotation view.

## Declaration

```objectivec
- (instancetype) initWithAnnotation:(id<MKAnnotation>) annotation reuseIdentifier:(NSString *) reuseIdentifier;
```

## Parameters

- `annotation`: The annotation object to associate with the new view.
- `reuseIdentifier`: If you plan to reuse the annotation view for similar types of annotations, pass a string to identify it. Although you can pass `nil` if you don’t intend to reuse the view, reusing annotation views is generally best practice.

<a id="return-value"></a>

## Return Value

The initialized annotation view, or `nil` if there’s a problem initializing the object.

<a id="Discussion"></a>

## Discussion

The reuse identifier provides a way for you to improve performance by recycling annotation views as the map scrolls on and off of the map. As MapKit no longer needs views, the map view moves them to a reuse queue. When a new annotation becomes visible, your app can request a view for that annotation by passing the appropriate reuse identifier string to the [dequeueReusableAnnotationViewWithIdentifier:](../mkmapview/dequeuereusableannotationview%28withidentifier_%29.md) method of [MKMapView](../mkmapview.md).

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating and preparing an annotation view

- [initWithCoder:](init%28coder_%29.md): Creates an annotation view using data from the specified unarchiver.
- [prepareForReuse](prepareforreuse%28%29.md): Calls this method when removing the view from the reuse queue.
- [prepareForDisplay](preparefordisplay%28%29.md): Notifies the annotation view that the map view is about to display it.
