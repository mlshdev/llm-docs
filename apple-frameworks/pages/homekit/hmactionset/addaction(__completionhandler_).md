> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmactionset/addaction(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmactionset/addaction(_:completionhandler:))

# addAction(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Adds an action to the action set.

## Declaration

```swift
func addAction(_ action: HMAction, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func addAction(_ action: HMAction) async throws
```

## Parameters

- `action`: The action to add. Actions may only be in one set—create separate [HMAction](../hmaction.md) objects for the same conceptual action if you want an action to be in more than one action set.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Defining the associated actions

- [actions](actions.md): Set of actions in the action set.
- [removeAction(\_:completionHandler:)](removeaction%28__completionhandler_%29.md): Removes an action from the action set.
- [HMCharacteristicWriteAction](../hmcharacteristicwriteaction.md): An action in an action set that writes a value to a characteristic.
- [HMAction](../hmaction.md): An abstract base class for actions in HomeKit.

# addAction:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds an action to the action set.

## Declaration

```objectivec
- (void) addAction:(HMAction *) action completionHandler:(HMErrorBlock) completion;
```

## Parameters

- `action`: The action to add. Actions may only be in one set—create separate [HMAction](../hmaction.md) objects for the same conceptual action if you want an action to be in more than one action set.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Defining the associated actions

- [actions](actions.md): Set of actions in the action set.
- [removeAction:completionHandler:](removeaction%28__completionhandler_%29.md): Removes an action from the action set.
- [HMCharacteristicWriteAction](../hmcharacteristicwriteaction.md): An action in an action set that writes a value to a characteristic.
- [HMAction](../hmaction.md): An abstract base class for actions in HomeKit.
