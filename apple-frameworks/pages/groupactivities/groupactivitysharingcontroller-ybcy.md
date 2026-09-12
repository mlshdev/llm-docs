> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitysharingcontroller-ybcy](https://developer.apple.com/documentation/groupactivities/groupactivitysharingcontroller-ybcy)

# GroupActivitySharingController

**Framework:** GroupActivities  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · visionOS 1.0+

An iOS view controller that displays the system interface for starting an activity, and optionally starts a FaceTime call for that activity.

## Declaration

```swift
@MainActor @objc class GroupActivitySharingController
```

<a id="overview"></a>

## Overview

A [GroupActivitySharingController](groupactivitysharingcontroller-ybcy.md) helps you start a SharePlay activity, even when a FaceTime call isn’t currently active. When presented, the view controller prompts the person to start the activity you provided. If no FaceTime call is active, the view controller also displays a people picker to let the person select the participants for the activity. When they choose to start the activity, the view controller automatically starts the FaceTime call as needed and joins your app to the activity.

If your app’s interface includes controls to start SharePlay activities, present this view controller in response to interactions with those controls. Initialize the [GroupActivitySharingController](groupactivitysharingcontroller-ybcy.md) object with the activity you want to start. After you present it, the view controller handles all further interactions. It manages the interface that appears onscreen and responds when someone chooses to start or cancel the activity. It starts the FaceTime call if one isn’t currently active. It also dismisses itself and returns control back to your app, updating its [result](groupactivitysharingcontroller-ybcy/result.md) property to let you know what happened.

## Topics

### Creating the group activity sharing controller

- [init(\_:)](groupactivitysharingcontroller-ybcy/init%28__%29.md): Initializes the sharing controller with the specified activity and type information.
- [init(preparationHandler:)](groupactivitysharingcontroller-ybcy/init%28preparationhandler_%29.md): Initializes the SharePlay sharing controller with a closure that creates the activity object.

### Getting the result

- [result](groupactivitysharingcontroller-ybcy/result.md): The result of a request to share a group activity.
- [GroupActivitySharingResult](groupactivitysharingresult-2ijfu.md): The result of a request to share a group activity in iOS.

### Responding to view-related events

- [viewDidLoad()](groupactivitysharingcontroller-ybcy/viewdidload%28%29.md): Notifies the view controller that the system added a view to a view hierarchy.
- [viewWillAppear(\_:)](groupactivitysharingcontroller-ybcy/viewwillappear%28__%29.md): Notifies the view controller that the system is going to add a view to a view hierarchy.

### Instance Properties

- [modalPresentationStyle](groupactivitysharingcontroller-ybcy/modalpresentationstyle.md): The presentation style for the view controller.
- [preferredContainerBackgroundStyle](groupactivitysharingcontroller-ybcy/preferredcontainerbackgroundstyle.md)

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

## See Also

### Interface presentation

- [Presenting SharePlay activities from your app’s UI](promoting-shareplay-activities-from-your-apps-ui.md): Make it easy for people to start activities from your app’s UI, from the system share sheet, or using AirPlay over AirDrop.
- [GroupActivitySharingController](groupactivitysharingcontroller-4gtfk.md): A macOS view controller that displays the system interface for starting an activity, and optionally starts a FaceTime call for that activity.
