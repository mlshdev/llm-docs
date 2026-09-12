> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmactionset/removeaction(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmactionset/removeaction(_:completionhandler:))

# removeAction(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Removes an action from the action set.

## Declaration

```swift
func removeAction(_ action: HMAction, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeAction(_ action: HMAction) async throws
```

## Parameters

- `action`: The action to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Defining the associated actions

- [actions](actions.md): Set of actions in the action set.
- [addAction(\_:completionHandler:)](addaction%28__completionhandler_%29.md): Adds an action to the action set.
- [HMCharacteristicWriteAction](../hmcharacteristicwriteaction.md): An action in an action set that writes a value to a characteristic.
- [HMAction](../hmaction.md): An abstract base class for actions in HomeKit.

# removeAction:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes an action from the action set.

## Declaration

```objectivec
- (void) removeAction:(HMAction *) action completionHandler:(HMErrorBlock) completion;
```

## Parameters

- `action`: The action to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Defining the associated actions

- [actions](actions.md): Set of actions in the action set.
- [addAction:completionHandler:](addaction%28__completionhandler_%29.md): Adds an action to the action set.
- [HMCharacteristicWriteAction](../hmcharacteristicwriteaction.md): An action in an action set that writes a value to a characteristic.
- [HMAction](../hmaction.md): An abstract base class for actions in HomeKit.
