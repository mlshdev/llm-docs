> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventeditviewcontroller](https://developer.apple.com/documentation/eventkitui/ekeventeditviewcontroller)

# EKEventEditViewController (Swift)

**Framework:** EventKit UI  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller for creating, editing, and deleting calendar events.

## Declaration

```swift
class EKEventEditViewController
```

<a id="overview"></a>

## Overview

Presented modally, the event edit view controller provides a way for users to add new events, as well as edit or delete events from their calendar. New events are added to the user’s default calendar unless they choose another calendar in the UI.

The controller includes delegates to receive a notification when the user saves an edit or deletes an event, or cancels from an edit session. The delegate must conform to [EKEventEditViewDelegate](ekeventeditviewdelegate.md).

## Topics

### Managing the Event Editing Interface

- [editViewDelegate](ekeventeditviewcontroller/editviewdelegate.md): The delegate to notify when editing an event.
- [EKEventEditViewDelegate](ekeventeditviewdelegate.md): A notification sent to the delegate when the user finishes editing an event.

### Creating and Saving Events

- [event](ekeventeditviewcontroller/event.md): The event the user creates or edits using this view controller.
- [eventStore](ekeventeditviewcontroller/eventstore.md): The event store used to save the event.

### Canceling Edits to Events

- [cancelEditing()](ekeventeditviewcontroller/cancelediting%28%29.md): Ends the editing session and discards any changes that were made to the event.

## Relationships

### Inherits From

- [UINavigationController](../uikit/uinavigationcontroller.md)

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

# EKEventEditViewController (Objective-C)

**Framework:** EventKit UI  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller for creating, editing, and deleting calendar events.

## Declaration

```objectivec
@interface EKEventEditViewController : UINavigationController
```

<a id="overview"></a>

## Overview

Presented modally, the event edit view controller provides a way for users to add new events, as well as edit or delete events from their calendar. New events are added to the user’s default calendar unless they choose another calendar in the UI.

The controller includes delegates to receive a notification when the user saves an edit or deletes an event, or cancels from an edit session. The delegate must conform to [EKEventEditViewDelegate](ekeventeditviewdelegate.md).

## Topics

### Managing the Event Editing Interface

- [editViewDelegate](ekeventeditviewcontroller/editviewdelegate.md): The delegate to notify when editing an event.
- [EKEventEditViewDelegate](ekeventeditviewdelegate.md): A notification sent to the delegate when the user finishes editing an event.

### Creating and Saving Events

- [event](ekeventeditviewcontroller/event.md): The event the user creates or edits using this view controller.
- [eventStore](ekeventeditviewcontroller/eventstore.md): The event store used to save the event.

### Canceling Edits to Events

- [cancelEditing](ekeventeditviewcontroller/cancelediting%28%29.md): Ends the editing session and discards any changes that were made to the event.

## Relationships

### Inherits From

- [UINavigationController](../uikit/uinavigationcontroller.md)
