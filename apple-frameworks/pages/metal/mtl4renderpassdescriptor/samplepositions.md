> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpassdescriptor/samplepositions](https://developer.apple.com/documentation/metal/mtl4renderpassdescriptor/samplepositions)

# samplePositions

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the custom sample positions to use in MSAA rendering.

## Declaration

```swift
var samplePositions: [MTLSamplePosition] { get set }
```

<a id="discussion"></a>

## Discussion

Set to an empty array to disable custom sample positions.
