> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/addactionset(withname:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/addactionset(withname:completionhandler:))

# addActionSet(withName:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds a new action set to the home.

## Declaration

```swift
func addActionSet(withName actionSetName: String, completionHandler completion: @escaping @Sendable (HMActionSet?, (any Error)?) -> Void)
```

```swift
func addActionSet(named actionSetName: String) async throws -> HMActionSet
```

## Parameters

- `actionSetName`: The name of the new action set. Must not be `nil`, and must not be the name of an action set already in the home.
- `completion`: The block executed after the request is processed.

  - **actionSet**: The newly created action set.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Creating action sets

- [actionSets](actionsets.md): An array of the action sets in the home.
- [removeActionSet(\_:completionHandler:)](removeactionset%28__completionhandler_%29.md): Removes an action set from the home.
- [executeActionSet(\_:completionHandler:)](executeactionset%28__completionhandler_%29.md): Executes all the actions in a specified action set.
- [builtinActionSet(ofType:)](builtinactionset%28oftype_%29.md): Retrieves the builtin action set for the specified type.
- [HMActionSet](../hmactionset.md): A collection of actions that you trigger as a group.

# addActionSetWithName:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds a new action set to the home.

## Declaration

```objectivec
- (void) addActionSetWithName:(NSString *) actionSetName completionHandler:(void (^)(HMActionSet *actionSet, NSError *error)) completion;
```

## Parameters

- `actionSetName`: The name of the new action set. Must not be `nil`, and must not be the name of an action set already in the home.
- `completion`: The block executed after the request is processed.

  - **actionSet**: The newly created action set.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Creating action sets

- [actionSets](actionsets.md): An array of the action sets in the home.
- [removeActionSet:completionHandler:](removeactionset%28__completionhandler_%29.md): Removes an action set from the home.
- [executeActionSet:completionHandler:](executeactionset%28__completionhandler_%29.md): Executes all the actions in a specified action set.
- [builtinActionSetOfType:](builtinactionset%28oftype_%29.md): Retrieves the builtin action set for the specified type.
- [HMActionSet](../hmactionset.md): A collection of actions that you trigger as a group.
