> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpvoicecontroltemplate](https://developer.apple.com/documentation/carplay/cpvoicecontroltemplate)

# CPVoiceControlTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays a voice control indicator during audio input.

## Declaration

```swift
@MainActor class CPVoiceControlTemplate
```

<a id="overview"></a>

## Overview

CarPlay navigation apps must show a voice control indicator during audio input by presenting a voice control template. When creating the template, provide one or more [CPVoiceControlState](cpvoicecontrolstate.md) objects. To switch between states, call the [activateVoiceControlState(withIdentifier:)](cpvoicecontroltemplate/activatevoicecontrolstate%28withidentifier_%29.md) method.

## Topics

### Creating a Voice Control Template

- [init(voiceControlStates:)](cpvoicecontroltemplate/init%28voicecontrolstates_%29.md): Creates a voice control template with a list of voice control states.
- [CPVoiceControlState](cpvoicecontrolstate.md): A voice control state containing title variants and images for use by a voice control template.

### Activating a State

- [activateVoiceControlState(withIdentifier:)](cpvoicecontroltemplate/activatevoicecontrolstate%28withidentifier_%29.md): Changes the template’s state to the one matching the specified identifier.
- [activeStateIdentifier](cpvoicecontroltemplate/activestateidentifier.md): The identifier of the template’s current voice control state.

### Getting Available States

- [voiceControlStates](cpvoicecontroltemplate/voicecontrolstates.md): The array of voice control states available to the template.

### Instance Properties

- [backButton](cpvoicecontroltemplate/backbutton.md)
- [leadingNavigationBarButtons](cpvoicecontroltemplate/leadingnavigationbarbuttons.md): An array of bar buttons to be displayed on the leading side of the navigation bar.
- [trailingNavigationBarButtons](cpvoicecontroltemplate/trailingnavigationbarbuttons.md): An array of bar buttons to be displayed on the trailing side of the navigation bar.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CPBarButtonProviding](cpbarbuttonproviding.md)
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

### Navigation

- [Integrating CarPlay with Your Navigation App](integrating-carplay-with-your-navigation-app.md): Configure your navigation app to work with CarPlay by displaying your custom map and directions.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.

# CPVoiceControlTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays a voice control indicator during audio input.

## Declaration

```objectivec
@interface CPVoiceControlTemplate : CPTemplate
```

<a id="overview"></a>

## Overview

CarPlay navigation apps must show a voice control indicator during audio input by presenting a voice control template. When creating the template, provide one or more [CPVoiceControlState](cpvoicecontrolstate.md) objects. To switch between states, call the [activateVoiceControlStateWithIdentifier:](cpvoicecontroltemplate/activatevoicecontrolstate%28withidentifier_%29.md) method.

## Topics

### Creating a Voice Control Template

- [initWithVoiceControlStates:](cpvoicecontroltemplate/init%28voicecontrolstates_%29.md): Creates a voice control template with a list of voice control states.
- [CPVoiceControlState](cpvoicecontrolstate.md): A voice control state containing title variants and images for use by a voice control template.

### Activating a State

- [activateVoiceControlStateWithIdentifier:](cpvoicecontroltemplate/activatevoicecontrolstate%28withidentifier_%29.md): Changes the template’s state to the one matching the specified identifier.
- [activeStateIdentifier](cpvoicecontroltemplate/activestateidentifier.md): The identifier of the template’s current voice control state.

### Getting Available States

- [voiceControlStates](cpvoicecontroltemplate/voicecontrolstates.md): The array of voice control states available to the template.

### Instance Properties

- [backButton](cpvoicecontroltemplate/backbutton.md)
- [leadingNavigationBarButtons](cpvoicecontroltemplate/leadingnavigationbarbuttons.md): An array of bar buttons to be displayed on the leading side of the navigation bar.
- [trailingNavigationBarButtons](cpvoicecontroltemplate/trailingnavigationbarbuttons.md): An array of bar buttons to be displayed on the trailing side of the navigation bar.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CPBarButtonProviding](cpbarbuttonproviding.md)

## See Also

### Navigation

- [Integrating CarPlay with Your Navigation App](integrating-carplay-with-your-navigation-app.md): Configure your navigation app to work with CarPlay by displaying your custom map and directions.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
