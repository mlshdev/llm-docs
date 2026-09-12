> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpalertaction](https://developer.apple.com/documentation/carplay/cpalertaction)

# CPAlertAction (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that encapsulates an action the user can perform on an action sheet or alert.

## Declaration

```swift
class CPAlertAction
```

<a id="overview"></a>

## Overview

Use an alert action to display a button on an alert. The combination of the alert and the action styles determines the appearance of the action button. To perform an action after the user taps the button, provide a block to the action’s [handler](cpalertaction/handler.md) property.

## Topics

### Creating an Alert Action

- [init(title:style:handler:)](cpalertaction/init%28title_style_handler_%29.md): Creates an alert action with a title, style, and action handler.

### Getting the Title

- [title](cpalertaction/title.md): The action button’s title.

### Getting the Action Style

- [style](cpalertaction/style-swift.property.md): The display style for the action button.
- [CPAlertAction.Style](cpalertaction/style-swift.enum.md): Display styles for an alert’s action button.

### Getting the Action Handler

- [handler](cpalertaction/handler.md): The closure that CarPlay invokes after the user taps the action button.
- [CPAlertActionHandler](cpalertactionhandler.md): The declaration for an alert action handler.

### Initializers

- [init(title:color:handler:)](cpalertaction/init%28title_color_handler_%29.md)
- [init(coder:)](cpalertaction/init%28coder_%29.md)

### Instance Properties

- [color](cpalertaction/color.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Actions and Alerts

- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.

# CPAlertAction (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that encapsulates an action the user can perform on an action sheet or alert.

## Declaration

```objectivec
@interface CPAlertAction : NSObject
```

<a id="overview"></a>

## Overview

Use an alert action to display a button on an alert. The combination of the alert and the action styles determines the appearance of the action button. To perform an action after the user taps the button, provide a block to the action’s [handler](cpalertaction/handler.md) property.

## Topics

### Creating an Alert Action

- [initWithTitle:style:handler:](cpalertaction/init%28title_style_handler_%29.md): Creates an alert action with a title, style, and action handler.

### Getting the Title

- [title](cpalertaction/title.md): The action button’s title.

### Getting the Action Style

- [style](cpalertaction/style-swift.property.md): The display style for the action button.
- [CPAlertActionStyle](cpalertaction/style-swift.enum.md): Display styles for an alert’s action button.

### Getting the Action Handler

- [handler](cpalertaction/handler.md): The closure that CarPlay invokes after the user taps the action button.
- [CPAlertActionHandler](cpalertactionhandler.md): The declaration for an alert action handler.

### Initializers

- [initWithTitle:color:handler:](cpalertaction/init%28title_color_handler_%29.md)

### Instance Properties

- [color](cpalertaction/color.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Actions and Alerts

- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
