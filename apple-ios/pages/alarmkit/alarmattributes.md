> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmattributes](https://developer.apple.com/documentation/alarmkit/alarmattributes)

# AlarmAttributes

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that contains all information necessary for the alarm UI.

## Declaration

```swift
struct AlarmAttributes<Metadata> where Metadata : AlarmMetadata
```

<a id="overview"></a>

## Overview

This struct includes alerting, countdown, and paused states. You define all the alarm information when creating the attributes. When archiving the widget, the widget extension selects which state to display based on the [AlarmPresentationState](alarmpresentationstate.md) provided in the activity content state payload. The following example defines the attributes for the alarm UI.

```swift
let attributes = AlarmAttributes(
    presentation: presentation,
    metadata: metadata,
    tintColor: Color.white)
```

## Topics

### Creating an alarm attribute

- [init(presentation:metadata:tintColor:)](alarmattributes/init%28presentation_metadata_tintcolor_%29.md): Creates an instance of an alarm UI.
- [tintColor](alarmattributes/tintcolor.md): The tint color applied to the templated UI.
- [presentation](alarmattributes/presentation.md): The content required for the various states of the UI.
- [metadata](alarmattributes/metadata.md): The additional data you can include in your attributes.
- [AlarmAttributes.ContentState](alarmattributes/contentstate.md): The type alias for the structure that describes the content of an alarm.

### Decoding and encoding

- [init(from:)](alarmattributes/init%28from_%29.md): Creates an instance from the given decoder.
- [encode(to:)](alarmattributes/encode%28to_%29.md): Performs encoding of the value using the given encoder.

## Relationships

### Conforms To

- [ActivityAttributes](../activitykit/activityattributes.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Views

- [AlarmPresentation](alarmpresentation.md): An object that describes the content required for the alarm UI.
- [AlarmPresentationState](alarmpresentationstate.md): The system managed content state of an alarm Live Activity.
- [AlarmMetadata](alarmmetadata.md): A metadata object that contains information about an alarm.
