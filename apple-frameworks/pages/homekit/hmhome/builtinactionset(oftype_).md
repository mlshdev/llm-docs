> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/builtinactionset(oftype:)](https://developer.apple.com/documentation/homekit/hmhome/builtinactionset(oftype:))

# builtinActionSet(ofType:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the builtin action set for the specified type.

## Declaration

```swift
func builtinActionSet(ofType actionSetType: String) -> HMActionSet?
```

## Parameters

- `actionSetType`: Type of the builtin action set. Supported action set types are [HMActionSetTypeWakeUp](../hmactionsettypewakeup.md), [HMActionSetTypeSleep](../hmactionsettypesleep.md), [HMActionSetTypeHomeDeparture](../hmactionsettypehomedeparture.md) and [HMActionSetTypeHomeArrival](../hmactionsettypehomearrival.md).

<a id="return-value"></a>

## Return Value

The builtin action set corresponding to the type argument.

<a id="Discussion"></a>

## Discussion

Returns `nil` if no action set is found.

## See Also

### Creating action sets

- [actionSets](actionsets.md): An array of the action sets in the home.
- [addActionSet(withName:completionHandler:)](addactionset%28withname_completionhandler_%29.md): Adds a new action set to the home.
- [removeActionSet(\_:completionHandler:)](removeactionset%28__completionhandler_%29.md): Removes an action set from the home.
- [executeActionSet(\_:completionHandler:)](executeactionset%28__completionhandler_%29.md): Executes all the actions in a specified action set.
- [HMActionSet](../hmactionset.md): A collection of actions that you trigger as a group.

# builtinActionSetOfType: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the builtin action set for the specified type.

## Declaration

```objectivec
- (HMActionSet *) builtinActionSetOfType:(NSString *) actionSetType;
```

## Parameters

- `actionSetType`: Type of the builtin action set. Supported action set types are [HMActionSetTypeWakeUp](../hmactionsettypewakeup.md), [HMActionSetTypeSleep](../hmactionsettypesleep.md), [HMActionSetTypeHomeDeparture](../hmactionsettypehomedeparture.md) and [HMActionSetTypeHomeArrival](../hmactionsettypehomearrival.md).

<a id="return-value"></a>

## Return Value

The builtin action set corresponding to the type argument.

<a id="Discussion"></a>

## Discussion

Returns `nil` if no action set is found.

## See Also

### Creating action sets

- [actionSets](actionsets.md): An array of the action sets in the home.
- [addActionSetWithName:completionHandler:](addactionset%28withname_completionhandler_%29.md): Adds a new action set to the home.
- [removeActionSet:completionHandler:](removeactionset%28__completionhandler_%29.md): Removes an action set from the home.
- [executeActionSet:completionHandler:](executeactionset%28__completionhandler_%29.md): Executes all the actions in a specified action set.
- [HMActionSet](../hmactionset.md): A collection of actions that you trigger as a group.
