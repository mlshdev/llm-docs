> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaction](https://developer.apple.com/documentation/homekit/hmaction)

# HMAction (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract base class for actions in HomeKit.

## Declaration

```swift
class HMAction
```

<a id="overview"></a>

## Overview

Actions can be added to [HMActionSet](hmactionset.md) objects. Action sets can then be set for automatic execution in response to specific conditions using [HMTrigger](hmtrigger.md) objects, or manually triggered with [executeActionSet(\_:completionHandler:)](hmhome/executeactionset%28__completionhandler_%29.md).

## Topics

### Identifying an action

- [uniqueIdentifier](hmaction/uniqueidentifier.md): A unique identifier for the action.

### Initializers

- [init()](hmaction/init%28%29.md): Deprecated.

### Type Methods

- [new()](hmaction/new%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HMCharacteristicWriteAction](hmcharacteristicwriteaction.md)

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

### Related Documentation

- [HomeKit Developer Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/HomeKitDeveloperGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40015050)

### Defining the associated actions

- [actions](hmactionset/actions.md): Set of actions in the action set.
- [addAction(\_:completionHandler:)](hmactionset/addaction%28__completionhandler_%29.md): Adds an action to the action set.
- [removeAction(\_:completionHandler:)](hmactionset/removeaction%28__completionhandler_%29.md): Removes an action from the action set.
- [HMCharacteristicWriteAction](hmcharacteristicwriteaction.md): An action in an action set that writes a value to a characteristic.

# HMAction (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract base class for actions in HomeKit.

## Declaration

```objectivec
@interface HMAction : NSObject
```

<a id="overview"></a>

## Overview

Actions can be added to [HMActionSet](hmactionset.md) objects. Action sets can then be set for automatic execution in response to specific conditions using [HMTrigger](hmtrigger.md) objects, or manually triggered with [executeActionSet:completionHandler:](hmhome/executeactionset%28__completionhandler_%29.md).

## Topics

### Identifying an action

- [uniqueIdentifier](hmaction/uniqueidentifier.md): A unique identifier for the action.

### Initializers

- [init](hmaction/init%28%29.md): Deprecated.

### Type Methods

- [new](hmaction/new%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HMCharacteristicWriteAction](hmcharacteristicwriteaction.md)

## See Also

### Related Documentation

- [HomeKit Developer Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/HomeKitDeveloperGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40015050)

### Defining the associated actions

- [actions](hmactionset/actions.md): Set of actions in the action set.
- [addAction:completionHandler:](hmactionset/addaction%28__completionhandler_%29.md): Adds an action to the action set.
- [removeAction:completionHandler:](hmactionset/removeaction%28__completionhandler_%29.md): Removes an action from the action set.
- [HMCharacteristicWriteAction](hmcharacteristicwriteaction.md): An action in an action set that writes a value to a characteristic.
