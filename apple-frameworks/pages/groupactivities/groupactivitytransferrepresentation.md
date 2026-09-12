> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitytransferrepresentation](https://developer.apple.com/documentation/groupactivities/groupactivitytransferrepresentation)

# GroupActivityTransferRepresentation

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A type that lets you start a group activity from a known context.

## Declaration

```swift
struct GroupActivityTransferRepresentation<Item> where Item : Transferable
```

## Topics

### Initializers

- [init(exporting:)](groupactivitytransferrepresentation/init%28exporting_%29.md): Creates a type that exports a group activity for the specified item.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TransferRepresentation](../coretransferable/transferrepresentation.md)

## See Also

### Activity definition

- [Defining your app’s SharePlay activities](defining-your-apps-shareplay-activities.md): Configure your app’s SharePlay support and define the activities that people can perform from your app.
- [Supporting coordinated media playback](../avfoundation/supporting-coordinated-media-playback.md): Create synchronized media experiences that enable users to watch and listen across devices.
- [GroupActivity](groupactivity.md): A type that can advertise your app’s activities to other participants.
- [GroupActivityMetadata](groupactivitymetadata.md): Text and image content that describes an activity to potential participants.
- [GroupActivityActivationResult](groupactivityactivationresult.md): The result of preparing to start a custom activity.
