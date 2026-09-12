> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtrigger](https://developer.apple.com/documentation/homekit/hmtrigger)

# HMTrigger (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract base class for triggering actions based on a set of conditions.

## Declaration

```swift
class HMTrigger
```

<a id="overview"></a>

## Overview

This class defines the basic behavior of triggers, but does not itself specify any criteria for firing a trigger. Use instances of subclasses of [HMTrigger](hmtrigger.md) to set up concrete triggers for actions.

## Topics

### Managing Triggers

- [name](hmtrigger/name.md): The name of the trigger.
- [updateName(\_:completionHandler:)](hmtrigger/updatename%28__completionhandler_%29.md): Updates the name of the trigger.
- [isEnabled](hmtrigger/isenabled.md): State of the trigger.
- [enable(\_:completionHandler:)](hmtrigger/enable%28__completionhandler_%29.md): Changes the enabled state of the trigger.
- [lastFireDate](hmtrigger/lastfiredate.md): Deprecated. The last time this trigger fired.
- [uniqueIdentifier](hmtrigger/uniqueidentifier.md): A unique identifier for this trigger.

### Managing Action Sets

- [actionSets](hmtrigger/actionsets.md): Array of all action sets that will be executed by the trigger.
- [addActionSet(\_:completionHandler:)](hmtrigger/addactionset%28__completionhandler_%29.md): Adds an action set to the trigger.
- [removeActionSet(\_:completionHandler:)](hmtrigger/removeactionset%28__completionhandler_%29.md): Removes an action set from the trigger.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HMEventTrigger](hmeventtrigger.md)
- [HMTimerTrigger](hmtimertrigger.md)

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

### Triggering an action set

- [triggers](hmhome/triggers.md): An array of triggers defined in the home.
- [addTrigger(\_:completionHandler:)](hmhome/addtrigger%28__completionhandler_%29.md): Adds a trigger to the home.
- [removeTrigger(\_:completionHandler:)](hmhome/removetrigger%28__completionhandler_%29.md): Removes a trigger from the home.
- [HMTimerTrigger](hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
- [HMEventTrigger](hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.

# HMTrigger (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract base class for triggering actions based on a set of conditions.

## Declaration

```objectivec
@interface HMTrigger : NSObject
```

<a id="overview"></a>

## Overview

This class defines the basic behavior of triggers, but does not itself specify any criteria for firing a trigger. Use instances of subclasses of [HMTrigger](hmtrigger.md) to set up concrete triggers for actions.

## Topics

### Managing Triggers

- [name](hmtrigger/name.md): The name of the trigger.
- [updateName:completionHandler:](hmtrigger/updatename%28__completionhandler_%29.md): Updates the name of the trigger.
- [enabled](hmtrigger/isenabled.md): State of the trigger.
- [enable:completionHandler:](hmtrigger/enable%28__completionhandler_%29.md): Changes the enabled state of the trigger.
- [lastFireDate](hmtrigger/lastfiredate.md): Deprecated. The last time this trigger fired.
- [uniqueIdentifier](hmtrigger/uniqueidentifier.md): A unique identifier for this trigger.

### Managing Action Sets

- [actionSets](hmtrigger/actionsets.md): Array of all action sets that will be executed by the trigger.
- [addActionSet:completionHandler:](hmtrigger/addactionset%28__completionhandler_%29.md): Adds an action set to the trigger.
- [removeActionSet:completionHandler:](hmtrigger/removeactionset%28__completionhandler_%29.md): Removes an action set from the trigger.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HMEventTrigger](hmeventtrigger.md)
- [HMTimerTrigger](hmtimertrigger.md)

## See Also

### Triggering an action set

- [triggers](hmhome/triggers.md): An array of triggers defined in the home.
- [addTrigger:completionHandler:](hmhome/addtrigger%28__completionhandler_%29.md): Adds a trigger to the home.
- [removeTrigger:completionHandler:](hmhome/removetrigger%28__completionhandler_%29.md): Removes a trigger from the home.
- [HMTimerTrigger](hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
- [HMEventTrigger](hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.
