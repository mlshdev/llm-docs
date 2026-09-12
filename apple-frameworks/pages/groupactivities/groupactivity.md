> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivity](https://developer.apple.com/documentation/groupactivities/groupactivity)

# GroupActivity

**Framework:** Group Activities  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A type that can advertise your app’s activities to other participants.

## Declaration

```swift
protocol GroupActivity : Decodable, Encodable
```

## Mentioned In

- [Defining your app’s SharePlay activities](defining-your-apps-shareplay-activities.md)
- [Presenting SharePlay activities from your app’s UI](promoting-shareplay-activities-from-your-apps-ui.md)
- [Adding spatial Persona support to an activity](adding-spatial-persona-support-to-an-activity.md)
- [Joining and managing a shared activity](joining-and-managing-a-shared-activity.md)

<a id="overview"></a>

## Overview

Adopt the `GroupActivity` protocol in custom app data structures that represent your app’s shareable experiences. The protocol provides the system with the context and metadata to start an activity-related session. For example, the protocol defines the unique identity of the activity, and returns information about the activity.

In addition to the protocol’s methods and properties, make sure your type includes the information you need to start the activity. When a participant accepts an activity, the system provides a copy of your activity type. You must use that type to begin the activity. For example, use it to present the appropriate UI for the activity and to load any required content.

To initiate an activity, create an instance of your custom type and call its [prepareForActivation()](groupactivity/prepareforactivation%28%29.md) or [activate()](groupactivity/activate%28%29.md) method. You might call one of these methods from a button in your app’s UI, or in response to other user actions. If activation succeeds, the system advertises the activity on the current FaceTime call.

When an activity begins, the system creates a [GroupSession](groupsession.md) instance for the activity and delivers it asynchronously to your app. Use the [sessions()](groupactivity/sessions%28%29.md) method to get the session and configure your app’s UI.

> **Important**

> `GroupActivity` types must be [Codable](https://developer.apple.com/documentation/swift/codable) so that the system can serialize them and send them to other participant’s devices.

## Topics

### Specifying the activity details

- [activityIdentifier](groupactivity/activityidentifier.md): An app-defined string that uniquely identifies the activity.
- [metadata](groupactivity/metadata.md): A description of the activity, and optional image to display to the user.

### Starting an activity immediately

- [prepareForActivation()](groupactivity/prepareforactivation%28%29.md): Returns the participant’s preferred option for how to start the activity.
- [GroupActivityActivationResult](groupactivityactivationresult.md): The result of preparing to start a custom activity.
- [activate()](groupactivity/activate%28%29.md): Begins the activity immediately and creates a session for the app when a FaceTime call is active.

### Receiving an activity-related session

- [sessions()](groupactivity/sessions%28%29.md): Returns the sessions for this activity as an asynchronous sequence.
- [GroupActivity.Sessions](groupactivity/sessions.md): A type that provides asynchronous, sequential, iterated access to the sessions for the activity.

### Transferring data types

- [transferRepresentation](groupactivity/transferrepresentation.md): Conforms when `Self` conforms to `Transferable`. A default type that lets the system share your activity.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)

## See Also

### Activity definition

- [Defining your app’s SharePlay activities](defining-your-apps-shareplay-activities.md): Configure your app’s SharePlay support and define the activities that people can perform from your app.
- [Supporting coordinated media playback](../avfoundation/supporting-coordinated-media-playback.md): Create synchronized media experiences that enable users to watch and listen across devices.
- [GroupActivityMetadata](groupactivitymetadata.md): Text and image content that describes an activity to potential participants.
- [GroupActivityActivationResult](groupactivityactivationresult.md): The result of preparing to start a custom activity.
- [GroupActivityTransferRepresentation](groupactivitytransferrepresentation.md): A type that lets you start a group activity from a known context.
