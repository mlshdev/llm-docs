> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpdashboardcontroller](https://developer.apple.com/documentation/carplay/cpdashboardcontroller)

# CPDashboardController (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

A controller that provides shortcut buttons for the CarPlay Dashboard.

## Declaration

```swift
class CPDashboardController
```

<a id="overview"></a>

## Overview

A dashboard controller manages up to two shortcut buttons that CarPlay displays in the dashboard when there’s no active navigation session. You don’t create the dashboard controller. Instead, CarPlay creates one for you and passes it to the delegate of [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md) when it connects the dashboard scene.

After receiving the controller, set [shortcutButtons](cpdashboardcontroller/shortcutbuttons.md) to an array that contains a maximum of two shortcut buttons. CarPlay manages hiding or showing the buttons on the dashboard at the appropriate times.

## Topics

### Providing Dashboard Buttons

- [shortcutButtons](cpdashboardcontroller/shortcutbuttons.md): An array of shortcut buttons to display on the CarPlay Dashboard.
- [CPDashboardButton](cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.

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

### Accessing the Dashboard Controller

- [dashboardController](cptemplateapplicationdashboardscene/dashboardcontroller.md): The controller that manages the dashboard scene’s shortcut buttons.

# CPDashboardController (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

A controller that provides shortcut buttons for the CarPlay Dashboard.

## Declaration

```objectivec
@interface CPDashboardController : NSObject
```

<a id="overview"></a>

## Overview

A dashboard controller manages up to two shortcut buttons that CarPlay displays in the dashboard when there’s no active navigation session. You don’t create the dashboard controller. Instead, CarPlay creates one for you and passes it to the delegate of [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md) when it connects the dashboard scene.

After receiving the controller, set [shortcutButtons](cpdashboardcontroller/shortcutbuttons.md) to an array that contains a maximum of two shortcut buttons. CarPlay manages hiding or showing the buttons on the dashboard at the appropriate times.

## Topics

### Providing Dashboard Buttons

- [shortcutButtons](cpdashboardcontroller/shortcutbuttons.md): An array of shortcut buttons to display on the CarPlay Dashboard.
- [CPDashboardButton](cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Accessing the Dashboard Controller

- [dashboardController](cptemplateapplicationdashboardscene/dashboardcontroller.md): The controller that manages the dashboard scene’s shortcut buttons.
