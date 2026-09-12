> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertaction](https://developer.apple.com/documentation/uikit/uialertaction)

# UIAlertAction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An action that can be taken when the user taps a button in an alert.

## Declaration

```swift
@MainActor class UIAlertAction
```

## Mentioned In

- [Getting the user’s attention with alerts and action sheets](getting-the-user-s-attention-with-alerts-and-action-sheets.md)

<a id="overview"></a>

## Overview

You use this class to configure information about a single action, including the title to display in the button, any styling information, and a handler to execute when the user taps the button. After creating an alert action object, add it to a [UIAlertController](uialertcontroller.md) object before displaying the corresponding alert to the user.

## Topics

### Creating an alert action

- [init(title:style:handler:)](uialertaction/init%28title_style_handler_%29.md): Create and return an action with the specified title and behavior.

### Getting the action’s attributes

- [title](uialertaction/title.md): The title of the action’s button.
- [style](uialertaction/style-swift.property.md): The style that applies to the action’s button.
- [isEnabled](uialertaction/isenabled.md): A Boolean value indicating whether the action is currently enabled.

### Constants

- [UIAlertAction.Style](uialertaction/style-swift.enum.md): Styles to apply to action buttons in an alert.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)

## See Also

### Alerts

- [Getting the user’s attention with alerts and action sheets](getting-the-user-s-attention-with-alerts-and-action-sheets.md): Present important information to a person or prompt them about an important choice.
- [UIAlertController](uialertcontroller.md): An object that displays an alert message.

# UIAlertAction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An action that can be taken when the user taps a button in an alert.

## Declaration

```objectivec
@interface UIAlertAction : NSObject
```

## Mentioned In

- [Getting the user’s attention with alerts and action sheets](getting-the-user-s-attention-with-alerts-and-action-sheets.md)

<a id="overview"></a>

## Overview

You use this class to configure information about a single action, including the title to display in the button, any styling information, and a handler to execute when the user taps the button. After creating an alert action object, add it to a [UIAlertController](uialertcontroller.md) object before displaying the corresponding alert to the user.

## Topics

### Creating an alert action

- [actionWithTitle:style:handler:](uialertaction/init%28title_style_handler_%29.md): Create and return an action with the specified title and behavior.

### Getting the action’s attributes

- [title](uialertaction/title.md): The title of the action’s button.
- [style](uialertaction/style-swift.property.md): The style that applies to the action’s button.
- [enabled](uialertaction/isenabled.md): A Boolean value indicating whether the action is currently enabled.

### Constants

- [UIAlertActionStyle](uialertaction/style-swift.enum.md): Styles to apply to action buttons in an alert.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)

## See Also

### Alerts

- [Getting the user’s attention with alerts and action sheets](getting-the-user-s-attention-with-alerts-and-action-sheets.md): Present important information to a person or prompt them about an important choice.
- [UIAlertController](uialertcontroller.md): An object that displays an alert message.
