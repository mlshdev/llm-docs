> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/image](https://developer.apple.com/documentation/mapkit/mkannotationview/image)

# image (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The image the annotation view displays.

## Declaration

```swift
var image: UIImage? { get set }
```

```swift
var image: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a new image to this property also changes the size of the view’s frame so that it matches the width and height of the new image. The position of the view’s frame doesn’t change.

## See Also

### Getting and setting attributes

- [isEnabled](isenabled.md): A Boolean value that indicates whether the annotation is in an enabled state.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the map view highlights the annotation view.
- [annotation](annotation.md): The annotation object associated with the view.
- [centerOffset](centeroffset.md): The offset (in points) at which to display the view.
- [calloutOffset](calloutoffset.md): The offset (in points) at which to place the callout.
- [reuseIdentifier](reuseidentifier.md): The string that identifies that the annotation view is reusable.

# image (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The image the annotation view displays.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * image;
```

```objectivec
@property (nonatomic, strong, nullable) NSImage * image;
```

<a id="Discussion"></a>

## Discussion

Assigning a new image to this property also changes the size of the view’s frame so that it matches the width and height of the new image. The position of the view’s frame doesn’t change.

## See Also

### Getting and setting attributes

- [enabled](isenabled.md): A Boolean value that indicates whether the annotation is in an enabled state.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the map view highlights the annotation view.
- [annotation](annotation.md): The annotation object associated with the view.
- [centerOffset](centeroffset.md): The offset (in points) at which to display the view.
- [calloutOffset](calloutoffset.md): The offset (in points) at which to place the callout.
- [reuseIdentifier](reuseidentifier.md): The string that identifies that the annotation view is reusable.
