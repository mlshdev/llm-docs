> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller)

# ImagePlaygroundViewController

**Framework:** Image Playground  
**Kind:** Class  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

Displays a standard system interface to generate images from the provided input.

## Declaration

```swift
@MainActor @objc @preconcurrency class ImagePlaygroundViewController
```

<a id="overview"></a>

## Overview

Present an [ImagePlaygroundViewController](imageplaygroundviewcontroller.md) to display a standard system interface to generate images from a description you provide. People use the view controller interface to generate images and experiment with the contents before returning an image to your app. You can then incorporate that image into your app’s content.

Create an [ImagePlaygroundViewController](imageplaygroundviewcontroller.md) and configure it with an initial description of the image you want before you present it. Specify a text-based description of the image using the [concepts](imageplaygroundviewcontroller/concepts.md) property. If you have a starting image that you want to use to create the new image, specify your image in the [sourceImage](imageplaygroundviewcontroller/sourceimage.md) property.

Present this view controller from your interface and wait for it to deliver results to your custom [delegate](imageplaygroundviewcontroller/delegate-swift.property.md) object. If the person approves the image, the view controller sends that image to your app via this delegate object. The view controller also notifies your delegate if the person cancels the operation.

## Topics

### Creating the view controller

- [init()](imageplaygroundviewcontroller/init%28%29.md): Creates a new image-generation view controller for you to present.

### Processing a generated image

- [delegate](imageplaygroundviewcontroller/delegate-swift.property.md): The delegate object that receives the generated image and handles events from the view controller.
- [ImagePlaygroundViewController.Delegate](imageplaygroundviewcontroller/delegate-swift.protocol.md): An interface you use to receive images and handle events related to an image-generation view controller.

### Specifying the configuration of the playground

- [selectedGenerationStyle](imageplaygroundviewcontroller/selectedgenerationstyle.md): Generation style to pre-select upong launching the playground among those in `allowedGenerationStyles`.
- [allowedGenerationStyles](imageplaygroundviewcontroller/allowedgenerationstyles.md): A list of allowed generation styles to choose from in the playground.
- [personalizationPolicy](imageplaygroundviewcontroller/personalizationpolicy.md): Deprecated. The policy to apply when determining whether to include people in generated images.
- [ImagePlaygroundPersonalizationPolicy](imageplaygroundpersonalizationpolicy.md): Deprecated. An option for enabling or disabling personalization in the system interface.

### Specifying the source content

- [concepts](imageplaygroundviewcontroller/concepts.md): An array of elements that describes the expected contents of the image.
- [sourceImage](imageplaygroundviewcontroller/sourceimage.md): An image to use as source input for generating the new image.

### Getting the feature availability

- [isAvailable](imageplaygroundviewcontroller/isavailable.md): A Boolean value that indicates whether image generation is available on the current device.

### Managing the view

- [viewDidLoad()](imageplaygroundviewcontroller/viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [viewDidDisappear()](imageplaygroundviewcontroller/viewdiddisappear%28%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
- [viewWillAppear()](imageplaygroundviewcontroller/viewwillappear%28%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.

### Instance Properties

- [isModalInPresentation](imageplaygroundviewcontroller/ismodalinpresentation.md): A Boolean value indicating whether the view controller enforces a modal behavior.
- [modalPresentationStyle](imageplaygroundviewcontroller/modalpresentationstyle.md): The presentation style for modal view controllers.
- [options](imageplaygroundviewcontroller/options.md): Options that influence the image-generation process.
- [preferredContentSize](imageplaygroundviewcontroller/preferredcontentsize.md): The preferred size for the view controller’s view.

### Instance Methods

- [viewDidDisappear(\_:)](imageplaygroundviewcontroller/viewdiddisappear%28__%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
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
