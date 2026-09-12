> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aeeventclass](https://developer.apple.com/documentation/coreservices/aeeventclass)

# AEEventClass (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies the event class of an Apple event.

## Declaration

```swift
typealias AEEventClass = FourCharCode
```

<a id="discussion"></a>

## Discussion

Apple events are identified by their event class and event ID attributes. The event class is the attribute that identifies a group of related Apple events. When you call the `AEProcessAppleEvent(_:)` function, the Apple Event Manager uses these attributes to identify a handler for a specific Apple event.

For more information on Apple event classes, see [Event Class Constants](apple_events/1527210-event_class_constants.md).

# AEEventClass (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies the event class of an Apple event.

## Declaration

```objectivec
typedef FourCharCode AEEventClass;
```

<a id="discussion"></a>

## Discussion

Apple events are identified by their event class and event ID attributes. The event class is the attribute that identifies a group of related Apple events. When you call the `AEProcessAppleEvent` function, the Apple Event Manager uses these attributes to identify a handler for a specific Apple event.

For more information on Apple event classes, see [Event Class Constants](1527210-event_class_constants.md).
