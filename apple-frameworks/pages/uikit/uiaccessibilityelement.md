> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityelement](https://developer.apple.com/documentation/uikit/uiaccessibilityelement)

# UIAccessibilityElement (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An element that should be accessible to users with disabilities, but that isn’t accessible by default.

## Declaration

```swift
@MainActor class UIAccessibilityElement
```

## Mentioned In

- [Supporting VoiceOver in your app](supporting-voiceover-in-your-app.md)

<a id="overview"></a>

## Overview

You can use [UIAccessibilityElement](uiaccessibilityelement.md) to provide information about an icon or text image that isn’t automatically accessible because it doesn’t inherit from [UIView](uiview.md) (or [UIControl](uicontrol.md)). A view that contains such nonview items creates an instance of [UIAccessibilityElement](uiaccessibilityelement.md) to represent each item that needs to be accessible.

The properties of an accessibility element provide information about the element, such as location and current value, to an assistive application. You might need to set an element’s property even if you don’t need to create an instance of `UIAccessibilityElement` to represent it. For example, if your app includes a button with a custom icon that means “solve,” the button itself is already represented by an accessibility element because it’s a subclass of [UIButton](uibutton.md). However, you need to supply information for the label and hint properties because this information is unique to this button. You can do this in Interface Builder or by setting the properties in the [UIAccessibility](uiaccessibility-protocol.md) informal protocol.

## Topics

### Creating an accessibility element

- [init(accessibilityContainer:)](uiaccessibilityelement/init%28accessibilitycontainer_%29.md): Creates and initializes an accessibility element to represent an item in the specified container.

### Accessing the containing view

- [accessibilityContainer](uiaccessibilityelement/accessibilitycontainer.md): The view that contains the accessibility element.

### Determining accessibility

- [isAccessibilityElement](uiaccessibilityelement/isaccessibilityelement.md): A Boolean value indicating whether the item is an accessibility element an assistive application can access.

### Accessing the attributes of an accessibility element

- [accessibilityLabel](uiaccessibilityelement/accessibilitylabel.md): A string that succinctly identifies the accessibility element.
- [accessibilityHint](uiaccessibilityelement/accessibilityhint.md): A string that briefly describes the result of performing an action on the accessibility element.
- [accessibilityValue](uiaccessibilityelement/accessibilityvalue.md): A string that represents the current value of the accessibility element.
- [accessibilityFrame](uiaccessibilityelement/accessibilityframe.md): The frame of the accessibility element, in screen coordinates.
- [accessibilityFrameInContainerSpace](uiaccessibilityelement/accessibilityframeincontainerspace.md): The frame of the accessibility element, in the coordinate space of its container view.
- [accessibilityTraits](uiaccessibilityelement/accessibilitytraits.md): The combination of traits that best characterize the accessibility element.

## Relationships

### Inherits From

- [UIResponder](uiresponder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Elements

- [UIScrollViewAccessibilityDelegate](uiscrollviewaccessibilitydelegate.md): A set of methods you can implement to provide accessibility information for a scroll view.
- [UIPickerViewAccessibilityDelegate](uipickerviewaccessibilitydelegate.md): A set of methods you can implement to provide accessibility information for individual components of a picker view.

# UIAccessibilityElement (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An element that should be accessible to users with disabilities, but that isn’t accessible by default.

## Declaration

```objectivec
@interface UIAccessibilityElement : UIResponder
```

## Mentioned In

- [Supporting VoiceOver in your app](supporting-voiceover-in-your-app.md)

<a id="overview"></a>

## Overview

You can use [UIAccessibilityElement](uiaccessibilityelement.md) to provide information about an icon or text image that isn’t automatically accessible because it doesn’t inherit from [UIView](uiview.md) (or [UIControl](uicontrol.md)). A view that contains such nonview items creates an instance of [UIAccessibilityElement](uiaccessibilityelement.md) to represent each item that needs to be accessible.

The properties of an accessibility element provide information about the element, such as location and current value, to an assistive application. You might need to set an element’s property even if you don’t need to create an instance of `UIAccessibilityElement` to represent it. For example, if your app includes a button with a custom icon that means “solve,” the button itself is already represented by an accessibility element because it’s a subclass of [UIButton](uibutton.md). However, you need to supply information for the label and hint properties because this information is unique to this button. You can do this in Interface Builder or by setting the properties in the [UIAccessibility](uiaccessibility-protocol.md) informal protocol.

## Topics

### Creating an accessibility element

- [initWithAccessibilityContainer:](uiaccessibilityelement/init%28accessibilitycontainer_%29.md): Creates and initializes an accessibility element to represent an item in the specified container.

### Accessing the containing view

- [accessibilityContainer](uiaccessibilityelement/accessibilitycontainer.md): The view that contains the accessibility element.

### Determining accessibility

- [isAccessibilityElement](uiaccessibilityelement/isaccessibilityelement.md): A Boolean value indicating whether the item is an accessibility element an assistive application can access.

### Accessing the attributes of an accessibility element

- [accessibilityLabel](uiaccessibilityelement/accessibilitylabel.md): A string that succinctly identifies the accessibility element.
- [accessibilityHint](uiaccessibilityelement/accessibilityhint.md): A string that briefly describes the result of performing an action on the accessibility element.
- [accessibilityValue](uiaccessibilityelement/accessibilityvalue.md): A string that represents the current value of the accessibility element.
- [accessibilityFrame](uiaccessibilityelement/accessibilityframe.md): The frame of the accessibility element, in screen coordinates.
- [accessibilityFrameInContainerSpace](uiaccessibilityelement/accessibilityframeincontainerspace.md): The frame of the accessibility element, in the coordinate space of its container view.
- [accessibilityTraits](uiaccessibilityelement/accessibilitytraits.md): The combination of traits that best characterize the accessibility element.

## Relationships

### Inherits From

- [UIResponder](uiresponder.md)

### Conforms To

- [UIAccessibilityIdentification](uiaccessibilityidentification.md)

## See Also

### Elements

- [UIScrollViewAccessibilityDelegate](uiscrollviewaccessibilitydelegate.md): A set of methods you can implement to provide accessibility information for a scroll view.
- [UIPickerViewAccessibilityDelegate](uipickerviewaccessibilitydelegate.md): A set of methods you can implement to provide accessibility information for individual components of a picker view.
