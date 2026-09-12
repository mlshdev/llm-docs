> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerviewcontroller](https://developer.apple.com/documentation/photosui/phpickerviewcontroller)

# PHPickerViewController (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+

A view controller that provides the user interface for choosing assets from the photo library.

## Declaration

```swift
class PHPickerViewController
```

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

<a id="overview"></a>

## Overview

The `PHPickerViewController` class is an alternative to [UIImagePickerController](../uikit/uiimagepickercontroller.md). `PHPickerViewController` improves stability and reliability, and includes several benefits to developers and users, such as the following:

- Deferred image loading and recovery UI
- Reliable handling of large and complex assets, like RAW and panoramic images
- User-selectable assets that aren’t available for [UIImagePickerController](../uikit/uiimagepickercontroller.md)
- Configuration of the picker to display only Live Photos
- Availability of [PHLivePhoto](../photos/phlivephoto.md) objects without library access
- Stricter validations against invalid inputs

<a id="Observe-required-viewing-standards"></a>

### Observe required viewing standards

As a view controller that the system renders on top of your app, the picker controller requires certain prerequisites for operation that your app needs to observe:

- The picker controller disables user interaction if an app alters its visibility, such as by adjusting the [opacity](../quartzcore/calayer/opacity.md) of its view’s layer. In iOS 17 and later, the picker controller ignores touch events while its opacity is anything other than fully opaque.
- As a system-rendered UI, you can’t subclass [PHPickerViewController](phpickerviewcontroller.md). Its view hierarchy belongs to the system and therefore, the framework provides no access.

## Topics

### Creating a picker

- [init(configuration:)](phpickerviewcontroller/init%28configuration_%29.md): Creates a new picker view controller with the configuration you specify.
- [PHPickerConfiguration](phpickerconfiguration-swift.struct.md): An object that contains information about how to configure a picker view controller.

### Managing the configuration

- [configuration](phpickerviewcontroller/configuration-17a8p.md): The configuration you specify when creating the picker.
- [updatePicker(using:)](phpickerviewcontroller/updatepicker%28using_%29.md): Customizes your app’s photo picker according to the given configuration.

### Setting content position and scale

- [scrollToInitialPosition()](phpickerviewcontroller/scrolltoinitialposition%28%29.md): Resets the visible photo thumbnails by scrolling the view to the picker’s initial position.
- [zoomIn()](phpickerviewcontroller/zoomin%28%29.md): Changes the picker’s content scale by making the photo thumbnails larger in the view.
- [zoomOut()](phpickerviewcontroller/zoomout%28%29.md): Changes the picker’s content scale by making the photo thumbnails smaller in the view.

### Responding to user selection

- [delegate](phpickerviewcontroller/delegate-3zqmt.md): The picker’s delegate object.
- [PHPickerViewControllerDelegate](phpickerviewcontrollerdelegate-5yntc.md): A set of methods that the delegate must implement to respond to `PHPickerViewController` user events.
- [PHPickerResult](phpickerresult-swift.struct.md): Types that represent a selected asset from a person’s photo library.

### Deselecting assets

- [deselectAssets(withIdentifiers:)](phpickerviewcontroller/deselectassets%28withidentifiers_%29.md): Deselects assets that are in a selected state.

### Reordering assets

- [moveAsset(withIdentifier:afterAssetWithIdentifier:)](phpickerviewcontroller/moveasset%28withidentifier_afterassetwithidentifier_%29.md): Reorders assets that are in a selected state.

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

## See Also

### Photos picker for UIKit, AppKit

- [Selecting Photos and Videos in iOS](../photokit/selecting-photos-and-videos-in-ios.md): Improve the user experience of finding and selecting assets by using the Photos picker.
- [PHPickerViewControllerDelegate](phpickerviewcontrollerdelegate-5yntc.md): A set of methods that the delegate must implement to respond to `PHPickerViewController` user events.
- [PHPickerConfiguration](phpickerconfiguration-swift.struct.md): An object that contains information about how to configure a picker view controller.
- [PHPickerFilter](phpickerfilter-swift.struct.md): A type that defines the filter to apply to the photo library.
- [PHPickerResult](phpickerresult-swift.struct.md): Types that represent a selected asset from a person’s photo library.

# PHPickerViewController (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+

A view controller that provides the user interface for choosing assets from the photo library.

## Declaration

```objectivec
@interface PHPickerViewController : UIViewController
```

```objectivec
@interface PHPickerViewController : NSViewController
```

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

<a id="overview"></a>

## Overview

The `PHPickerViewController` class is an alternative to [UIImagePickerController](../uikit/uiimagepickercontroller.md). `PHPickerViewController` improves stability and reliability, and includes several benefits to developers and users, such as the following:

- Deferred image loading and recovery UI
- Reliable handling of large and complex assets, like RAW and panoramic images
- User-selectable assets that aren’t available for [UIImagePickerController](../uikit/uiimagepickercontroller.md)
- Configuration of the picker to display only Live Photos
- Availability of [PHLivePhoto](../photos/phlivephoto.md) objects without library access
- Stricter validations against invalid inputs

<a id="Observe-required-viewing-standards"></a>

### Observe required viewing standards

As a view controller that the system renders on top of your app, the picker controller requires certain prerequisites for operation that your app needs to observe:

- The picker controller disables user interaction if an app alters its visibility, such as by adjusting the [opacity](../quartzcore/calayer/opacity.md) of its view’s layer. In iOS 17 and later, the picker controller ignores touch events while its opacity is anything other than fully opaque.
- As a system-rendered UI, you can’t subclass [PHPickerViewController](phpickerviewcontroller.md). Its view hierarchy belongs to the system and therefore, the framework provides no access.

## Topics

### Creating a picker

- [initWithConfiguration:](https://developer.apple.com/documentation/photosui/phpickerviewcontroller/initwithconfiguration:): Creates a new picker view controller with the configuration you specify.
- [PHPickerConfiguration](https://developer.apple.com/documentation/photosui/phpickerconfiguration-c.class): An object that contains information about how to configure a picker view controller.

### Managing the configuration

- [configuration](https://developer.apple.com/documentation/photosui/phpickerviewcontroller/configuration-3vf53): The configuration you specify when creating the picker.
- [updatePickerUsingConfiguration:](https://developer.apple.com/documentation/photosui/phpickerviewcontroller/updatepickerusingconfiguration:): Customizes your app’s photo picker according to the given configuration.

### Setting content position and scale

- [scrollToInitialPosition](phpickerviewcontroller/scrolltoinitialposition%28%29.md): Resets the visible photo thumbnails by scrolling the view to the picker’s initial position.
- [zoomIn](phpickerviewcontroller/zoomin%28%29.md): Changes the picker’s content scale by making the photo thumbnails larger in the view.
- [zoomOut](phpickerviewcontroller/zoomout%28%29.md): Changes the picker’s content scale by making the photo thumbnails smaller in the view.

### Responding to user selection

- [delegate](https://developer.apple.com/documentation/photosui/phpickerviewcontroller/delegate-8dlnb): The picker’s delegate object.
- [PHPickerViewControllerDelegate](https://developer.apple.com/documentation/photosui/phpickerviewcontrollerdelegate-9y5xc): A protocol the picker uses to communicate user selections.
- [PHPickerResult](https://developer.apple.com/documentation/photosui/phpickerresult-c.class): Types that represent a selected asset from a person’s photo library.

### Deselecting assets

- [deselectAssetsWithIdentifiers:](phpickerviewcontroller/deselectassets%28withidentifiers_%29.md): Deselects assets that are in a selected state.

### Reordering assets

- [moveAssetWithIdentifier:afterAssetWithIdentifier:](phpickerviewcontroller/moveasset%28withidentifier_afterassetwithidentifier_%29.md): Reorders assets that are in a selected state.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Photos picker for UIKit, AppKit

- [Selecting Photos and Videos in iOS](../photokit/selecting-photos-and-videos-in-ios.md): Improve the user experience of finding and selecting assets by using the Photos picker.
- [PHPickerConfiguration](https://developer.apple.com/documentation/photosui/phpickerconfiguration-c.class): An object that contains information about how to configure a picker view controller.
- [PHPickerFilter](https://developer.apple.com/documentation/photosui/phpickerfilter-c.class): A type that defines the filter to apply to the photo library.
- [PHPickerResult](https://developer.apple.com/documentation/photosui/phpickerresult-c.class): Types that represent a selected asset from a person’s photo library.
