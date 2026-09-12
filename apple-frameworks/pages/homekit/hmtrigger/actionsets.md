> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtrigger/actionsets](https://developer.apple.com/documentation/homekit/hmtrigger/actionsets)

# actionSets (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Array of all action sets that will be executed by the trigger.

## Declaration

```swift
var actionSets: [HMActionSet] { get }
```

<a id="Discussion"></a>

## Discussion

Action sets are instances of [HMActionSet](../hmactionset.md).

## See Also

### Managing Action Sets

- [addActionSet(\_:completionHandler:)](addactionset%28__completionhandler_%29.md): Adds an action set to the trigger.
- [removeActionSet(\_:completionHandler:)](removeactionset%28__completionhandler_%29.md): Removes an action set from the trigger.

# actionSets (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Array of all action sets that will be executed by the trigger.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMActionSet *> * actionSets;
```

<a id="Discussion"></a>

## Discussion

Action sets are instances of [HMActionSet](../hmactionset.md).

## See Also

### Managing Action Sets

- [addActionSet:completionHandler:](addactionset%28__completionhandler_%29.md): Adds an action set to the trigger.
- [removeActionSet:completionHandler:](removeactionset%28__completionhandler_%29.md): Removes an action set from the trigger.
