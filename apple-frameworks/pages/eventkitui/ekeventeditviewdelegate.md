> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventeditviewdelegate](https://developer.apple.com/documentation/eventkitui/ekeventeditviewdelegate)

# EKEventEditViewDelegate (Swift)

**Framework:** EventKit UI  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A notification sent to the delegate when the user finishes editing an event.

## Declaration

```swift
protocol EKEventEditViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Delegates of an [EKEventEditViewController](ekeventeditviewcontroller.md) object conform to this protocol. Use `EKEventEditViewController` to allow the user to either create an event or edit an existing event. To be notified when the user finishes editing the event, set the delegate to an object conforming to this protocol.

## Topics

### Getting the Default Calendar

- [eventEditViewControllerDefaultCalendar(forNewEvents:)](ekeventeditviewdelegate/eventeditviewcontrollerdefaultcalendar%28fornewevents_%29.md): The default calendar to use when creating new events.

### Finishing an Edit

- [eventEditViewController(\_:didCompleteWith:)](ekeventeditviewdelegate/eventeditviewcontroller%28__didcompletewith_%29.md): Invoked when the user finishes editing an event.
- [EKEventEditViewAction](ekeventeditviewaction.md): The action taken by the user after editing an event.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the Event Editing Interface

- [editViewDelegate](ekeventeditviewcontroller/editviewdelegate.md): The delegate to notify when editing an event.

# EKEventEditViewDelegate (Objective-C)

**Framework:** EventKit UI  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A notification sent to the delegate when the user finishes editing an event.

## Declaration

```objectivec
@protocol EKEventEditViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Delegates of an [EKEventEditViewController](ekeventeditviewcontroller.md) object conform to this protocol. Use `EKEventEditViewController` to allow the user to either create an event or edit an existing event. To be notified when the user finishes editing the event, set the delegate to an object conforming to this protocol.

## Topics

### Getting the Default Calendar

- [eventEditViewControllerDefaultCalendarForNewEvents:](ekeventeditviewdelegate/eventeditviewcontrollerdefaultcalendar%28fornewevents_%29.md): The default calendar to use when creating new events.

### Finishing an Edit

- [eventEditViewController:didCompleteWithAction:](ekeventeditviewdelegate/eventeditviewcontroller%28__didcompletewith_%29.md): Invoked when the user finishes editing an event.
- [EKEventEditViewAction](ekeventeditviewaction.md): The action taken by the user after editing an event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the Event Editing Interface

- [editViewDelegate](ekeventeditviewcontroller/editviewdelegate.md): The delegate to notify when editing an event.
