> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltersettings](https://developer.apple.com/documentation/networkextension/nefiltersettings)

# NEFilterSettings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

The rules and other settings that define the operation of a filter.

## Declaration

```swift
class NEFilterSettings
```

<a id="overview"></a>

## Overview

[NEFilterDataProvider](nefilterdataprovider.md) instances use [NEFilterSettings](nefiltersettings.md) to communicate the desired settings for the filter to the framework. The framework takes care of applying the contained settings to the system.

## Topics

### Creating Filter Settings

- [init(rules:defaultAction:)](nefiltersettings/init%28rules_defaultaction_%29.md): Creates a new settings instance from an array of rules and a default action.
- [NEFilterRule](nefilterrule.md): A rule for filters that combines a rule to match network traffic and an action to take when the rule matches.

### Inspecting Filter Settings

- [rules](nefiltersettings/rules.md): An ordered list of rules that define the filter’s operation.
- [defaultAction](nefiltersettings/defaultaction.md): The default action to take for flows of network data that don’t match any of the specified rules.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Changing filter settings

- [apply(\_:completionHandler:)](nefilterdataprovider/apply%28__completionhandler_%29.md): Applies a set of filtering rules associated with the provider and changes the default filtering action.

# NEFilterSettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** macOS 10.15+

The rules and other settings that define the operation of a filter.

## Declaration

```objectivec
@interface NEFilterSettings : NSObject
```

<a id="overview"></a>

## Overview

[NEFilterDataProvider](nefilterdataprovider.md) instances use [NEFilterSettings](nefiltersettings.md) to communicate the desired settings for the filter to the framework. The framework takes care of applying the contained settings to the system.

## Topics

### Creating Filter Settings

- [initWithRules:defaultAction:](nefiltersettings/init%28rules_defaultaction_%29.md): Creates a new settings instance from an array of rules and a default action.
- [NEFilterRule](nefilterrule.md): A rule for filters that combines a rule to match network traffic and an action to take when the rule matches.

### Inspecting Filter Settings

- [rules](nefiltersettings/rules.md): An ordered list of rules that define the filter’s operation.
- [defaultAction](nefiltersettings/defaultaction.md): The default action to take for flows of network data that don’t match any of the specified rules.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Changing filter settings

- [applySettings:completionHandler:](nefilterdataprovider/apply%28__completionhandler_%29.md): Applies a set of filtering rules associated with the provider and changes the default filtering action.
