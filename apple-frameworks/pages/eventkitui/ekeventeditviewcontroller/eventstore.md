> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventeditviewcontroller/eventstore](https://developer.apple.com/documentation/eventkitui/ekeventeditviewcontroller/eventstore)

# eventStore (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The event store used to save the event.

## Declaration

```swift
var eventStore: EKEventStore! { get set }
```

<a id="Discussion"></a>

## Discussion

This property must be set before displaying the view.

## See Also

### Creating and Saving Events

- [event](event.md): The event the user creates or edits using this view controller.

# eventStore (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The event store used to save the event.

## Declaration

```objectivec
@property (nonatomic, retain, null_unspecified) EKEventStore * eventStore;
```

<a id="Discussion"></a>

## Discussion

This property must be set before displaying the view.

## See Also

### Creating and Saving Events

- [event](event.md): The event the user creates or edits using this view controller.
