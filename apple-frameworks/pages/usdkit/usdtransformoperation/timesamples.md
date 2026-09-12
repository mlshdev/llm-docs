> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdtransformoperation/timesamples](https://developer.apple.com/documentation/usdkit/usdtransformoperation/timesamples)

# timeSamples

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

All time samples authored for this operation.

## Declaration

```swift
var timeSamples: [USDStage.TimeCode] { get }
```

<a id="discussion"></a>

## Discussion

Returns an empty array if no time samples are authored.
