> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/executeactionset(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/executeactionset(_:completionhandler:))

# executeActionSet(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Executes all the actions in a specified action set.

## Declaration

```swift
func executeActionSet(_ actionSet: HMActionSet, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func executeActionSet(_ actionSet: HMActionSet) async throws
```

## Parameters

- `actionSet`: The action set to execute.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Creating action sets

- [actionSets](actionsets.md): An array of the action sets in the home.
- [addActionSet(withName:completionHandler:)](addactionset%28withname_completionhandler_%29.md): Adds a new action set to the home.
- [removeActionSet(\_:completionHandler:)](removeactionset%28__completionhandler_%29.md): Removes an action set from the home.
- [builtinActionSet(ofType:)](builtinactionset%28oftype_%29.md): Retrieves the builtin action set for the specified type.
- [HMActionSet](../hmactionset.md): A collection of actions that you trigger as a group.

# executeActionSet:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Executes all the actions in a specified action set.

## Declaration

```objectivec
- (void) executeActionSet:(HMActionSet *) actionSet completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `actionSet`: The action set to execute.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Creating action sets

- [actionSets](actionsets.md): An array of the action sets in the home.
- [addActionSetWithName:completionHandler:](addactionset%28withname_completionhandler_%29.md): Adds a new action set to the home.
- [removeActionSet:completionHandler:](removeactionset%28__completionhandler_%29.md): Removes an action set from the home.
- [builtinActionSetOfType:](builtinactionset%28oftype_%29.md): Retrieves the builtin action set for the specified type.
- [HMActionSet](../hmactionset.md): A collection of actions that you trigger as a group.
