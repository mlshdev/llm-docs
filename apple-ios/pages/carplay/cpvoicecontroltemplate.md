> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpvoicecontroltemplate

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

### Creating a voice control template

- [init(voiceControlStates:)](cpvoicecontroltemplate/init%28voicecontrolstates_%29.md): Creates a voice control template with a list of voice control states.
- [CPVoiceControlState](cpvoicecontrolstate.md): A voice control state containing title variants and images for use by a voice control template.

### Activating a state

- [activateVoiceControlState(withIdentifier:)](cpvoicecontroltemplate/activatevoicecontrolstate%28withidentifier_%29.md): Changes the template’s state to the one matching the specified identifier.
- [activeStateIdentifier](cpvoicecontroltemplate/activestateidentifier.md): The identifier of the template’s current voice control state.

### Getting the available states

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

## See Also

### Interface templates

- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [All templates and supporting types](all-templates-and-supporting-types.md): Explore the templates you use to build the interface of your CarPlay app.

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

### Creating a voice control template

- [initWithVoiceControlStates:](cpvoicecontroltemplate/init%28voicecontrolstates_%29.md): Creates a voice control template with a list of voice control states.
- [CPVoiceControlState](cpvoicecontrolstate.md): A voice control state containing title variants and images for use by a voice control template.

### Activating a state

- [activateVoiceControlStateWithIdentifier:](cpvoicecontroltemplate/activatevoicecontrolstate%28withidentifier_%29.md): Changes the template’s state to the one matching the specified identifier.
- [activeStateIdentifier](cpvoicecontroltemplate/activestateidentifier.md): The identifier of the template’s current voice control state.

### Getting the available states

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

### Interface templates

- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [All templates and supporting types](all-templates-and-supporting-types.md): Explore the templates you use to build the interface of your CarPlay app.
