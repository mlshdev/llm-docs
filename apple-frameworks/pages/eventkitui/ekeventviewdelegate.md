> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/eventkitui/ekeventviewdelegate

# EKEventViewDelegate (Swift)

**Framework:** EventKit UI  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Delegates used to display details for calendar events.

## Declaration

```swift
protocol EKEventViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Delegates of an [EKEventViewController](ekeventviewcontroller.md) object conform to this protocol. Notifies the event view controller’s delegate when closing the event view controller. It is your responsibility to close the event view controller and perform any additional tasks within this protocol’s method.

## Topics

### Responding to the Interface’s Dismissal

- [EKEventViewAction](ekeventviewaction.md): Describes the action taken to close the event view controller.
- [eventViewController(\_:didCompleteWith:)](ekeventviewdelegate/eventviewcontroller%28__didcompletewith_%29.md): Invoked when closing the event view controller.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Dismissing the Event Interface

- [delegate](ekeventviewcontroller/delegate.md): The event view controller’s delegate.

# EKEventViewDelegate (Objective-C)

**Framework:** EventKit UI  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Delegates used to display details for calendar events.

## Declaration

```objectivec
@protocol EKEventViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Delegates of an [EKEventViewController](ekeventviewcontroller.md) object conform to this protocol. Notifies the event view controller’s delegate when closing the event view controller. It is your responsibility to close the event view controller and perform any additional tasks within this protocol’s method.

## Topics

### Responding to the Interface’s Dismissal

- [EKEventViewAction](ekeventviewaction.md): Describes the action taken to close the event view controller.
- [eventViewController:didCompleteWithAction:](ekeventviewdelegate/eventviewcontroller%28__didcompletewith_%29.md): Invoked when closing the event view controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Dismissing the Event Interface

- [delegate](ekeventviewcontroller/delegate.md): The event view controller’s delegate.
