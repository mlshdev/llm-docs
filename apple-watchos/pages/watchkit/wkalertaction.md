> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkalertaction](https://developer.apple.com/documentation/watchkit/wkalertaction)

# WKAlertAction (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An object that encapsulates information about a button displayed in an alert or action sheet.

## Declaration

```swift
class WKAlertAction
```

<a id="overview"></a>

## Overview

Create instances of this class using the [init(title:style:handler:)](wkalertaction/init%28title_style_handler_%29.md) method and pass them to the [presentAlert(withTitle:message:preferredStyle:actions:)](wkinterfacecontroller/presentalert%28withtitle_message_preferredstyle_actions_%29.md) method of one of your interface controllers. The sheet uses your action objects to create the corresponding buttons. When creating an alert action, you specify the title and visual style to apply to the button and a block to execute when the button is tapped. Use the defined visual styles to convey the purpose of the button to the user.

## Topics

### Creating an Action

- [init(title:style:handler:)](wkalertaction/init%28title_style_handler_%29.md): Creates and returns an action object with the specified button information.

### Constants

- [WKAlertActionStyle](wkalertactionstyle.md): Constants indicating the style of the action button.
- [WKAlertActionHandler](wkalertactionhandler.md): A block to perform in response to an action.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceObject](wkinterfaceobject.md): An object that provides information that is common to all interface objects in your watchOS app.
- [WKInterfaceController](wkinterfacecontroller.md): A class that provides the infrastructure for managing the interface in a watchOS app.
- [WKAccessibilityImageRegion](wkaccessibilityimageregion.md): An object that defines a portion of an image that you want to call out separately to an assistive app.
- [WKAccessibilityIsVoiceOverRunning()](wkaccessibilityisvoiceoverrunning%28%29.md): Returns a Boolean value indicating whether VoiceOver is running.
- [WKAccessibilityIsReduceMotionEnabled()](wkaccessibilityisreducemotionenabled%28%29.md): Returns a Boolean value indicating whether reduced motion is enabled.

# WKAlertAction (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An object that encapsulates information about a button displayed in an alert or action sheet.

## Declaration

```objectivec
@interface WKAlertAction : NSObject
```

<a id="overview"></a>

## Overview

Create instances of this class using the [actionWithTitle:style:handler:](wkalertaction/init%28title_style_handler_%29.md) method and pass them to the [presentAlertControllerWithTitle:message:preferredStyle:actions:](wkinterfacecontroller/presentalert%28withtitle_message_preferredstyle_actions_%29.md) method of one of your interface controllers. The sheet uses your action objects to create the corresponding buttons. When creating an alert action, you specify the title and visual style to apply to the button and a block to execute when the button is tapped. Use the defined visual styles to convey the purpose of the button to the user.

## Topics

### Creating an Action

- [actionWithTitle:style:handler:](wkalertaction/init%28title_style_handler_%29.md): Creates and returns an action object with the specified button information.

### Constants

- [WKAlertActionStyle](wkalertactionstyle.md): Constants indicating the style of the action button.
- [WKAlertActionHandler](wkalertactionhandler.md): A block to perform in response to an action.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceObject](wkinterfaceobject.md): An object that provides information that is common to all interface objects in your watchOS app.
- [WKInterfaceController](wkinterfacecontroller.md): A class that provides the infrastructure for managing the interface in a watchOS app.
- [WKAccessibilityImageRegion](wkaccessibilityimageregion.md): An object that defines a portion of an image that you want to call out separately to an assistive app.
- [WKAccessibilityIsVoiceOverRunning](wkaccessibilityisvoiceoverrunning%28%29.md): Returns a Boolean value indicating whether VoiceOver is running.
- [WKAccessibilityIsReduceMotionEnabled](wkaccessibilityisreducemotionenabled%28%29.md): Returns a Boolean value indicating whether reduced motion is enabled.
