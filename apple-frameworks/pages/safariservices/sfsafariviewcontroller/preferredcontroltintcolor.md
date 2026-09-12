> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontroller/preferredcontroltintcolor](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/preferredcontroltintcolor)

# preferredControlTintColor (Swift)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 26.0) · iPadOS 10.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0)

The color to tint the control buttons on the navigation bar and the toolbar.

> Tinting the controls interferes with background effects that the system provides.

## Declaration

```swift
var preferredControlTintColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

This color preference is ignored if the view controller is in Private Browsing mode or displaying an antiphishing warning. After the view controller is presented, changes made are not reflected. Use `preferredControlTintColor` instead of setting the view’s [tintColor](../../uikit/uiview/tintcolor.md) property.

## See Also

### Configuring the View Controller

- [configuration](configuration-swift.property.md): A copy of the Safari view controller’s initialized configuration.
- [dismissButtonStyle](dismissbuttonstyle-swift.property.md): The style of dismiss button to use in the navigation bar to close the Safari view controller.
- [SFSafariViewController.DismissButtonStyle](dismissbuttonstyle-swift.enum.md)
- [preferredBarTintColor](preferredbartintcolor.md): Deprecated. The color to tint the background of the navigation bar and the toolbar.

# preferredControlTintColor (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 26.0) · iPadOS 10.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0)

The color to tint the control buttons on the navigation bar and the toolbar.

> Tinting the controls interferes with background effects that the system provides.

## Declaration

```objectivec
@property (nonatomic, nullable) UIColor * preferredControlTintColor;
```

<a id="Discussion"></a>

## Discussion

This color preference is ignored if the view controller is in Private Browsing mode or displaying an antiphishing warning. After the view controller is presented, changes made are not reflected. Use `preferredControlTintColor` instead of setting the view’s [tintColor](../../uikit/uiview/tintcolor.md) property.

## See Also

### Configuring the View Controller

- [configuration](configuration-swift.property.md): A copy of the Safari view controller’s initialized configuration.
- [dismissButtonStyle](dismissbuttonstyle-swift.property.md): The style of dismiss button to use in the navigation bar to close the Safari view controller.
- [SFSafariViewControllerDismissButtonStyle](dismissbuttonstyle-swift.enum.md)
- [preferredBarTintColor](preferredbartintcolor.md): Deprecated. The color to tint the background of the navigation bar and the toolbar.
