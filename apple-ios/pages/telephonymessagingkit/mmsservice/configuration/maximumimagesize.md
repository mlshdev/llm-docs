> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/configuration/maximumimagesize](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/configuration/maximumimagesize)

# maximumImageSize

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The maximum size of an image, in bytes, allowed for a sent group message.

## Declaration

```swift
var maximumImageSize: Measurement<UnitInformationStorage>?
```

<a id="discussion"></a>

## Discussion

When this value isn’t set, the system uses the value of [maximumMessageSize](maximummessagesize.md) instead.
