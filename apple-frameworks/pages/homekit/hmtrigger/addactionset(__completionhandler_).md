> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtrigger/addactionset(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmtrigger/addactionset(_:completionhandler:))

# addActionSet(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Adds an action set to the trigger.

## Declaration

```swift
func addActionSet(_ actionSet: HMActionSet, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func addActionSet(_ actionSet: HMActionSet) async throws
```

## Parameters

- `actionSet`: The new action set.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing Action Sets

- [actionSets](actionsets.md): Array of all action sets that will be executed by the trigger.
- [removeActionSet(\_:completionHandler:)](removeactionset%28__completionhandler_%29.md): Removes an action set from the trigger.

# addActionSet:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds an action set to the trigger.

## Declaration

```objectivec
- (void) addActionSet:(HMActionSet *) actionSet completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `actionSet`: The new action set.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing Action Sets

- [actionSets](actionsets.md): Array of all action sets that will be executed by the trigger.
- [removeActionSet:completionHandler:](removeactionset%28__completionhandler_%29.md): Removes an action set from the trigger.
