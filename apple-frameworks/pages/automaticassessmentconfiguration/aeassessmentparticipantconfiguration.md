> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration)

# AEAssessmentParticipantConfiguration (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Configuration information for an app that’s available during an assessment.

## Declaration

```swift
class AEAssessmentParticipantConfiguration
```

<a id="overview"></a>

## Overview

Use an instance of this class to configure the properties of an app that you allow to run during an assessment. Associate the participant configuration with an app (an [AEAssessmentApplication](aeassessmentapplication.md) instance) when you call the `AEAssessmentConfiguration/setConfiguration(_:for:)` method of a session configuration.

## Topics

### Creating participant configuration instances

- [init()](aeassessmentparticipantconfiguration/init%28%29.md): Initializes an assessment participant configuration instance.
- [new()](aeassessmentparticipantconfiguration/new%28%29.md): Creates a new assessment participant configuration instance.

### Allowing network access

- [allowsNetworkAccess](aeassessmentparticipantconfiguration/allowsnetworkaccess.md): A Boolean that indicates whether an app can access network resources during an assessment.

### Instance Properties

- [allowedMenuItemLanguages](aeassessmentparticipantconfiguration/allowedmenuitemlanguages.md): The set of languages for which allowed menu items have been configured.
- [configurationInfo](aeassessmentparticipantconfiguration/configurationinfo.md)
- [isRequired](aeassessmentparticipantconfiguration/isrequired.md)

### Instance Methods

- [allowedMenuItems(for:)](aeassessmentparticipantconfiguration/allowedmenuitems%28for_%29.md): Returns the set of allowed menu item titles for the given language, or `nil` if no items have been configured for that language.
- [setAllowedMenuItems(\_:for:)](aeassessmentparticipantconfiguration/setallowedmenuitems%28__for_%29.md): Sets the allowed menu item titles for the given language.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Allowing access to other apps

- [configurationsByApplication](aeassessmentconfiguration/configurationsbyapplication.md): The collection of apps available during an assessment, along with their associated configurations.
- [mainParticipantConfiguration](aeassessmentconfiguration/mainparticipantconfiguration.md): The app-specific configuration for the app that invokes the assessment.
- [AEAssessmentApplication](aeassessmentapplication.md): A representation of an app that users can access during an assessment.

# AEAssessmentParticipantConfiguration (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Configuration information for an app that’s available during an assessment.

## Declaration

```objectivec
@interface AEAssessmentParticipantConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Use an instance of this class to configure the properties of an app that you allow to run during an assessment. Associate the participant configuration with an app (an [AEAssessmentApplication](aeassessmentapplication.md) instance) when you call the `AEAssessmentConfiguration/setConfiguration(_:for:)` method of a session configuration.

## Topics

### Creating participant configuration instances

- [init](aeassessmentparticipantconfiguration/init%28%29.md): Initializes an assessment participant configuration instance.
- [new](aeassessmentparticipantconfiguration/new%28%29.md): Creates a new assessment participant configuration instance.

### Allowing network access

- [allowsNetworkAccess](aeassessmentparticipantconfiguration/allowsnetworkaccess.md): A Boolean that indicates whether an app can access network resources during an assessment.

### Instance Properties

- [allowedMenuItemLanguageIdentifiers](aeassessmentparticipantconfiguration/allowedmenuitemlanguageidentifiers.md): The set of language identifiers for which allowed menu items have been configured.
- [configurationInfo](aeassessmentparticipantconfiguration/configurationinfo.md)
- [required](aeassessmentparticipantconfiguration/isrequired.md)

### Instance Methods

- [allowedMenuItemsForLanguageIdentifier:](aeassessmentparticipantconfiguration/allowedmenuitemsforlanguageidentifier_.md): Returns the set of allowed menu item titles for the given language identifier, or `nil` if no items have been configured for that identifier.
- [setAllowedMenuItems:forLanguageIdentifier:](aeassessmentparticipantconfiguration/setallowedmenuitems_forlanguageidentifier_.md): Sets the allowed menu item titles for the given language identifier.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Allowing access to other apps

- [configurationsByApplication](aeassessmentconfiguration/configurationsbyapplication.md): The collection of apps available during an assessment, along with their associated configurations.
- [mainParticipantConfiguration](aeassessmentconfiguration/mainparticipantconfiguration.md): The app-specific configuration for the app that invokes the assessment.
- [AEAssessmentApplication](aeassessmentapplication.md): A representation of an app that users can access during an assessment.
