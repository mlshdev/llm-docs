> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivityactivationresult](https://developer.apple.com/documentation/groupactivities/groupactivityactivationresult)

# GroupActivityActivationResult

**Framework:** Group Activities  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The result of preparing to start a custom activity.

## Declaration

```swift
enum GroupActivityActivationResult
```

<a id="overview"></a>

## Overview

When you call [prepareForActivation()](groupactivity/prepareforactivation%28%29.md), the system determines whether you share the activity with other participants in a FaceTime call, or perform it locally. After making the determination, it passes a `GroupActivityActivationResult` value to the method’s completion handler. Use that value to start the activity in the selected setting.

## Topics

### Getting the activation results

- [GroupActivityActivationResult.activationPreferred](groupactivityactivationresult/activationpreferred.md): A result that indicates the user wants to share the activity with the group.
- [GroupActivityActivationResult.activationDisabled](groupactivityactivationresult/activationdisabled.md): A result that indicates the user disabled the automatic sharing of activities, or prefers to perform the activity locally.
- [GroupActivityActivationResult.cancelled](groupactivityactivationresult/cancelled.md): A result that indicates the user canceled the activation request.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Activity definition

- [Defining your app’s SharePlay activities](defining-your-apps-shareplay-activities.md): Configure your app’s SharePlay support and define the activities that people can perform from your app.
- [Supporting coordinated media playback](../avfoundation/supporting-coordinated-media-playback.md): Create synchronized media experiences that enable users to watch and listen across devices.
- [GroupActivity](groupactivity.md): A type that can advertise your app’s activities to other participants.
- [GroupActivityMetadata](groupactivitymetadata.md): Text and image content that describes an activity to potential participants.
- [GroupActivityTransferRepresentation](groupactivitytransferrepresentation.md): A type that lets you start a group activity from a known context.
