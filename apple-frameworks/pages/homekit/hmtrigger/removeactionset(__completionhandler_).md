> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtrigger/removeactionset(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmtrigger/removeactionset(_:completionhandler:))

# removeActionSet(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Removes an action set from the trigger.

## Declaration

```swift
func removeActionSet(_ actionSet: HMActionSet, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeActionSet(_ actionSet: HMActionSet) async throws
```

## Parameters

- `actionSet`: The action set to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing Action Sets

- [actionSets](actionsets.md): Array of all action sets that will be executed by the trigger.
- [addActionSet(\_:completionHandler:)](addactionset%28__completionhandler_%29.md): Adds an action set to the trigger.

# removeActionSet:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes an action set from the trigger.

## Declaration

```objectivec
- (void) removeActionSet:(HMActionSet *) actionSet completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `actionSet`: The action set to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing Action Sets

- [actionSets](actionsets.md): Array of all action sets that will be executed by the trigger.
- [addActionSet:completionHandler:](addactionset%28__completionhandler_%29.md): Adds an action set to the trigger.
