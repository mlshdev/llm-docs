> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/triggers](https://developer.apple.com/documentation/homekit/hmhome/triggers)

# triggers (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of triggers defined in the home.

## Declaration

```swift
var triggers: [HMTrigger] { get }
```

## See Also

### Triggering an action set

- [addTrigger(\_:completionHandler:)](addtrigger%28__completionhandler_%29.md): Adds a trigger to the home.
- [removeTrigger(\_:completionHandler:)](removetrigger%28__completionhandler_%29.md): Removes a trigger from the home.
- [HMTimerTrigger](../hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
- [HMEventTrigger](../hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.
- [HMTrigger](../hmtrigger.md): An abstract base class for triggering actions based on a set of conditions.

# triggers (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of triggers defined in the home.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMTrigger *> * triggers;
```

## See Also

### Triggering an action set

- [addTrigger:completionHandler:](addtrigger%28__completionhandler_%29.md): Adds a trigger to the home.
- [removeTrigger:completionHandler:](removetrigger%28__completionhandler_%29.md): Removes a trigger from the home.
- [HMTimerTrigger](../hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
- [HMEventTrigger](../hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.
- [HMTrigger](../hmtrigger.md): An abstract base class for triggering actions based on a set of conditions.
