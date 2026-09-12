> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekcalendarchooser](https://developer.apple.com/documentation/eventkitui/ekcalendarchooser)

# EKCalendarChooser (Swift)

**Framework:** EventKit UI  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A view controller for determining whether a user may select one or more calendars.

## Declaration

```swift
class EKCalendarChooser
```

<a id="overview"></a>

## Overview

Use the calendar chooser view controller to allow users to select one or more calendars when creating or editing a calendar event. The calendar chooser also lets you specify whether to display all calendars, or only those that may be written to. The view controller can be pushed on a navigation stack or presented modally.

Use a delegate that conforms to [EKCalendarChooserDelegate](ekcalendarchooserdelegate.md) to receive callbacks when the user selects calendars or cancels an operation.

## Topics

### Initializing Calendar Choosers

- [init(selectionStyle:displayStyle:eventStore:)](ekcalendarchooser/init%28selectionstyle_displaystyle_eventstore_%29.md): Initializes a newly created calendar chooser.
- [init(selectionStyle:displayStyle:entityType:eventStore:)](ekcalendarchooser/init%28selectionstyle_displaystyle_entitytype_eventstore_%29.md): Initializes a newly created calendar chooser for a specific entity type.

### Managing Calendar Selection

- [delegate](ekcalendarchooser/delegate.md): The calendar chooser’s delegate.
- [EKCalendarChooserDelegate](ekcalendarchooserdelegate.md): Methods a calendar chooser’s delegate may use to receive notifications.

### Selecting a Calendar Type

- [selectedCalendars](ekcalendarchooser/selectedcalendars.md): The calendars selected by the user.
- [selectionStyle](ekcalendarchooser/selectionstyle.md): Determines whether to allow selection of multiple calendars.
- [EKCalendarChooserSelectionStyle](ekcalendarchooserselectionstyle.md): Indicates whether users may select a single calendar, or multiple calendars.
- [EKCalendarChooserDisplayStyle](ekcalendarchooserdisplaystyle.md): Indicates whether to display all calendars or writable calendars only.

### Changing the Appearance

- [showsCancelButton](ekcalendarchooser/showscancelbutton.md): A Boolean that determines whether to display a Cancel button.
- [showsDoneButton](ekcalendarchooser/showsdonebutton.md): A Boolean that determines whether to display a Done button.

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

# EKCalendarChooser (Objective-C)

**Framework:** EventKit UI  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A view controller for determining whether a user may select one or more calendars.

## Declaration

```objectivec
@interface EKCalendarChooser : UIViewController
```

<a id="overview"></a>

## Overview

Use the calendar chooser view controller to allow users to select one or more calendars when creating or editing a calendar event. The calendar chooser also lets you specify whether to display all calendars, or only those that may be written to. The view controller can be pushed on a navigation stack or presented modally.

Use a delegate that conforms to [EKCalendarChooserDelegate](ekcalendarchooserdelegate.md) to receive callbacks when the user selects calendars or cancels an operation.

## Topics

### Initializing Calendar Choosers

- [initWithSelectionStyle:displayStyle:eventStore:](ekcalendarchooser/init%28selectionstyle_displaystyle_eventstore_%29.md): Initializes a newly created calendar chooser.
- [initWithSelectionStyle:displayStyle:entityType:eventStore:](ekcalendarchooser/init%28selectionstyle_displaystyle_entitytype_eventstore_%29.md): Initializes a newly created calendar chooser for a specific entity type.

### Managing Calendar Selection

- [delegate](ekcalendarchooser/delegate.md): The calendar chooser’s delegate.
- [EKCalendarChooserDelegate](ekcalendarchooserdelegate.md): Methods a calendar chooser’s delegate may use to receive notifications.

### Selecting a Calendar Type

- [selectedCalendars](ekcalendarchooser/selectedcalendars.md): The calendars selected by the user.
- [selectionStyle](ekcalendarchooser/selectionstyle.md): Determines whether to allow selection of multiple calendars.
- [EKCalendarChooserSelectionStyle](ekcalendarchooserselectionstyle.md): Indicates whether users may select a single calendar, or multiple calendars.
- [EKCalendarChooserDisplayStyle](ekcalendarchooserdisplaystyle.md): Indicates whether to display all calendars or writable calendars only.

### Changing the Appearance

- [showsCancelButton](ekcalendarchooser/showscancelbutton.md): A Boolean that determines whether to display a Cancel button.
- [showsDoneButton](ekcalendarchooser/showsdonebutton.md): A Boolean that determines whether to display a Done button.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)
