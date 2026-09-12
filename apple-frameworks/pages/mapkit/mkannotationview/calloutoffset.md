> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/calloutoffset](https://developer.apple.com/documentation/mapkit/mkannotationview/calloutoffset)

# calloutOffset (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The offset (in points) at which to place the callout.

## Declaration

```swift
var calloutOffset: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the additional distance by which to move the callout. When this property is `(0, 0)`, the map view places the anchor point of the callout on the top-center point of the annotation view’s frame. Specifying positive offset values moves the callout down and to the right, and specifying negative values moves it up and to the left.

MapKit doesn’t use the [calloutOffset](calloutoffset.md) property in macOS apps. Instead, macOS apps use [leftCalloutOffset](leftcalloutoffset.md) and [rightCalloutOffset](rightcalloutoffset.md).

## See Also

### Getting and setting attributes

- [isEnabled](isenabled.md): A Boolean value that indicates whether the annotation is in an enabled state.
- [image](image.md): The image the annotation view displays.
- [isHighlighted](ishighlighted.md): A Boolean value that indicates whether the map view highlights the annotation view.
- [annotation](annotation.md): The annotation object associated with the view.
- [centerOffset](centeroffset.md): The offset (in points) at which to display the view.
- [reuseIdentifier](reuseidentifier.md): The string that identifies that the annotation view is reusable.

# calloutOffset (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The offset (in points) at which to place the callout.

## Declaration

```objectivec
@property (nonatomic) CGPoint calloutOffset;
```

<a id="Discussion"></a>

## Discussion

This property determines the additional distance by which to move the callout. When this property is `(0, 0)`, the map view places the anchor point of the callout on the top-center point of the annotation view’s frame. Specifying positive offset values moves the callout down and to the right, and specifying negative values moves it up and to the left.

MapKit doesn’t use the [calloutOffset](calloutoffset.md) property in macOS apps. Instead, macOS apps use [leftCalloutOffset](leftcalloutoffset.md) and [rightCalloutOffset](rightcalloutoffset.md).

## See Also

### Getting and setting attributes

- [enabled](isenabled.md): A Boolean value that indicates whether the annotation is in an enabled state.
- [image](image.md): The image the annotation view displays.
- [highlighted](ishighlighted.md): A Boolean value that indicates whether the map view highlights the annotation view.
- [annotation](annotation.md): The annotation object associated with the view.
- [centerOffset](centeroffset.md): The offset (in points) at which to display the view.
- [reuseIdentifier](reuseidentifier.md): The string that identifies that the annotation view is reusable.
