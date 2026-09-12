> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomedelegate/home(_:didupdate:)-3l4r1](https://developer.apple.com/documentation/homekit/hmhomedelegate/home(_:didupdate:)-3l4r1)

# home(\_:didUpdate:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a home updated a trigger.

## Declaration

```swift
optional func home(_ home: HMHome, didUpdate trigger: HMTrigger)
```

## Parameters

- `home`: The home.
- `trigger`: The trigger that was updated.

<a id="Discussion"></a>

## Discussion

Enabling or disabling a trigger or modifying its action sets will cause this method to be called.

## See Also

### Observing Action and Trigger Configuration

- [home(\_:didAdd:)](home%28__didadd_%29-9dcki.md): Tells the delegate that a home added an action set.
- [home(\_:didUpdateNameFor:)](home%28__didupdatenamefor_%29-7fxvl.md): Tells the delegate that a home updated the name of an action set.
- [home(\_:didUpdateActionsFor:)](home%28__didupdateactionsfor_%29.md): Tells the delegate that a home updated the actions for an action set.
- [home(\_:didRemove:)](home%28__didremove_%29-80ewx.md): Tells the delegate that a home removed an action set.
- [home(\_:didAdd:)](home%28__didadd_%29-64yxx.md): Tells the delegate that a home added a trigger.
- [home(\_:didUpdateNameFor:)](home%28__didupdatenamefor_%29-8vn79.md): Tells the delegate that a home updated the name of a trigger.
- [home(\_:didRemove:)](home%28__didremove_%29-4ujfa.md): Tells the delegate that a home removed a trigger.

# home:didUpdateTrigger: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a home updated a trigger.

## Declaration

```objectivec
- (void) home:(HMHome *) home didUpdateTrigger:(HMTrigger *) trigger;
```

## Parameters

- `home`: The home.
- `trigger`: The trigger that was updated.

<a id="Discussion"></a>

## Discussion

Enabling or disabling a trigger or modifying its action sets will cause this method to be called.

## See Also

### Observing Action and Trigger Configuration

- [home:didAddActionSet:](home%28__didadd_%29-9dcki.md): Tells the delegate that a home added an action set.
- [home:didUpdateNameForActionSet:](home%28__didupdatenamefor_%29-7fxvl.md): Tells the delegate that a home updated the name of an action set.
- [home:didUpdateActionsForActionSet:](home%28__didupdateactionsfor_%29.md): Tells the delegate that a home updated the actions for an action set.
- [home:didRemoveActionSet:](home%28__didremove_%29-80ewx.md): Tells the delegate that a home removed an action set.
- [home:didAddTrigger:](home%28__didadd_%29-64yxx.md): Tells the delegate that a home added a trigger.
- [home:didUpdateNameForTrigger:](home%28__didupdatenamefor_%29-8vn79.md): Tells the delegate that a home updated the name of a trigger.
- [home:didRemoveTrigger:](home%28__didremove_%29-4ujfa.md): Tells the delegate that a home removed a trigger.
