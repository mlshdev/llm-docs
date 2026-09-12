> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/prepareforreuse()](https://developer.apple.com/documentation/mapkit/mkannotationview/prepareforreuse())

# prepareForReuse() (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Calls this method when removing the view from the reuse queue.

## Declaration

```swift
func prepareForReuse()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. You can override it in your custom annotation views and use it to put the view in a known state before the map view returns it to your map view delegate.

## See Also

### Related Documentation

- [dequeueReusableAnnotationView(withIdentifier:)](../mkmapview/dequeuereusableannotationview%28withidentifier_%29.md): Returns a reusable annotation view using its identifier.

### Creating and preparing an annotation view

- [init(annotation:reuseIdentifier:)](init%28annotation_reuseidentifier_%29.md): Creates and returns a new annotation view.
- [init(coder:)](init%28coder_%29.md): Creates an annotation view using data from the specified unarchiver.
- [prepareForDisplay()](preparefordisplay%28%29.md): Notifies the annotation view that the map view is about to display it.

# prepareForReuse (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Calls this method when removing the view from the reuse queue.

## Declaration

```objectivec
- (void) prepareForReuse;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. You can override it in your custom annotation views and use it to put the view in a known state before the map view returns it to your map view delegate.

## See Also

### Related Documentation

- [dequeueReusableAnnotationViewWithIdentifier:](../mkmapview/dequeuereusableannotationview%28withidentifier_%29.md): Returns a reusable annotation view using its identifier.

### Creating and preparing an annotation view

- [initWithAnnotation:reuseIdentifier:](init%28annotation_reuseidentifier_%29.md): Creates and returns a new annotation view.
- [initWithCoder:](init%28coder_%29.md): Creates an annotation view using data from the specified unarchiver.
- [prepareForDisplay](preparefordisplay%28%29.md): Notifies the annotation view that the map view is about to display it.
