> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/configuration/maximumimagesize

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
