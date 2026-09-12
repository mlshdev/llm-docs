> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpalerttemplate](https://developer.apple.com/documentation/carplay/cpalerttemplate)

# CPAlertTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays a modal alert.

## Declaration

```swift
@MainActor class CPAlertTemplate
```

<a id="overview"></a>

## Overview

You must present alerts modally by calling the [presentTemplate(\_:animated:completion:)](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md) method available on your app’s instance of [CPInterfaceController](cpinterfacecontroller.md). The user dismisses the alert by pressing a button, or you can dismiss it by calling the interface controller’s [dismissTemplate(animated:completion:)](cpinterfacecontroller/dismisstemplate%28animated_completion_%29.md) method.

## Topics

### Creating an Alert Template

- [init(titleVariants:actions:)](cpalerttemplate/init%28titlevariants_actions_%29.md): Creates an alert template.
- [maximumActionCount](cpalerttemplate/maximumactioncount.md): The maximum number of actions allowed in an alert template.

### Getting the Alert Information

- [titleVariants](cpalerttemplate/titlevariants.md): The array of title variants.
- [actions](cpalerttemplate/actions.md): The array of actions available on the alert.

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

- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertAction](cpalertaction.md): An object that encapsulates an action the user can perform on an action sheet or alert.

# CPAlertTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays a modal alert.

## Declaration

```objectivec
@interface CPAlertTemplate : CPTemplate
```

<a id="overview"></a>

## Overview

You must present alerts modally by calling the [presentTemplate:animated:completion:](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md) method available on your app’s instance of [CPInterfaceController](cpinterfacecontroller.md). The user dismisses the alert by pressing a button, or you can dismiss it by calling the interface controller’s [dismissTemplateAnimated:completion:](cpinterfacecontroller/dismisstemplate%28animated_completion_%29.md) method.

## Topics

### Creating an Alert Template

- [initWithTitleVariants:actions:](cpalerttemplate/init%28titlevariants_actions_%29.md): Creates an alert template.
- [maximumActionCount](cpalerttemplate/maximumactioncount.md): The maximum number of actions allowed in an alert template.

### Getting the Alert Information

- [titleVariants](cpalerttemplate/titlevariants.md): The array of title variants.
- [actions](cpalerttemplate/actions.md): The array of actions available on the alert.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

## See Also

### Actions and Alerts

- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertAction](cpalertaction.md): An object that encapsulates an action the user can perform on an action sheet or alert.
