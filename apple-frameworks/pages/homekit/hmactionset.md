> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmactionset](https://developer.apple.com/documentation/homekit/hmactionset)

# HMActionSet (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of actions that you trigger as a group.

## Declaration

```swift
class HMActionSet
```

<a id="overview"></a>

## Overview

Action sets can be executed as a result of evaluating a trigger (instances of [HMTrigger](hmtrigger.md)) or manually with [executeActionSet(\_:completionHandler:)](hmhome/executeactionset%28__completionhandler_%29.md). Actions in an action set are performed in an unspecified order. You create new action sets using the [addActionSet(withName:completionHandler:)](hmhome/addactionset%28withname_completionhandler_%29.md) method of [HMHome](hmhome.md).

## Topics

### Identifiying an action set

- [uniqueIdentifier](hmactionset/uniqueidentifier.md): The action set’s unique identifier.
- [name](hmactionset/name.md): The name of the action set.
- [updateName(\_:completionHandler:)](hmactionset/updatename%28__completionhandler_%29.md): Updates the name of the action set.

### Specifying a type

- [actionSetType](hmactionset/actionsettype.md): The type of the action set, such as built-in or user-defined.
- [Action Set Types](action-set-types.md): The types of action sets that you can define.

### Defining the associated actions

- [actions](hmactionset/actions.md): Set of actions in the action set.
- [addAction(\_:completionHandler:)](hmactionset/addaction%28__completionhandler_%29.md): Adds an action to the action set.
- [removeAction(\_:completionHandler:)](hmactionset/removeaction%28__completionhandler_%29.md): Removes an action from the action set.
- [HMCharacteristicWriteAction](hmcharacteristicwriteaction.md): An action in an action set that writes a value to a characteristic.
- [HMAction](hmaction.md): An abstract base class for actions in HomeKit.

### Keeping track of execution

- [isExecuting](hmactionset/isexecuting.md): The execution status of the action set.
- [lastExecutionDate](hmactionset/lastexecutiondate.md): The last execution date of the action set.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Action Sets

- [HMTimerTrigger](hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
- [HMEventTrigger](hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.

# HMActionSet (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of actions that you trigger as a group.

## Declaration

```objectivec
@interface HMActionSet : NSObject
```

<a id="overview"></a>

## Overview

Action sets can be executed as a result of evaluating a trigger (instances of [HMTrigger](hmtrigger.md)) or manually with [executeActionSet:completionHandler:](hmhome/executeactionset%28__completionhandler_%29.md). Actions in an action set are performed in an unspecified order. You create new action sets using the [addActionSetWithName:completionHandler:](hmhome/addactionset%28withname_completionhandler_%29.md) method of [HMHome](hmhome.md).

## Topics

### Identifiying an action set

- [uniqueIdentifier](hmactionset/uniqueidentifier.md): The action set’s unique identifier.
- [name](hmactionset/name.md): The name of the action set.
- [updateName:completionHandler:](hmactionset/updatename%28__completionhandler_%29.md): Updates the name of the action set.

### Specifying a type

- [actionSetType](hmactionset/actionsettype.md): The type of the action set, such as built-in or user-defined.
- [Action Set Types](action-set-types.md): The types of action sets that you can define.

### Defining the associated actions

- [actions](hmactionset/actions.md): Set of actions in the action set.
- [addAction:completionHandler:](hmactionset/addaction%28__completionhandler_%29.md): Adds an action to the action set.
- [removeAction:completionHandler:](hmactionset/removeaction%28__completionhandler_%29.md): Removes an action from the action set.
- [HMCharacteristicWriteAction](hmcharacteristicwriteaction.md): An action in an action set that writes a value to a characteristic.
- [HMAction](hmaction.md): An abstract base class for actions in HomeKit.

### Keeping track of execution

- [executing](hmactionset/isexecuting.md): The execution status of the action set.
- [lastExecutionDate](hmactionset/lastexecutiondate.md): The last execution date of the action set.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Action Sets

- [HMTimerTrigger](hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
- [HMEventTrigger](hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.
