> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/broadcastoptions](https://developer.apple.com/documentation/groupactivities/broadcastoptions)

# BroadcastOptions

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Options for how to broadcast media on the shared communications channel.

## Declaration

```swift
struct BroadcastOptions
```

<a id="overview"></a>

## Overview

Use these options to alter how the system presents audio and video associated with an activity’s FaceTime call. For example, you might mirror video during a workout activity to make it easier to follow the instructor’s movements.

## Topics

### Getting the broadcast options

- [mirroredVideo](broadcastoptions/mirroredvideo.md): An option to mirror video on its vertical axis.

### Creating options from a raw value

- [init(rawValue:)](broadcastoptions/init%28rawvalue_%29.md): Creates a set of options from a raw value.
- [rawValue](broadcastoptions/rawvalue.md): The raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Specifying media-related behavior

- [supportsContinuationOnTV](groupactivitymetadata/supportscontinuationontv.md): A Boolean value that indicates whether your app supports activity continuation on an Apple TV.
- [preferredBroadcastOptions](groupactivitymetadata/preferredbroadcastoptions.md): Preferences for how to present audio and video on the main communication channel.
