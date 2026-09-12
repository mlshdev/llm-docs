> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontroller/configuration-swift.property](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/configuration-swift.property)

# configuration (Swift)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A copy of the Safari view controller’s initialized configuration.

## Declaration

```swift
@NSCopying var configuration: SFSafariViewController.Configuration { get }
```

<a id="Discussion"></a>

## Discussion

See [SFSafariViewController.Configuration](configuration-swift.class.md) for configuration properties.

## See Also

### Configuring the View Controller

- [dismissButtonStyle](dismissbuttonstyle-swift.property.md): The style of dismiss button to use in the navigation bar to close the Safari view controller.
- [SFSafariViewController.DismissButtonStyle](dismissbuttonstyle-swift.enum.md)
- [preferredBarTintColor](preferredbartintcolor.md): Deprecated. The color to tint the background of the navigation bar and the toolbar.
- [preferredControlTintColor](preferredcontroltintcolor.md): Deprecated. The color to tint the control buttons on the navigation bar and the toolbar.

# configuration (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A copy of the Safari view controller’s initialized configuration.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) SFSafariViewControllerConfiguration * configuration;
```

<a id="Discussion"></a>

## Discussion

See [SFSafariViewControllerConfiguration](configuration-swift.class.md) for configuration properties.

## See Also

### Configuring the View Controller

- [dismissButtonStyle](dismissbuttonstyle-swift.property.md): The style of dismiss button to use in the navigation bar to close the Safari view controller.
- [SFSafariViewControllerDismissButtonStyle](dismissbuttonstyle-swift.enum.md)
- [preferredBarTintColor](preferredbartintcolor.md): Deprecated. The color to tint the background of the navigation bar and the toolbar.
- [preferredControlTintColor](preferredcontroltintcolor.md): Deprecated. The color to tint the control buttons on the navigation bar and the toolbar.
