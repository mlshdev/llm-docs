> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpdashboardcontroller

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

### Providing dashboard buttons

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

### Dashboard display

- [CPDashboardButton](cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPSupportsDashboardNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsdashboardnavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Dashboard.

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

### Providing dashboard buttons

- [shortcutButtons](cpdashboardcontroller/shortcutbuttons.md): An array of shortcut buttons to display on the CarPlay Dashboard.
- [CPDashboardButton](cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Dashboard display

- [CPDashboardButton](cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPSupportsDashboardNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsdashboardnavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Dashboard.
