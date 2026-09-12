> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventeditviewdelegate/eventeditviewcontrollerdefaultcalendar(fornewevents:)](https://developer.apple.com/documentation/eventkitui/ekeventeditviewdelegate/eventeditviewcontrollerdefaultcalendar(fornewevents:))

# eventEditViewControllerDefaultCalendar(forNewEvents:) (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The default calendar to use when creating new events.

## Declaration

```swift
optional func eventEditViewControllerDefaultCalendar(forNewEvents controller: EKEventEditViewController) -> EKCalendar
```

## Parameters

- `controller`: The event edit view controller requesting the default calendar.

<a id="Discussion"></a>

## Discussion

If the delegate does not implement this method, uses the event store’s [defaultCalendarForNewEvents](../../eventkit/ekeventstore/defaultcalendarfornewevents.md) property instead.

# eventEditViewControllerDefaultCalendarForNewEvents: (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The default calendar to use when creating new events.

## Declaration

```objectivec
- (EKCalendar *) eventEditViewControllerDefaultCalendarForNewEvents:(EKEventEditViewController *) controller;
```

## Parameters

- `controller`: The event edit view controller requesting the default calendar.

<a id="Discussion"></a>

## Discussion

If the delegate does not implement this method, uses the event store’s [defaultCalendarForNewEvents](../../eventkit/ekeventstore/defaultcalendarfornewevents.md) property instead.
