> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekcalendarchooser/init(selectionstyle:displaystyle:eventstore:)](https://developer.apple.com/documentation/eventkitui/ekcalendarchooser/init(selectionstyle:displaystyle:eventstore:))

# init(selectionStyle:displayStyle:eventStore:) (Swift)

**Framework:** EventKit UI  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Initializes a newly created calendar chooser.

## Declaration

```swift
init(selectionStyle: EKCalendarChooserSelectionStyle, displayStyle: EKCalendarChooserDisplayStyle, eventStore: EKEventStore)
```

## Parameters

- `selectionStyle`: Determines whether to allow selection of multiple calendars. Possible values are described in [EKCalendarChooserSelectionStyle](../ekcalendarchooserselectionstyle.md).
- `displayStyle`: Determines which calendars to display. Possible values are described in [EKCalendarChooserDisplayStyle](../ekcalendarchooserdisplaystyle.md).
- `eventStore`: The event store to which the calendars belong.

<a id="Return-Value"></a>

## Return Value

The initialized calendar chooser.

## See Also

### Initializing Calendar Choosers

- [init(selectionStyle:displayStyle:entityType:eventStore:)](init%28selectionstyle_displaystyle_entitytype_eventstore_%29.md): Initializes a newly created calendar chooser for a specific entity type.

# initWithSelectionStyle:displayStyle:eventStore: (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Initializes a newly created calendar chooser.

## Declaration

```objectivec
- (id) initWithSelectionStyle:(EKCalendarChooserSelectionStyle) selectionStyle displayStyle:(EKCalendarChooserDisplayStyle) displayStyle eventStore:(EKEventStore *) eventStore;
```

## Parameters

- `selectionStyle`: Determines whether to allow selection of multiple calendars. Possible values are described in [EKCalendarChooserSelectionStyle](../ekcalendarchooserselectionstyle.md).
- `displayStyle`: Determines which calendars to display. Possible values are described in [EKCalendarChooserDisplayStyle](../ekcalendarchooserdisplaystyle.md).
- `eventStore`: The event store to which the calendars belong.

<a id="Return-Value"></a>

## Return Value

The initialized calendar chooser.

## See Also

### Initializing Calendar Choosers

- [initWithSelectionStyle:displayStyle:entityType:eventStore:](init%28selectionstyle_displaystyle_entitytype_eventstore_%29.md): Initializes a newly created calendar chooser for a specific entity type.
