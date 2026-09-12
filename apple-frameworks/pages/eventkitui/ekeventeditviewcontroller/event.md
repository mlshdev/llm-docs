> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventeditviewcontroller/event](https://developer.apple.com/documentation/eventkitui/ekeventeditviewcontroller/event)

# event (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The event the user creates or edits using this view controller.

## Declaration

```swift
var event: EKEvent? { get set }
```

<a id="Discussion"></a>

## Discussion

If `nil`, creates and adds a new event to the default calendar’s event store. To avoid throwing an exception, ensure that the event is in the specified event store.

## See Also

### Creating and Saving Events

- [eventStore](eventstore.md): The event store used to save the event.

# event (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The event the user creates or edits using this view controller.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) EKEvent * event;
```

<a id="Discussion"></a>

## Discussion

If `nil`, creates and adds a new event to the default calendar’s event store. To avoid throwing an exception, ensure that the event is in the specified event store.

## See Also

### Creating and Saving Events

- [eventStore](eventstore.md): The event store used to save the event.
