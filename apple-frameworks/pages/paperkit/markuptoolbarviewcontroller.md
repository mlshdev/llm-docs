> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuptoolbarviewcontroller](https://developer.apple.com/documentation/paperkit/markuptoolbarviewcontroller)

# MarkupToolbarViewController

**Framework:** PaperKit  
**Kind:** Class  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```swift
@MainActor @objc @preconcurrency class MarkupToolbarViewController
```

## Mentioned In

- [Integrating PaperKit into your app](getting-started-with-paperkit.md)

## Topics

### Creating a toolbar

- [init(supportedFeatureSet:)](markuptoolbarviewcontroller/init%28supportedfeatureset_%29.md): Creates a markup toolbar view controller.
- [init(coder:)](markuptoolbarviewcontroller/init%28coder_%29.md)

### Configuring the toolbar

- [supportedFeatureSet](markuptoolbarviewcontroller/supportedfeatureset.md): The supported features of this toolbar.
- [delegate](markuptoolbarviewcontroller/delegate-swift.property.md): The delegate for responding to user actions.

### Managing touch modes

- [indirectPointerTouchModes](markuptoolbarviewcontroller/indirectpointertouchmodes.md): The modes available for a user to select.
- [selectedIndirectPointerTouchMode](markuptoolbarviewcontroller/selectedindirectpointertouchmode.md): The currently selected pointer mode.

### Managing drawing tools

- [selectedDrawingTool](markuptoolbarviewcontroller/selecteddrawingtool.md): The currently selected drawing tool.
- [selectedDrawingToolItem](markuptoolbarviewcontroller/selecteddrawingtoolitem.md): The currently selected drawing tool.

### Responding to changes

- [MarkupToolbarViewController.Delegate](markuptoolbarviewcontroller/delegate-swift.protocol.md): The delegate for a PaperKit toolbar.

### Managing view lifecycle

- [viewDidLoad()](markuptoolbarviewcontroller/viewdidload%28%29.md)

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### View controllers

- [PaperMarkupViewController](papermarkupviewcontroller.md): A view controller for interactively creating and showing markup.
- [MarkupEditViewController](markupeditviewcontroller.md): A view controller that manages the interface for inserting content into a canvas.
