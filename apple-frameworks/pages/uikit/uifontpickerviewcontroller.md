> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontpickerviewcontroller](https://developer.apple.com/documentation/uikit/uifontpickerviewcontroller)

# UIFontPickerViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that manages the interface for selecting a font that the system provides or the user installs.

## Declaration

```swift
@MainActor class UIFontPickerViewController
```

<a id="overview"></a>

## Overview

Use a [UIFontPickerViewController](uifontpickerviewcontroller.md) to provide the user access to all the fonts on their device. Directly querying [UIFont](uifont.md) provides only system fonts, but the user may have additional fonts on their device. When the user selects one of these nonsystem fonts in the font picker, the system grants your app access to the font.

The font picker has several customization options collected into a [UIFontPickerViewController.Configuration](uifontpickerviewcontroller/configuration-swift.class.md) object. For example, you can set [includeFaces](uifontpickerviewcontroller/configuration-swift.class/includefaces.md) to [true](https://developer.apple.com/documentation/swift/true) so that the user can select not only the font but a bold or italic face within that font family. Customize the configuration object first, then pass it as an argument in the font picker’s [init(configuration:)](uifontpickerviewcontroller/init%28configuration_%29.md) method.

```swift
    func showFontPicker(_ sender: Any) {
        let fontConfig = UIFontPickerViewController.Configuration()
        fontConfig.includeFaces = true
        let fontPicker = UIFontPickerViewController(configuration: fontConfig)
        fontPicker.delegate = self
        self.present(fontPicker, animated: true, completion: nil)
    }
```

When your [UIFontPickerViewControllerDelegate](uifontpickerviewcontrollerdelegate.md) receives [fontPickerViewControllerDidPickFont(\_:)](uifontpickerviewcontrollerdelegate/fontpickerviewcontrollerdidpickfont%28__%29.md), retrieve information about the user’s selected font from the font picker’s [selectedFontDescriptor](uifontpickerviewcontroller/selectedfontdescriptor.md).

## Topics

### Configuring a font picker to display in iOS

- [init(configuration:)](uifontpickerviewcontroller/init%28configuration_%29.md): Creates a controller for a font picker view.
- [configuration](uifontpickerviewcontroller/configuration-swift.property.md): Settings for fonts the font picker should offer to the user and how to display those fonts.
- [UIFontPickerViewController.Configuration](uifontpickerviewcontroller/configuration-swift.class.md): The filters and display settings a font picker view controller uses to set up a font picker.

### Responding to font picker interactions

- [delegate](uifontpickerviewcontroller/delegate.md): The object that handles messages about the user’s interaction with a font picker.
- [UIFontPickerViewControllerDelegate](uifontpickerviewcontrollerdelegate.md): A set of optional methods for receiving messages about the user’s interaction with the font picker.
- [selectedFontDescriptor](uifontpickerviewcontroller/selectedfontdescriptor.md): Information about the font family or face selected by the user in the font picker.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContentContainer](uicontentcontainer.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIStateRestoring](uistaterestoring.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Font picker

- [UIFontPickerViewControllerDelegate](uifontpickerviewcontrollerdelegate.md): A set of optional methods for receiving messages about the user’s interaction with the font picker.
- [UIFontPickerViewController.Configuration](uifontpickerviewcontroller/configuration-swift.class.md): The filters and display settings a font picker view controller uses to set up a font picker.

# UIFontPickerViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that manages the interface for selecting a font that the system provides or the user installs.

## Declaration

```objectivec
@interface UIFontPickerViewController : UIViewController
```

<a id="overview"></a>

## Overview

Use a [UIFontPickerViewController](uifontpickerviewcontroller.md) to provide the user access to all the fonts on their device. Directly querying [UIFont](uifont.md) provides only system fonts, but the user may have additional fonts on their device. When the user selects one of these nonsystem fonts in the font picker, the system grants your app access to the font.

The font picker has several customization options collected into a [UIFontPickerViewControllerConfiguration](uifontpickerviewcontroller/configuration-swift.class.md) object. For example, you can set [includeFaces](uifontpickerviewcontroller/configuration-swift.class/includefaces.md) to [true](https://developer.apple.com/documentation/swift/true) so that the user can select not only the font but a bold or italic face within that font family. Customize the configuration object first, then pass it as an argument in the font picker’s [initWithConfiguration:](uifontpickerviewcontroller/init%28configuration_%29.md) method.

```swift
    func showFontPicker(_ sender: Any) {
        let fontConfig = UIFontPickerViewController.Configuration()
        fontConfig.includeFaces = true
        let fontPicker = UIFontPickerViewController(configuration: fontConfig)
        fontPicker.delegate = self
        self.present(fontPicker, animated: true, completion: nil)
    }
```

When your [UIFontPickerViewControllerDelegate](uifontpickerviewcontrollerdelegate.md) receives [fontPickerViewControllerDidPickFont:](uifontpickerviewcontrollerdelegate/fontpickerviewcontrollerdidpickfont%28__%29.md), retrieve information about the user’s selected font from the font picker’s [selectedFontDescriptor](uifontpickerviewcontroller/selectedfontdescriptor.md).

## Topics

### Configuring a font picker to display in iOS

- [initWithConfiguration:](uifontpickerviewcontroller/init%28configuration_%29.md): Creates a controller for a font picker view.
- [configuration](uifontpickerviewcontroller/configuration-swift.property.md): Settings for fonts the font picker should offer to the user and how to display those fonts.
- [UIFontPickerViewControllerConfiguration](uifontpickerviewcontroller/configuration-swift.class.md): The filters and display settings a font picker view controller uses to set up a font picker.

### Responding to font picker interactions

- [delegate](uifontpickerviewcontroller/delegate.md): The object that handles messages about the user’s interaction with a font picker.
- [UIFontPickerViewControllerDelegate](uifontpickerviewcontrollerdelegate.md): A set of optional methods for receiving messages about the user’s interaction with the font picker.
- [selectedFontDescriptor](uifontpickerviewcontroller/selectedfontdescriptor.md): Information about the font family or face selected by the user in the font picker.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

## See Also

### Font picker

- [UIFontPickerViewControllerDelegate](uifontpickerviewcontrollerdelegate.md): A set of optional methods for receiving messages about the user’s interaction with the font picker.
- [UIFontPickerViewControllerConfiguration](uifontpickerviewcontroller/configuration-swift.class.md): The filters and display settings a font picker view controller uses to set up a font picker.
