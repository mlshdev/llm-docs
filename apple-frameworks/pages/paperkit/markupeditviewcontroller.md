> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupeditviewcontroller](https://developer.apple.com/documentation/paperkit/markupeditviewcontroller)

# MarkupEditViewController

**Framework:** PaperKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

A view controller that manages the interface for inserting content into a canvas.

## Declaration

```swift
@MainActor @objc @preconcurrency class MarkupEditViewController
```

## Mentioned In

- [Integrating PaperKit into your app](getting-started-with-paperkit.md)

<a id="overview"></a>

## Overview

Use `MarkupToolbarViewController` for macOS.

## Topics

### Creating a view controller

- [init(supportedFeatureSet:additionalActions:)](markupeditviewcontroller/init%28supportedfeatureset_additionalactions_%29.md): Creates a markup edit view controller.

### Configuring the view controller

- [supportedFeatureSet](markupeditviewcontroller/supportedfeatureset.md): The supported features of this edit UI.
- [delegate](markupeditviewcontroller/delegate-swift.property.md): The delegate for responding to user actions.

### Responding to changes

- [MarkupEditViewController.Delegate](markupeditviewcontroller/delegate-swift.protocol.md)

### Managing view lifecycle

- [viewDidLoad()](markupeditviewcontroller/viewdidload%28%29.md)

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
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
- [MarkupToolbarViewController](markuptoolbarviewcontroller.md)
