> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmactionset/actions](https://developer.apple.com/documentation/homekit/hmactionset/actions)

# actions (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Set of actions in the action set.

## Declaration

```swift
var actions: Set<HMAction> { get }
```

## See Also

### Defining the associated actions

- [addAction(\_:completionHandler:)](addaction%28__completionhandler_%29.md): Adds an action to the action set.
- [removeAction(\_:completionHandler:)](removeaction%28__completionhandler_%29.md): Removes an action from the action set.
- [HMCharacteristicWriteAction](../hmcharacteristicwriteaction.md): An action in an action set that writes a value to a characteristic.
- [HMAction](../hmaction.md): An abstract base class for actions in HomeKit.

# actions (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Set of actions in the action set.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<HMAction *> * actions;
```

## See Also

### Defining the associated actions

- [addAction:completionHandler:](addaction%28__completionhandler_%29.md): Adds an action to the action set.
- [removeAction:completionHandler:](removeaction%28__completionhandler_%29.md): Removes an action from the action set.
- [HMCharacteristicWriteAction](../hmcharacteristicwriteaction.md): An action in an action set that writes a value to a characteristic.
- [HMAction](../hmaction.md): An abstract base class for actions in HomeKit.
