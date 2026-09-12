> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/centeroffset](https://developer.apple.com/documentation/mapkit/mkannotationview/centeroffset)

# centerOffset (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The offset (in points) at which to display the view.

## Declaration

```swift
var centerOffset: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the map view places the center point of an annotation view at the coordinate point of the associated annotation. You can use this property to reposition the annotation view as necessary. MapKit measures the x- and y-offset values in points. Positive offset values move the annotation view down and to the right, and negative values move it up and to the left.

## See Also

### Getting and setting attributes

- [isEnabled](isenabled.md): A Boolean value that indicates whether the annotation is in an enabled state.
- [image](image.md): The image the annotation view displays.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the map view highlights the annotation view.
- [annotation](annotation.md): The annotation object associated with the view.
- [calloutOffset](calloutoffset.md): The offset (in points) at which to place the callout.
- [reuseIdentifier](reuseidentifier.md): The string that identifies that the annotation view is reusable.

# centerOffset (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The offset (in points) at which to display the view.

## Declaration

```objectivec
@property (nonatomic) CGPoint centerOffset;
```

<a id="Discussion"></a>

## Discussion

By default, the map view places the center point of an annotation view at the coordinate point of the associated annotation. You can use this property to reposition the annotation view as necessary. MapKit measures the x- and y-offset values in points. Positive offset values move the annotation view down and to the right, and negative values move it up and to the left.

## See Also

### Getting and setting attributes

- [enabled](isenabled.md): A Boolean value that indicates whether the annotation is in an enabled state.
- [image](image.md): The image the annotation view displays.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the map view highlights the annotation view.
- [annotation](annotation.md): The annotation object associated with the view.
- [calloutOffset](calloutoffset.md): The offset (in points) at which to place the callout.
- [reuseIdentifier](reuseidentifier.md): The string that identifies that the annotation view is reusable.
