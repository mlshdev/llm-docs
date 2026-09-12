> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomaction](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction)

# UIAccessibilityCustomAction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A custom action to perform on an accessible object.

## Declaration

```swift
@MainActor class UIAccessibilityCustomAction
```

<a id="overview"></a>

## Overview

Apps that support custom actions can create instances of this class, specifying the user-readable name of the action and the object and selector to use when performing the action. Assistive apps display custom actions in response to specific user cues. For example, VoiceOver lets users access actions quickly using the Actions rotor.

After creating an instance of this class, add it to the [accessibilityCustomActions](../objectivec/nsobject-swift.class/accessibilitycustomactions.md) property of an appropriate accessible object.

## Topics

### Creating a custom action

- [init(name:actionHandler:)](uiaccessibilitycustomaction/init%28name_actionhandler_%29.md): Creates a custom action object with the specified name and action handler.
- [init(name:target:selector:)](uiaccessibilitycustomaction/init%28name_target_selector_%29.md): Creates a custom action object with the specified name, target, and selector.
- [init(name:image:actionHandler:)](uiaccessibilitycustomaction/init%28name_image_actionhandler_%29.md): Creates a custom action object with the specified name, image, and action handler.
- [init(name:image:target:selector:)](uiaccessibilitycustomaction/init%28name_image_target_selector_%29.md): Creates a custom action object with the specified name, image, target, and selector.
- [init(attributedName:actionHandler:)](uiaccessibilitycustomaction/init%28attributedname_actionhandler_%29.md): Creates a custom action object with the specified attributed name and action handler.
- [init(attributedName:target:selector:)](uiaccessibilitycustomaction/init%28attributedname_target_selector_%29.md): Creates a custom action object with the specified attributed name, target, and selector.
- [init(attributedName:image:actionHandler:)](uiaccessibilitycustomaction/init%28attributedname_image_actionhandler_%29.md): Creates a custom action object with the specified attributed name, image, and action handler.
- [init(attributedName:image:target:selector:)](uiaccessibilitycustomaction/init%28attributedname_image_target_selector_%29.md): Creates a custom action object with the specified attributed name, image, target, and selector.

### Accessing the action parameters

- [name](uiaccessibilitycustomaction/name.md): The localized name of the action.
- [attributedName](uiaccessibilitycustomaction/attributedname.md): The localized name of the action as an attributed string.
- [image](uiaccessibilitycustomaction/image.md): An image that represents the action in assistive apps.
- [actionHandler](uiaccessibilitycustomaction/actionhandler.md): A handler to perform for the action.
- [target](uiaccessibilitycustomaction/target.md): The object that performs the action.
- [selector](uiaccessibilitycustomaction/selector.md): The method that performs the action.
- [UIAccessibilityCustomAction.Handler](uiaccessibilitycustomaction/handler.md): A closure type that defines a handler to perform for an action.

### Type Properties

A constant that represents the custom action’s edit rotor category.

- [editCategory](uiaccessibilitycustomaction/editcategory.md): A constant that an app specifies through the category property on a UIKit accessibility custom action.
- [editCategory](uiaccessibilitycustomaction/editcategory.md): A constant that an app specifies through the category property on a UIKit accessibility custom action.

### Instance Properties

- [category](uiaccessibilitycustomaction/category.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Actions

- [UIAccessibilityAction](../objectivec/uiaccessibilityaction.md): A set of methods that accessibility elements can use to support specific actions.
- [UIAccessibilityCustomAction.Handler](uiaccessibilitycustomaction/handler.md): A closure type that defines a handler to perform for an action.
- [Delivering an exceptional accessibility experience](../accessibility/delivering_an_exceptional_accessibility_experience.md): Make improvements to your app’s interaction model to support assistive technologies such as VoiceOver.

# UIAccessibilityCustomAction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A custom action to perform on an accessible object.

## Declaration

```objectivec
@interface UIAccessibilityCustomAction : NSObject
```

<a id="overview"></a>

## Overview

Apps that support custom actions can create instances of this class, specifying the user-readable name of the action and the object and selector to use when performing the action. Assistive apps display custom actions in response to specific user cues. For example, VoiceOver lets users access actions quickly using the Actions rotor.

After creating an instance of this class, add it to the [accessibilityCustomActions](../objectivec/nsobject-swift.class/accessibilitycustomactions.md) property of an appropriate accessible object.

## Topics

### Creating a custom action

- [initWithName:actionHandler:](uiaccessibilitycustomaction/init%28name_actionhandler_%29.md): Creates a custom action object with the specified name and action handler.
- [initWithName:target:selector:](uiaccessibilitycustomaction/init%28name_target_selector_%29.md): Creates a custom action object with the specified name, target, and selector.
- [initWithName:image:actionHandler:](uiaccessibilitycustomaction/init%28name_image_actionhandler_%29.md): Creates a custom action object with the specified name, image, and action handler.
- [initWithName:image:target:selector:](uiaccessibilitycustomaction/init%28name_image_target_selector_%29.md): Creates a custom action object with the specified name, image, target, and selector.
- [initWithAttributedName:actionHandler:](uiaccessibilitycustomaction/init%28attributedname_actionhandler_%29.md): Creates a custom action object with the specified attributed name and action handler.
- [initWithAttributedName:target:selector:](uiaccessibilitycustomaction/init%28attributedname_target_selector_%29.md): Creates a custom action object with the specified attributed name, target, and selector.
- [initWithAttributedName:image:actionHandler:](uiaccessibilitycustomaction/init%28attributedname_image_actionhandler_%29.md): Creates a custom action object with the specified attributed name, image, and action handler.
- [initWithAttributedName:image:target:selector:](uiaccessibilitycustomaction/init%28attributedname_image_target_selector_%29.md): Creates a custom action object with the specified attributed name, image, target, and selector.

### Accessing the action parameters

- [name](uiaccessibilitycustomaction/name.md): The localized name of the action.
- [attributedName](uiaccessibilitycustomaction/attributedname.md): The localized name of the action as an attributed string.
- [image](uiaccessibilitycustomaction/image.md): An image that represents the action in assistive apps.
- [actionHandler](uiaccessibilitycustomaction/actionhandler.md): A handler to perform for the action.
- [target](uiaccessibilitycustomaction/target.md): The object that performs the action.
- [selector](uiaccessibilitycustomaction/selector.md): The method that performs the action.
- [UIAccessibilityCustomActionHandler](uiaccessibilitycustomaction/handler.md): A closure type that defines a handler to perform for an action.

### Type Properties

A constant that represents the custom action’s edit rotor category.

- [UIAccessibilityCustomActionCategoryEdit](uiaccessibilitycustomaction/editcategory.md): A constant that an app specifies through the category property on a UIKit accessibility custom action.
- [UIAccessibilityCustomActionCategoryEdit](uiaccessibilitycustomaction/editcategory.md): A constant that an app specifies through the category property on a UIKit accessibility custom action.

### Instance Properties

- [category](uiaccessibilitycustomaction/category.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Actions

- [UIAccessibilityAction](../objectivec/uiaccessibilityaction.md): A set of methods that accessibility elements can use to support specific actions.
- [UIAccessibilityCustomActionHandler](uiaccessibilitycustomaction/handler.md): A closure type that defines a handler to perform for an action.
- [Delivering an exceptional accessibility experience](../accessibility/delivering_an_exceptional_accessibility_experience.md): Make improvements to your app’s interaction model to support assistive technologies such as VoiceOver.
