> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aeeventid](https://developer.apple.com/documentation/coreservices/aeeventid)

# AEEventID (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies the event ID of an Apple event.

## Declaration

```swift
typealias AEEventID = FourCharCode
```

<a id="discussion"></a>

## Discussion

Apple events are identified by their event class and event ID attributes. The event ID is the attribute that identifies a particular Apple event within its event class. In conjunction with the event class, the event ID uniquely identifies the Apple event and communicates what action the Apple event should perform.

For more information on Apple event IDs, see [Event ID Constants](apple_events/1527223-event_id_constants.md).

# AEEventID (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies the event ID of an Apple event.

## Declaration

```objectivec
typedef FourCharCode AEEventID;
```

<a id="discussion"></a>

## Discussion

Apple events are identified by their event class and event ID attributes. The event ID is the attribute that identifies a particular Apple event within its event class. In conjunction with the event class, the event ID uniquely identifies the Apple event and communicates what action the Apple event should perform.

For more information on Apple event IDs, see [Event ID Constants](1527223-event_id_constants.md).
