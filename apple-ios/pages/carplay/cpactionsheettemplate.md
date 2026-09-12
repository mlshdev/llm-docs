> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpactionsheettemplate](https://developer.apple.com/documentation/carplay/cpactionsheettemplate)

# CPActionSheetTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays a modal action sheet.

## Declaration

```swift
@MainActor class CPActionSheetTemplate
```

<a id="overview"></a>

## Overview

You must present action sheets modally by calling the [presentTemplate(\_:animated:completion:)](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md) method available on your app’s instance of [CPInterfaceController](cpinterfacecontroller.md). The user dismisses the action sheet by pressing a button, or you can dismiss it by calling the interface controller’s [dismissTemplate(animated:completion:)](cpinterfacecontroller/dismisstemplate%28animated_completion_%29.md) method.

## Topics

### Creating an Action Sheet Template

- [init(title:message:actions:)](cpactionsheettemplate/init%28title_message_actions_%29.md): Creates an action sheet template.

### Getting Action Sheet Template Information

- [title](cpactionsheettemplate/title.md): The title of the action sheet.
- [message](cpactionsheettemplate/message.md): The descriptive message providing details about the reason for displaying the action sheet.
- [actions](cpactionsheettemplate/actions.md): The list of actions available on the action sheet.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Actions and Alerts

- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [CPAlertAction](cpalertaction.md): An object that encapsulates an action the user can perform on an action sheet or alert.

# CPActionSheetTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays a modal action sheet.

## Declaration

```objectivec
@interface CPActionSheetTemplate : CPTemplate
```

<a id="overview"></a>

## Overview

You must present action sheets modally by calling the [presentTemplate:animated:completion:](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md) method available on your app’s instance of [CPInterfaceController](cpinterfacecontroller.md). The user dismisses the action sheet by pressing a button, or you can dismiss it by calling the interface controller’s [dismissTemplateAnimated:completion:](cpinterfacecontroller/dismisstemplate%28animated_completion_%29.md) method.

## Topics

### Creating an Action Sheet Template

- [initWithTitle:message:actions:](cpactionsheettemplate/init%28title_message_actions_%29.md): Creates an action sheet template.

### Getting Action Sheet Template Information

- [title](cpactionsheettemplate/title.md): The title of the action sheet.
- [message](cpactionsheettemplate/message.md): The descriptive message providing details about the reason for displaying the action sheet.
- [actions](cpactionsheettemplate/actions.md): The list of actions available on the action sheet.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

## See Also

### Actions and Alerts

- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [CPAlertAction](cpalertaction.md): An object that encapsulates an action the user can perform on an action sheet or alert.
