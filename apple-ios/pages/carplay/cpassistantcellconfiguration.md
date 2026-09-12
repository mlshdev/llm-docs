> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpassistantcellconfiguration](https://developer.apple.com/documentation/carplay/cpassistantcellconfiguration)

# CPAssistantCellConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An object that provides the configuration attributes for the assistant cell.

## Declaration

```swift
class CPAssistantCellConfiguration
```

<a id="overview"></a>

## Overview

An audio or communication CarPlay app can choose to display an *assistant cell* in a list template that allows the user to interact with the app using Siri. You create an instance of this configuration object that describes the position, visibility, and supported Siri intent, and provide that to your app’s list template using the [init(title:sections:assistantCellConfiguration:)](cplisttemplate/init%28title_sections_assistantcellconfiguration_%29.md) initializer or the [assistantCellConfiguration](cplisttemplate/assistantcellconfiguration.md) property.

Your app must include an Intents Extension that handles the intent corresponding to the action you specify in the [assistantAction](cpassistantcellconfiguration/assistantaction.md) property; audio apps must support [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) and communication apps must support [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent). For more information, see [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension).

## Topics

### Creating an Assistant Cell Configuration

- [init(position:visibility:assistantAction:)](cpassistantcellconfiguration/init%28position_visibility_assistantaction_%29.md): Creates a configuration object with the specified position, visibility, and action.

### Getting the Configuration Attributes

- [position](cpassistantcellconfiguration/position.md): The position of the assistant cell in the list template.
- [visibility](cpassistantcellconfiguration/visibility.md): The visibility of the assistant cell in the list template.
- [assistantAction](cpassistantcellconfiguration/assistantaction.md): The action that Siri performs when the user selects the assistant cell.
- [CPAssistantCellActionType](cpassistantcellactiontype.md): The supported Siri actions of the assistant cell.

### Initializers

- [init(coder:)](cpassistantcellconfiguration/init%28coder_%29.md)

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

### Managing the Assistant Cell

- [assistantCellConfiguration](cplisttemplate/assistantcellconfiguration.md): The object that provides the configuration attributes for the assistant cell.

# CPAssistantCellConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An object that provides the configuration attributes for the assistant cell.

## Declaration

```objectivec
@interface CPAssistantCellConfiguration : NSObject
```

<a id="overview"></a>

## Overview

An audio or communication CarPlay app can choose to display an *assistant cell* in a list template that allows the user to interact with the app using Siri. You create an instance of this configuration object that describes the position, visibility, and supported Siri intent, and provide that to your app’s list template using the [initWithTitle:sections:assistantCellConfiguration:](cplisttemplate/init%28title_sections_assistantcellconfiguration_%29.md) initializer or the [assistantCellConfiguration](cplisttemplate/assistantcellconfiguration.md) property.

Your app must include an Intents Extension that handles the intent corresponding to the action you specify in the [assistantAction](cpassistantcellconfiguration/assistantaction.md) property; audio apps must support [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) and communication apps must support [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent). For more information, see [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension).

## Topics

### Creating an Assistant Cell Configuration

- [initWithPosition:visibility:assistantAction:](cpassistantcellconfiguration/init%28position_visibility_assistantaction_%29.md): Creates a configuration object with the specified position, visibility, and action.

### Getting the Configuration Attributes

- [position](cpassistantcellconfiguration/position.md): The position of the assistant cell in the list template.
- [visibility](cpassistantcellconfiguration/visibility.md): The visibility of the assistant cell in the list template.
- [assistantAction](cpassistantcellconfiguration/assistantaction.md): The action that Siri performs when the user selects the assistant cell.
- [CPAssistantCellActionType](cpassistantcellactiontype.md): The supported Siri actions of the assistant cell.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Managing the Assistant Cell

- [assistantCellConfiguration](cplisttemplate/assistantcellconfiguration.md): The object that provides the configuration attributes for the assistant cell.
