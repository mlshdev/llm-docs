> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelbuttonconfiguration

# CPMapPanelButtonConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type that manages the action buttons and travel estimates in a map panel.

## Declaration

```swift
class CPMapPanelButtonConfiguration
```

<a id="overview"></a>

## Overview

A `CPMapPanelbuttonConfiguration` object specifies the controls and details to display at the bottom of a [CPMapPanel](cpmappanel.md). Create this type when to add a primary action button and an optional secondary action button to the bottom of the panel. These buttons are separate from your map panel’s section content and remain pinned to the bottom of the panel during scrolling. You can also use this type to specify travel estimates you want to keep pinned to the bottom of the panel.

Instantiate this type and specify it with the rest of the panel content when initializing your [CPMapPanel](cpmappanel.md) object. You can’t change the button configuration details after you create your map panel.

## Topics

### Initializers

- [init(primaryAction:secondaryButton:travelEstimates:)](cpmappanelbuttonconfiguration/init%28primaryaction_secondarybutton_travelestimates_%29.md): Initializes the map panel button configuration with the specified action buttons and travel estimates.

### Instance Properties

- [secondaryButton](cpmappanelbuttonconfiguration/secondarybutton.md): The optional button you use to perform a secondary action.
- [travelEstimates](cpmappanelbuttonconfiguration/travelestimates.md): The travel estimates to display alongside the action buttons.

## Relationships

### Inherits From

- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

# CPMapPanelButtonConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type that manages the action buttons and travel estimates in a map panel.

## Declaration

```objectivec
@interface CPMapPanelButtonConfiguration : CPPanelButtonConfiguration
```

<a id="overview"></a>

## Overview

A `CPMapPanelbuttonConfiguration` object specifies the controls and details to display at the bottom of a [CPMapPanel](cpmappanel.md). Create this type when to add a primary action button and an optional secondary action button to the bottom of the panel. These buttons are separate from your map panel’s section content and remain pinned to the bottom of the panel during scrolling. You can also use this type to specify travel estimates you want to keep pinned to the bottom of the panel.

Instantiate this type and specify it with the rest of the panel content when initializing your [CPMapPanel](cpmappanel.md) object. You can’t change the button configuration details after you create your map panel.

## Topics

### Instance Properties

- [secondaryButton](cpmappanelbuttonconfiguration/secondarybutton.md): The optional button you use to perform a secondary action.
- [travelEstimates](cpmappanelbuttonconfiguration/travelestimates.md): The travel estimates to display alongside the action buttons.

### Instance Methods

- [initWithPrimaryAction:secondaryButton:travelEstimates:](cpmappanelbuttonconfiguration/init%28primaryaction_secondarybutton_travelestimates_%29.md): Initializes the map panel button configuration with the specified action buttons and travel estimates.

## Relationships

### Inherits From

- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md)
