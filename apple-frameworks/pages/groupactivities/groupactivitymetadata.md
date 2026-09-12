> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitymetadata](https://developer.apple.com/documentation/groupactivities/groupactivitymetadata)

# GroupActivityMetadata

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Text and image content that describes an activity to potential participants.

## Declaration

```swift
struct GroupActivityMetadata
```

## Mentioned In

- [Defining your app’s SharePlay activities](defining-your-apps-shareplay-activities.md)
- [Adding spatial Persona support to an activity](adding-spatial-persona-support-to-an-activity.md)

<a id="overview"></a>

## Overview

Use a `GroupActivityMetadata` structure to store user-facing information about a specific activity your app suggests. Metadata information includes the title of the activity, an image that corresponds to the activity, and a fallback URL for users who don’t have your app. For example, a movie-watching activity might include the poster of the specific movie a participant suggests. The system uses the provided metadata to generate invitations for other participants.

Create a `GroupActivityMetadata` structure in the [metadata](groupactivity/metadata.md) property of your custom [GroupActivity](groupactivity.md) subclass. Populate the new structure with the relevant data for your activity.

## Topics

### Creating group activity metadata

- [init()](groupactivitymetadata/init%28%29.md): Creates a new instance for storing descriptive information about an activity.

### Presenting the activity

- [title](groupactivitymetadata/title.md): The localized string to display as the title of your activity.
- [subtitle](groupactivitymetadata/subtitle.md): The localized string that provides additional information about the activity.
- [previewImage](groupactivitymetadata/previewimage.md): The image to display for the current activity.
- [fallbackURL](groupactivitymetadata/fallbackurl.md): A URL that offers participants a way to identify or join the activity from a web browser.

### Indicating the activity’s type

- [type](groupactivitymetadata/type.md): The type of shared experience.
- [GroupActivityMetadata.ActivityType](groupactivitymetadata/activitytype.md): Constants that indicate the group activity’s type to the system.

### Assigning an app-specific scene

- [sceneAssociationBehavior](groupactivitymetadata/sceneassociationbehavior.md): Criteria the system uses to direct an activity to a specific scene of your app.
- [SceneAssociationBehavior](sceneassociationbehavior.md): A type that tells the system which scene to associate with an incoming group activity.

### Specifying media-related behavior

- [supportsContinuationOnTV](groupactivitymetadata/supportscontinuationontv.md): A Boolean value that indicates whether your app supports activity continuation on an Apple TV.
- [preferredBroadcastOptions](groupactivitymetadata/preferredbroadcastoptions.md): Preferences for how to present audio and video on the main communication channel.
- [BroadcastOptions](broadcastoptions.md): Options for how to broadcast media on the shared communications channel.

### Structures

- [GroupActivityMetadata.LifetimePolicy](groupactivitymetadata/lifetimepolicy-swift.struct.md): An activity lifetime policy used by a Group Activity.

### Instance Properties

- [experience](groupactivitymetadata/experience-swift.property.md): Deprecated.
- [lifetimePolicy](groupactivitymetadata/lifetimepolicy-swift.property.md): Determines how an activity can be ended.
- [localizedSubtitle](groupactivitymetadata/localizedsubtitle.md): Deprecated.
- [localizedTitle](groupactivitymetadata/localizedtitle.md): Deprecated.

### Enumerations

- [GroupActivityMetadata.Experience](groupactivitymetadata/experience-swift.enum.md): Deprecated.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Activity definition

- [Defining your app’s SharePlay activities](defining-your-apps-shareplay-activities.md): Configure your app’s SharePlay support and define the activities that people can perform from your app.
- [Supporting coordinated media playback](../avfoundation/supporting-coordinated-media-playback.md): Create synchronized media experiences that enable users to watch and listen across devices.
- [GroupActivity](groupactivity.md): A type that can advertise your app’s activities to other participants.
- [GroupActivityActivationResult](groupactivityactivationresult.md): The result of preparing to start a custom activity.
- [GroupActivityTransferRepresentation](groupactivitytransferrepresentation.md): A type that lets you start a group activity from a known context.
