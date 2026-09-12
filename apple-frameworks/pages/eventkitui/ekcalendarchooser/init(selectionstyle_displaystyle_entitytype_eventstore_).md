> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekcalendarchooser/init(selectionstyle:displaystyle:entitytype:eventstore:)](https://developer.apple.com/documentation/eventkitui/ekcalendarchooser/init(selectionstyle:displaystyle:entitytype:eventstore:))

# init(selectionStyle:displayStyle:entityType:eventStore:) (Swift)

**Framework:** EventKit UI  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Initializes a newly created calendar chooser for a specific entity type.

## Declaration

```swift
init(selectionStyle style: EKCalendarChooserSelectionStyle, displayStyle: EKCalendarChooserDisplayStyle, entityType: EKEntityType, eventStore: EKEventStore)
```

## Parameters

- `style`: Determines whether to allow selection of multiple calendars. Possible values are described in [EKCalendarChooserSelectionStyle](../ekcalendarchooserselectionstyle.md).
- `displayStyle`: Determines which calendars to display. Possible values are described in [EKCalendarChooserDisplayStyle](../ekcalendarchooserdisplaystyle.md).
- `entityType`: The entity type of the calendar. Possible values are [EKEntityType.event](../../eventkit/ekentitytype/event.md) and [EKEntityType.reminder](../../eventkit/ekentitytype/reminder.md).
- `eventStore`: The event store to which the calendars belong.

<a id="Return-Value"></a>

## Return Value

The initialized calendar chooser.

## See Also

### Initializing Calendar Choosers

- [init(selectionStyle:displayStyle:eventStore:)](init%28selectionstyle_displaystyle_eventstore_%29.md): Initializes a newly created calendar chooser.

# initWithSelectionStyle:displayStyle:entityType:eventStore: (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Initializes a newly created calendar chooser for a specific entity type.

## Declaration

```objectivec
- (id) initWithSelectionStyle:(EKCalendarChooserSelectionStyle) style displayStyle:(EKCalendarChooserDisplayStyle) displayStyle entityType:(EKEntityType) entityType eventStore:(EKEventStore *) eventStore;
```

## Parameters

- `style`: Determines whether to allow selection of multiple calendars. Possible values are described in [EKCalendarChooserSelectionStyle](../ekcalendarchooserselectionstyle.md).
- `displayStyle`: Determines which calendars to display. Possible values are described in [EKCalendarChooserDisplayStyle](../ekcalendarchooserdisplaystyle.md).
- `entityType`: The entity type of the calendar. Possible values are [EKEntityTypeEvent](../../eventkit/ekentitytype/event.md) and [EKEntityTypeReminder](../../eventkit/ekentitytype/reminder.md).
- `eventStore`: The event store to which the calendars belong.

<a id="Return-Value"></a>

## Return Value

The initialized calendar chooser.

## See Also

### Initializing Calendar Choosers

- [initWithSelectionStyle:displayStyle:eventStore:](init%28selectionstyle_displaystyle_eventstore_%29.md): Initializes a newly created calendar chooser.
