> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/layoutmargins](https://developer.apple.com/documentation/uikit/uipopovercontroller/layoutmargins)

# layoutMargins (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The margins that define the portion of the screen in which it is permissible to display the popover.

## Declaration

```swift
var layoutMargins: UIEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

The edge inset values are measured in points from the edges of the screen, relative to the current device orientation. Thus, the top-edge inset always reflects the top edge of the device from the user’s perspective, which changes depending on whether the user is holding the device in a portrait or landscape orientation. Remember that the device orientation is not always the same as the interface orientation—that is, the orientation of your window and views. Window orientations are typically fixed and view orientations are controlled by the owning view controller. In addition, if the rotation lock option is engaged, the interface does not change orientation at all, even when the device orientation changes.

The default edge insets are 10 points along each edge. The popover controller automatically subtracts the status bar from the viable area when determining where to display the popover, so you do not need to factor the status bar height into your insets.

## See Also

### Customizing the popover appearance

- [backgroundViewClass](backgroundviewclass.md): Deprecated. The class to use for displaying the popover background content.
- [backgroundColor](backgroundcolor.md): Deprecated. The color of the popover’s backdrop view.

# popoverLayoutMargins (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The margins that define the portion of the screen in which it is permissible to display the popover.

## Declaration

```objectivec
@property (nonatomic, readwrite) UIEdgeInsets popoverLayoutMargins;
```

<a id="Discussion"></a>

## Discussion

The edge inset values are measured in points from the edges of the screen, relative to the current device orientation. Thus, the top-edge inset always reflects the top edge of the device from the user’s perspective, which changes depending on whether the user is holding the device in a portrait or landscape orientation. Remember that the device orientation is not always the same as the interface orientation—that is, the orientation of your window and views. Window orientations are typically fixed and view orientations are controlled by the owning view controller. In addition, if the rotation lock option is engaged, the interface does not change orientation at all, even when the device orientation changes.

The default edge insets are 10 points along each edge. The popover controller automatically subtracts the status bar from the viable area when determining where to display the popover, so you do not need to factor the status bar height into your insets.

## See Also

### Customizing the popover appearance

- [popoverBackgroundViewClass](backgroundviewclass.md): Deprecated. The class to use for displaying the popover background content.
- [backgroundColor](backgroundcolor.md): Deprecated. The color of the popover’s backdrop view.
