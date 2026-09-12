> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/actionsets](https://developer.apple.com/documentation/homekit/hmhome/actionsets)

# actionSets (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of the action sets in the home.

## Declaration

```swift
var actionSets: [HMActionSet] { get }
```

<a id="Discussion"></a>

## Discussion

Action sets are instances of [HMActionSet](../hmactionset.md).

## See Also

### Creating action sets

- [addActionSet(withName:completionHandler:)](addactionset%28withname_completionhandler_%29.md): Adds a new action set to the home.
- [removeActionSet(\_:completionHandler:)](removeactionset%28__completionhandler_%29.md): Removes an action set from the home.
- [executeActionSet(\_:completionHandler:)](executeactionset%28__completionhandler_%29.md): Executes all the actions in a specified action set.
- [builtinActionSet(ofType:)](builtinactionset%28oftype_%29.md): Retrieves the builtin action set for the specified type.
- [HMActionSet](../hmactionset.md): A collection of actions that you trigger as a group.

# actionSets (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of the action sets in the home.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMActionSet *> * actionSets;
```

<a id="Discussion"></a>

## Discussion

Action sets are instances of [HMActionSet](../hmactionset.md).

## See Also

### Creating action sets

- [addActionSetWithName:completionHandler:](addactionset%28withname_completionhandler_%29.md): Adds a new action set to the home.
- [removeActionSet:completionHandler:](removeactionset%28__completionhandler_%29.md): Removes an action set from the home.
- [executeActionSet:completionHandler:](executeactionset%28__completionhandler_%29.md): Executes all the actions in a specified action set.
- [builtinActionSetOfType:](builtinactionset%28oftype_%29.md): Retrieves the builtin action set for the specified type.
- [HMActionSet](../hmactionset.md): A collection of actions that you trigger as a group.
