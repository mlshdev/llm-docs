> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/reuseidentifier](https://developer.apple.com/documentation/mapkit/mkannotationview/reuseidentifier)

# reuseIdentifier (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The string that identifies that the annotation view is reusable.

## Declaration

```swift
var reuseIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

You specify the reuse identifier when you create the view. You use this type to retrieve an annotation view that MapKit isn’t currently using because its annotation isn’t onscreen.

If you define distinctly different types of annotations (with distinctly different annotation views to go with them), you can differentiate between the annotation types by specifying different reuse identifiers for each one.

## See Also

### Getting and setting attributes

- [isEnabled](isenabled.md): A Boolean value that indicates whether the annotation is in an enabled state.
- [image](image.md): The image the annotation view displays.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the map view highlights the annotation view.
- [annotation](annotation.md): The annotation object associated with the view.
- [centerOffset](centeroffset.md): The offset (in points) at which to display the view.
- [calloutOffset](calloutoffset.md): The offset (in points) at which to place the callout.

# reuseIdentifier (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The string that identifies that the annotation view is reusable.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * reuseIdentifier;
```

<a id="Discussion"></a>

## Discussion

You specify the reuse identifier when you create the view. You use this type to retrieve an annotation view that MapKit isn’t currently using because its annotation isn’t onscreen.

If you define distinctly different types of annotations (with distinctly different annotation views to go with them), you can differentiate between the annotation types by specifying different reuse identifiers for each one.

## See Also

### Getting and setting attributes

- [enabled](isenabled.md): A Boolean value that indicates whether the annotation is in an enabled state.
- [image](image.md): The image the annotation view displays.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the map view highlights the annotation view.
- [annotation](annotation.md): The annotation object associated with the view.
- [centerOffset](centeroffset.md): The offset (in points) at which to display the view.
- [calloutOffset](calloutoffset.md): The offset (in points) at which to place the callout.
