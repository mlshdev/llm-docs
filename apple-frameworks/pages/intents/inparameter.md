> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inparameter](https://developer.apple.com/documentation/intents/inparameter)

# INParameter (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A parameter of an interaction object.

## Declaration

```swift
class INParameter
```

## Mentioned In

- [Configuring the View Controller for Your Custom Interface](../sirikit/configuring-the-view-controller-for-your-custom-interface.md)

<a id="overview"></a>

## Overview

Use a parameter object to identify a property of an [INInteraction](ininteraction.md) object. To fetch the value of the property, use the [parameterValue(for:)](ininteraction/parametervalue%28for_%29.md) method of the [INInteraction](ininteraction.md) object.

You use parameters when configuring a custom user interface for your Siri or Maps interactions. SiriKit passes parameter objects to you during the configuration of your interface. When configuring your interface, you can also create parameter objects to represent properties that you display in addition to the ones that SiriKit provides.

## Topics

### Creating a Parameter Object

- [init(for:keyPath:)](inparameter/init%28for_keypath_%29.md): Creates a new parameter object using the specified key path and class information.
- [init(keyPath:)](inparameter/init%28keypath_%29.md): Creates a new parameter object using the specified key path and class information.

### Getting the Parameter Details

- [parameterKeyPath](inparameter/parameterkeypath.md): The key path to a property of an interaction object.
- [parameterClass](inparameter/parameterclass.md): The type of object represented by this parameter.

### Managing Indexed Values

- [index(forSubKeyPath:)](inparameter/index%28forsubkeypath_%29.md): The index into the array at the specified portion of the key path.
- [setIndex(\_:forSubKeyPath:)](inparameter/setindex%28__forsubkeypath_%29.md): Specifies which item of an array or ordered set to use for the parameter.

### Comparing Parameters

- [isEqual(to:)](inparameter/isequal%28to_%29.md): Returns a Boolean value indicating whether the specified parameter object represents the same property as the current parameter object.

### Initializers

- [init(coder:)](inparameter/init%28coder_%29.md)
- [init(forClass:keyPath:)](inparameter/init%28forclass_keypath_%29.md)

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

### Custom UI for Siri and Maps

- [Creating an Intents UI Extension](../sirikit/creating-an-intents-ui-extension.md): Create an Intents UI app extension to customize the interfaces displayed by Siri and Maps.
- [INUIHostedViewControlling](../intentsui/inuihostedviewcontrolling.md): Methods for presenting custom content in the Siri and Maps interfaces.
- [INUIHostedViewSiriProviding](../intentsui/inuihostedviewsiriproviding.md): Methods for hiding portions of the default interfaces that Siri provides.
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)

# INParameter (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A parameter of an interaction object.

## Declaration

```objectivec
@interface INParameter : NSObject
```

## Mentioned In

- [Configuring the View Controller for Your Custom Interface](../sirikit/configuring-the-view-controller-for-your-custom-interface.md)

<a id="overview"></a>

## Overview

Use a parameter object to identify a property of an [INInteraction](ininteraction.md) object. To fetch the value of the property, use the [parameterValueForParameter:](ininteraction/parametervalue%28for_%29.md) method of the [INInteraction](ininteraction.md) object.

You use parameters when configuring a custom user interface for your Siri or Maps interactions. SiriKit passes parameter objects to you during the configuration of your interface. When configuring your interface, you can also create parameter objects to represent properties that you display in addition to the ones that SiriKit provides.

## Topics

### Creating a Parameter Object

- [parameterForClass:keyPath:](inparameter/init%28for_keypath_%29.md): Creates a new parameter object using the specified key path and class information.

### Getting the Parameter Details

- [parameterKeyPath](inparameter/parameterkeypath.md): The key path to a property of an interaction object.
- [parameterClass](inparameter/parameterclass.md): The type of object represented by this parameter.

### Managing Indexed Values

- [indexForSubKeyPath:](inparameter/index%28forsubkeypath_%29.md): The index into the array at the specified portion of the key path.
- [setIndex:forSubKeyPath:](inparameter/setindex%28__forsubkeypath_%29.md): Specifies which item of an array or ordered set to use for the parameter.

### Comparing Parameters

- [isEqualToParameter:](inparameter/isequal%28to_%29.md): Returns a Boolean value indicating whether the specified parameter object represents the same property as the current parameter object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Custom UI for Siri and Maps

- [Creating an Intents UI Extension](../sirikit/creating-an-intents-ui-extension.md): Create an Intents UI app extension to customize the interfaces displayed by Siri and Maps.
- [INUIHostedViewControlling](../intentsui/inuihostedviewcontrolling.md): Methods for presenting custom content in the Siri and Maps interfaces.
- [INUIHostedViewSiriProviding](../intentsui/inuihostedviewsiriproviding.md): Methods for hiding portions of the default interfaces that Siri provides.
