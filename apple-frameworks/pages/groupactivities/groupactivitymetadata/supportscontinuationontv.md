> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitymetadata/supportscontinuationontv](https://developer.apple.com/documentation/groupactivities/groupactivitymetadata/supportscontinuationontv)

# supportsContinuationOnTV

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether your app supports activity continuation on an Apple TV.

## Declaration

```swift
var supportsContinuationOnTV: Bool
```

<a id="discussion"></a>

## Discussion

The default value of this property is `false`. Set it to `true` to allow participants to continue the activity on Apple TV.

## See Also

### Specifying media-related behavior

- [preferredBroadcastOptions](preferredbroadcastoptions.md): Preferences for how to present audio and video on the main communication channel.
- [BroadcastOptions](../broadcastoptions.md): Options for how to broadcast media on the shared communications channel.
