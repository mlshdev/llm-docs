> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkannotationview/annotation

# annotation (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The annotation object associated with the view.

## Declaration

```swift
var annotation: (any MKAnnotation)? { get set }
```

<a id="Discussion"></a>

## Discussion

Don’t change the value of this property directly. This property contains a non-`nil` value only while the annotation view is visible on the map. If the map view queues this annotation view and is waiting to reuse it, the value is `nil`.

## See Also

### Getting and setting attributes

- [isEnabled](isenabled.md): A Boolean value that indicates whether the annotation is in an enabled state.
- [image](image.md): The image the annotation view displays.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the map view highlights the annotation view.
- [centerOffset](centeroffset.md): The offset (in points) at which to display the view.
- [calloutOffset](calloutoffset.md): The offset (in points) at which to place the callout.
- [reuseIdentifier](reuseidentifier.md): The string that identifies that the annotation view is reusable.

# annotation (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The annotation object associated with the view.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<MKAnnotation> annotation;
```

<a id="Discussion"></a>

## Discussion

Don’t change the value of this property directly. This property contains a non-`nil` value only while the annotation view is visible on the map. If the map view queues this annotation view and is waiting to reuse it, the value is `nil`.

## See Also

### Getting and setting attributes

- [enabled](isenabled.md): A Boolean value that indicates whether the annotation is in an enabled state.
- [image](image.md): The image the annotation view displays.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the map view highlights the annotation view.
- [centerOffset](centeroffset.md): The offset (in points) at which to display the view.
- [calloutOffset](calloutoffset.md): The offset (in points) at which to place the callout.
- [reuseIdentifier](reuseidentifier.md): The string that identifies that the annotation view is reusable.
