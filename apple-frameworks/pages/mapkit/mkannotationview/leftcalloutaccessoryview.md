> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/leftcalloutaccessoryview](https://developer.apple.com/documentation/mapkit/mkannotationview/leftcalloutaccessoryview)

# leftCalloutAccessoryView (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The view to display on the left side of the standard callout.

## Declaration

```swift
var leftCalloutAccessoryView: UIView? { get set }
```

```swift
var leftCalloutAccessoryView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. Typically, you use the left callout view to display information about the annotation or to link to custom information that your app provides.

In an iOS app, if the view you specify is also a descendant of the [UIControl](../../uikit/uicontrol.md) class, you can use the map view’s delegate to receive notifications when the user taps your control. If it doesn’t descend from [UIControl](../../uikit/uicontrol.md), your view is responsible for handling any touch events within its bounds.

In a macOS app, the callout view’s view controller can implement an action method that responds when the user clicks the control in a callout view.

## See Also

### Managing callout views

- [accessoryOffset](accessoryoffset.md): An offset that changes the accessory’s default anchor point.
- [canShowCallout](canshowcallout.md): A Boolean value that indicates whether the annotation view is able to display extra information in a callout.
- [rightCalloutAccessoryView](rightcalloutaccessoryview.md): The view to display on the right side of the standard callout.
- [detailCalloutAccessoryView](detailcalloutaccessoryview.md): The detail accessory view to use in the standard callout.
- [leftCalloutOffset](leftcalloutoffset.md): The offset in points from the middle-left of the annotation view.
- [rightCalloutOffset](rightcalloutoffset.md): The offset in points from the middle-right of the annotation view.

# leftCalloutAccessoryView (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The view to display on the left side of the standard callout.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * leftCalloutAccessoryView;
```

```objectivec
@property (nonatomic, strong, nullable) NSView * leftCalloutAccessoryView;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. Typically, you use the left callout view to display information about the annotation or to link to custom information that your app provides.

In an iOS app, if the view you specify is also a descendant of the [UIControl](../../uikit/uicontrol.md) class, you can use the map view’s delegate to receive notifications when the user taps your control. If it doesn’t descend from [UIControl](../../uikit/uicontrol.md), your view is responsible for handling any touch events within its bounds.

In a macOS app, the callout view’s view controller can implement an action method that responds when the user clicks the control in a callout view.

## See Also

### Managing callout views

- [accessoryOffset](accessoryoffset.md): An offset that changes the accessory’s default anchor point.
- [canShowCallout](canshowcallout.md): A Boolean value that indicates whether the annotation view is able to display extra information in a callout.
- [rightCalloutAccessoryView](rightcalloutaccessoryview.md): The view to display on the right side of the standard callout.
- [detailCalloutAccessoryView](detailcalloutaccessoryview.md): The detail accessory view to use in the standard callout.
- [leftCalloutOffset](leftcalloutoffset.md): The offset in points from the middle-left of the annotation view.
- [rightCalloutOffset](rightcalloutoffset.md): The offset in points from the middle-right of the annotation view.
