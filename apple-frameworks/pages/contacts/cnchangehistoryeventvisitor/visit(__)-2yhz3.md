> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryeventvisitor/visit(_:)-2yhz3](https://developer.apple.com/documentation/contacts/cnchangehistoryeventvisitor/visit(_:)-2yhz3)

# visit(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate to drop all contacts and groups before handling more events.

## Declaration

```swift
func visit(_ event: CNChangeHistoryDropEverythingEvent)
```

## Parameters

- `event`: The event that indicates the delegate should drop all contacts and groups before handling more events.

<a id="Discussion"></a>

## Discussion

When the system sends this event to your delegate, enough has changed since the last time your app fetched the history changes that an incremental update is no longer possible. Following the drop everything event, the system sends your delegate an add event for each contact and group currently in the database. This allows you to implement full syncs and incremental syncs using the same code.

# visitDropEverythingEvent: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate to drop all contacts and groups before handling more events.

## Declaration

```objectivec
- (void) visitDropEverythingEvent:(CNChangeHistoryDropEverythingEvent *) event;
```

## Parameters

- `event`: The event that indicates the delegate should drop all contacts and groups before handling more events.

<a id="Discussion"></a>

## Discussion

When the system sends this event to your delegate, enough has changed since the last time your app fetched the history changes that an incremental update is no longer possible. Following the drop everything event, the system sends your delegate an add event for each contact and group currently in the database. This allows you to implement full syncs and incremental syncs using the same code.
