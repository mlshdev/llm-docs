> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontroller/dismissbuttonstyle-swift.property](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/dismissbuttonstyle-swift.property)

# dismissButtonStyle (Swift)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The style of dismiss button to use in the navigation bar to close the Safari view controller.

## Declaration

```swift
var dismissButtonStyle: SFSafariViewController.DismissButtonStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The Safari view controller sets dismissButtonStyle to [SFSafariViewController.DismissButtonStyle.close](dismissbuttonstyle-swift.enum/close.md) during initialization, displaying “xmark” icon by default. You can use other values such as [SFSafariViewController.DismissButtonStyle.done](dismissbuttonstyle-swift.enum/done.md) to show “checkmark” icon to provide consistency with your app.

## See Also

### Configuring the View Controller

- [configuration](configuration-swift.property.md): A copy of the Safari view controller’s initialized configuration.
- [SFSafariViewController.DismissButtonStyle](dismissbuttonstyle-swift.enum.md)
- [preferredBarTintColor](preferredbartintcolor.md): Deprecated. The color to tint the background of the navigation bar and the toolbar.
- [preferredControlTintColor](preferredcontroltintcolor.md): Deprecated. The color to tint the control buttons on the navigation bar and the toolbar.

# dismissButtonStyle (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The style of dismiss button to use in the navigation bar to close the Safari view controller.

## Declaration

```objectivec
@property (nonatomic) SFSafariViewControllerDismissButtonStyle dismissButtonStyle;
```

<a id="Discussion"></a>

## Discussion

The Safari view controller sets dismissButtonStyle to [SFSafariViewControllerDismissButtonStyleClose](dismissbuttonstyle-swift.enum/close.md) during initialization, displaying “xmark” icon by default. You can use other values such as [SFSafariViewControllerDismissButtonStyleDone](dismissbuttonstyle-swift.enum/done.md) to show “checkmark” icon to provide consistency with your app.

## See Also

### Configuring the View Controller

- [configuration](configuration-swift.property.md): A copy of the Safari view controller’s initialized configuration.
- [SFSafariViewControllerDismissButtonStyle](dismissbuttonstyle-swift.enum.md)
- [preferredBarTintColor](preferredbartintcolor.md): Deprecated. The color to tint the background of the navigation bar and the toolbar.
- [preferredControlTintColor](preferredcontroltintcolor.md): Deprecated. The color to tint the control buttons on the navigation bar and the toolbar.
