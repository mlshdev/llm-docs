> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/ishighlighted](https://developer.apple.com/documentation/mapkit/mkannotationview/ishighlighted)

# isHighlighted (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates whether the map view highlights the annotation view.

## Declaration

```swift
var isHighlighted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Don’t set the value of this property directly. The map view sets it in response to touch events entering or exiting the annotation view’s bounds.

## See Also

### Getting and setting attributes

- [isEnabled](isenabled.md): A Boolean value that indicates whether the annotation is in an enabled state.
- [image](image.md): The image the annotation view displays.
- [annotation](annotation.md): The annotation object associated with the view.
- [centerOffset](centeroffset.md): The offset (in points) at which to display the view.
- [calloutOffset](calloutoffset.md): The offset (in points) at which to place the callout.
- [reuseIdentifier](reuseidentifier.md): The string that identifies that the annotation view is reusable.

# highlighted (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates whether the map view highlights the annotation view.

## Declaration

```objectivec
@property (nonatomic, getter=isHighlighted) BOOL highlighted;
```

<a id="Discussion"></a>

## Discussion

Don’t set the value of this property directly. The map view sets it in response to touch events entering or exiting the annotation view’s bounds.

## See Also

### Getting and setting attributes

- [enabled](isenabled.md): A Boolean value that indicates whether the annotation is in an enabled state.
- [image](image.md): The image the annotation view displays.
- [annotation](annotation.md): The annotation object associated with the view.
- [centerOffset](centeroffset.md): The offset (in points) at which to display the view.
- [calloutOffset](calloutoffset.md): The offset (in points) at which to place the callout.
- [reuseIdentifier](reuseidentifier.md): The string that identifies that the annotation view is reusable.
