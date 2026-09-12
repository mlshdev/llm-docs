> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicwriteaction](https://developer.apple.com/documentation/homekit/hmcharacteristicwriteaction)

# HMCharacteristicWriteAction (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An action in an action set that writes a value to a characteristic.

## Declaration

```swift
class HMCharacteristicWriteAction<TargetValueType> where TargetValueType : NSCopying
```

<a id="overview"></a>

## Overview

Action sets are instances of [HMActionSet](hmactionset.md).

## Topics

### New Methods

- [init(characteristic:targetValue:)](hmcharacteristicwriteaction/init%28characteristic_targetvalue_%29.md): Initialize a characteristic write action with a specified characteristic and target value.
- [characteristic](hmcharacteristicwriteaction/characteristic.md): The characteristic whose value is to be written by the action.
- [targetValue](hmcharacteristicwriteaction/targetvalue.md): The value that will be written to the characteristic when the action is executed.
- [updateTargetValue(\_:completionHandler:)](hmcharacteristicwriteaction/updatetargetvalue%28__completionhandler_%29.md): Updates the target value.

## Relationships

### Inherits From

- [HMAction](hmaction.md)

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

### Defining the associated actions

- [actions](hmactionset/actions.md): Set of actions in the action set.
- [addAction(\_:completionHandler:)](hmactionset/addaction%28__completionhandler_%29.md): Adds an action to the action set.
- [removeAction(\_:completionHandler:)](hmactionset/removeaction%28__completionhandler_%29.md): Removes an action from the action set.
- [HMAction](hmaction.md): An abstract base class for actions in HomeKit.

# HMCharacteristicWriteAction (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An action in an action set that writes a value to a characteristic.

## Declaration

```objectivec
@interface HMCharacteristicWriteAction : HMAction
```

<a id="overview"></a>

## Overview

Action sets are instances of [HMActionSet](hmactionset.md).

## Topics

### New Methods

- [initWithCharacteristic:targetValue:](hmcharacteristicwriteaction/init%28characteristic_targetvalue_%29.md): Initialize a characteristic write action with a specified characteristic and target value.
- [characteristic](hmcharacteristicwriteaction/characteristic.md): The characteristic whose value is to be written by the action.
- [targetValue](hmcharacteristicwriteaction/targetvalue.md): The value that will be written to the characteristic when the action is executed.
- [updateTargetValue:completionHandler:](hmcharacteristicwriteaction/updatetargetvalue%28__completionhandler_%29.md): Updates the target value.

## Relationships

### Inherits From

- [HMAction](hmaction.md)

## See Also

### Defining the associated actions

- [actions](hmactionset/actions.md): Set of actions in the action set.
- [addAction:completionHandler:](hmactionset/addaction%28__completionhandler_%29.md): Adds an action to the action set.
- [removeAction:completionHandler:](hmactionset/removeaction%28__completionhandler_%29.md): Removes an action from the action set.
- [HMAction](hmaction.md): An abstract base class for actions in HomeKit.
