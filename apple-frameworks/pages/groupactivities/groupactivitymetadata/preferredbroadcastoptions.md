> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitymetadata/preferredbroadcastoptions](https://developer.apple.com/documentation/groupactivities/groupactivitymetadata/preferredbroadcastoptions)

# preferredBroadcastOptions

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Preferences for how to present audio and video on the main communication channel.

## Declaration

```swift
var preferredBroadcastOptions: BroadcastOptions
```

<a id="discussion"></a>

## Discussion

Use this property to request special handling of the audio and video on the FaceTime call. For example, you might request video mirroring to simplify activities that involve left-right movement. The system respects your preferences when possible, but may override those preferences if system- or user-specific settings are present. The default value of this property is an empty set.

## See Also

### Specifying media-related behavior

- [supportsContinuationOnTV](supportscontinuationontv.md): A Boolean value that indicates whether your app supports activity continuation on an Apple TV.
- [BroadcastOptions](../broadcastoptions.md): Options for how to broadcast media on the shared communications channel.
