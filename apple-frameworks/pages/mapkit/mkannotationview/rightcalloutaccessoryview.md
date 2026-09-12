> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/rightcalloutaccessoryview](https://developer.apple.com/documentation/mapkit/mkannotationview/rightcalloutaccessoryview)

# rightCalloutAccessoryView (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The view to display on the right side of the standard callout.

## Declaration

```swift
var rightCalloutAccessoryView: UIView? { get set }
```

```swift
var rightCalloutAccessoryView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` by default. Typically, you use the right callout view to link to more detailed information about the annotation. In an iOS app, a common view to specify for this property is a button object with a type of [UIButton.ButtonType.detailDisclosure](../../uikit/uibutton/buttontype-swift.enum/detaildisclosure.md).

In an iOS app, if the view you specify is also a descendant of the [UIControl](../../uikit/uicontrol.md) class, you can use the map view’s delegate to receive notifications when a person taps your control. If it doesn’t descend from [UIControl](../../uikit/uicontrol.md), your view is responsible for handling any touch events within its bounds.

In a macOS app, the callout view’s view controller can implement an action method that responds when a user clicks the control in a callout view.

## See Also

### Managing callout views

- [accessoryOffset](accessoryoffset.md): An offset that changes the accessory’s default anchor point.
- [canShowCallout](canshowcallout.md): A Boolean value that indicates whether the annotation view is able to display extra information in a callout.
- [leftCalloutAccessoryView](leftcalloutaccessoryview.md): The view to display on the left side of the standard callout.
- [detailCalloutAccessoryView](detailcalloutaccessoryview.md): The detail accessory view to use in the standard callout.
- [leftCalloutOffset](leftcalloutoffset.md): The offset in points from the middle-left of the annotation view.
- [rightCalloutOffset](rightcalloutoffset.md): The offset in points from the middle-right of the annotation view.

# rightCalloutAccessoryView (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The view to display on the right side of the standard callout.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * rightCalloutAccessoryView;
```

```objectivec
@property (nonatomic, strong, nullable) NSView * rightCalloutAccessoryView;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` by default. Typically, you use the right callout view to link to more detailed information about the annotation. In an iOS app, a common view to specify for this property is a button object with a type of [UIButtonTypeDetailDisclosure](../../uikit/uibutton/buttontype-swift.enum/detaildisclosure.md).

In an iOS app, if the view you specify is also a descendant of the [UIControl](../../uikit/uicontrol.md) class, you can use the map view’s delegate to receive notifications when a person taps your control. If it doesn’t descend from [UIControl](../../uikit/uicontrol.md), your view is responsible for handling any touch events within its bounds.

In a macOS app, the callout view’s view controller can implement an action method that responds when a user clicks the control in a callout view.

## See Also

### Managing callout views

- [accessoryOffset](accessoryoffset.md): An offset that changes the accessory’s default anchor point.
- [canShowCallout](canshowcallout.md): A Boolean value that indicates whether the annotation view is able to display extra information in a callout.
- [leftCalloutAccessoryView](leftcalloutaccessoryview.md): The view to display on the left side of the standard callout.
- [detailCalloutAccessoryView](detailcalloutaccessoryview.md): The detail accessory view to use in the standard callout.
- [leftCalloutOffset](leftcalloutoffset.md): The offset in points from the middle-left of the annotation view.
- [rightCalloutOffset](rightcalloutoffset.md): The offset in points from the middle-right of the annotation view.
