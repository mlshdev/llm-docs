> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmpresenceeventtype/athome](https://developer.apple.com/documentation/homekit/hmpresenceeventtype/athome)

# atHome (Swift)

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Triggers the event when at least one user is in the home.

## Declaration

```swift
static var atHome: HMPresenceEventType { get }
```

<a id="Discussion"></a>

## Discussion

A convenience value for use in predicates on [HMEventTrigger](../hmeventtrigger.md). Represents the presence of at least one user in the home.

## See Also

### Using presence as a predicate

- [notAtHome](notathome.md): Triggers the event when there are no users in the home.

# HMPresenceEventTypeAtHome (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Triggers the event when at least one user is in the home.

## Declaration

```objectivec
HMPresenceEventTypeAtHome
```

<a id="Discussion"></a>

## Discussion

A convenience value for use in predicates on [HMEventTrigger](../hmeventtrigger.md). Represents the presence of at least one user in the home.

## See Also

### Using presence as a predicate

- [HMPresenceEventTypeNotAtHome](notathome.md): Triggers the event when there are no users in the home.
