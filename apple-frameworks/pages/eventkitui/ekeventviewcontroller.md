> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventviewcontroller](https://developer.apple.com/documentation/eventkitui/ekeventviewcontroller)

# EKEventViewController (Swift)

**Framework:** EventKit UI  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller for displaying existing calendar and reminder events, and for optionally editing those events.

## Declaration

```swift
class EKEventViewController
```

<a id="overview"></a>

## Overview

The event view controller’s primary purpose is to present to the user a modal display containing the details of a calendar event. The view controller lets you set whether users may edit an event and, if the event is an invitation and the organizer is not the user, you can decide whether to show a preview of the event.

The event view controller includes delegates used to receive a notification when closing the view controller. The delegate must conform to the [EKEventViewDelegate](ekeventviewdelegate.md) protocol.

## Topics

### Dismissing the Event Interface

- [delegate](ekeventviewcontroller/delegate.md): The event view controller’s delegate.
- [EKEventViewDelegate](ekeventviewdelegate.md): Delegates used to display details for calendar events.

### Getting and Setting the Event

- [event](ekeventviewcontroller/event.md): The event this view controller displays to the user.

### Displaying and Editing Event Previews

- [allowsCalendarPreview](ekeventviewcontroller/allowscalendarpreview.md): A Boolean that determines whether the user can preview the event in a calendar day.
- [allowsEditing](ekeventviewcontroller/allowsediting.md): A Boolean that determines whether the user may edit the event.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

# EKEventViewController (Objective-C)

**Framework:** EventKit UI  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller for displaying existing calendar and reminder events, and for optionally editing those events.

## Declaration

```objectivec
@interface EKEventViewController : UIViewController
```

<a id="overview"></a>

## Overview

The event view controller’s primary purpose is to present to the user a modal display containing the details of a calendar event. The view controller lets you set whether users may edit an event and, if the event is an invitation and the organizer is not the user, you can decide whether to show a preview of the event.

The event view controller includes delegates used to receive a notification when closing the view controller. The delegate must conform to the [EKEventViewDelegate](ekeventviewdelegate.md) protocol.

## Topics

### Dismissing the Event Interface

- [delegate](ekeventviewcontroller/delegate.md): The event view controller’s delegate.
- [EKEventViewDelegate](ekeventviewdelegate.md): Delegates used to display details for calendar events.

### Getting and Setting the Event

- [event](ekeventviewcontroller/event.md): The event this view controller displays to the user.

### Displaying and Editing Event Previews

- [allowsCalendarPreview](ekeventviewcontroller/allowscalendarpreview.md): A Boolean that determines whether the user can preview the event in a calendar day.
- [allowsEditing](ekeventviewcontroller/allowsediting.md): A Boolean that determines whether the user may edit the event.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)
