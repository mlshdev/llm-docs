> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/canshowcallout](https://developer.apple.com/documentation/mapkit/mkannotationview/canshowcallout)

# canShowCallout (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates whether the annotation view is able to display extra information in a callout.

## Declaration

```swift
var canShowCallout: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the map view shows a standard callout  when the user taps a selected annotation view. The callout uses the title and subtitle text from the associated annotation object. If there’s no title text, the map view treats the annotation view as if its [isEnabled](isenabled.md) property is [false](https://developer.apple.com/documentation/swift/false). The callout also displays any custom callout views in the [leftCalloutAccessoryView](leftcalloutaccessoryview.md) and [rightCalloutAccessoryView](rightcalloutaccessoryview.md) properties.

If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the map view ignores the value of the title and subtitle strings, and the annotation view remains in an enabled state by default. You can still disable the view explicitly using the [isEnabled](isenabled.md) property.

## See Also

### Managing callout views

- [accessoryOffset](accessoryoffset.md): An offset that changes the accessory’s default anchor point.
- [leftCalloutAccessoryView](leftcalloutaccessoryview.md): The view to display on the left side of the standard callout.
- [rightCalloutAccessoryView](rightcalloutaccessoryview.md): The view to display on the right side of the standard callout.
- [detailCalloutAccessoryView](detailcalloutaccessoryview.md): The detail accessory view to use in the standard callout.
- [leftCalloutOffset](leftcalloutoffset.md): The offset in points from the middle-left of the annotation view.
- [rightCalloutOffset](rightcalloutoffset.md): The offset in points from the middle-right of the annotation view.

# canShowCallout (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates whether the annotation view is able to display extra information in a callout.

## Declaration

```objectivec
@property (nonatomic) BOOL canShowCallout;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the map view shows a standard callout  when the user taps a selected annotation view. The callout uses the title and subtitle text from the associated annotation object. If there’s no title text, the map view treats the annotation view as if its [enabled](isenabled.md) property is [false](https://developer.apple.com/documentation/swift/false). The callout also displays any custom callout views in the [leftCalloutAccessoryView](leftcalloutaccessoryview.md) and [rightCalloutAccessoryView](rightcalloutaccessoryview.md) properties.

If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the map view ignores the value of the title and subtitle strings, and the annotation view remains in an enabled state by default. You can still disable the view explicitly using the [enabled](isenabled.md) property.

## See Also

### Managing callout views

- [accessoryOffset](accessoryoffset.md): An offset that changes the accessory’s default anchor point.
- [leftCalloutAccessoryView](leftcalloutaccessoryview.md): The view to display on the left side of the standard callout.
- [rightCalloutAccessoryView](rightcalloutaccessoryview.md): The view to display on the right side of the standard callout.
- [detailCalloutAccessoryView](detailcalloutaccessoryview.md): The detail accessory view to use in the standard callout.
- [leftCalloutOffset](leftcalloutoffset.md): The offset in points from the middle-left of the annotation view.
- [rightCalloutOffset](rightcalloutoffset.md): The offset in points from the middle-right of the annotation view.
