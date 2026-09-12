> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/relationship/stage](https://developer.apple.com/documentation/usdkit/usdprim/relationship/stage)

# stage

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The stage that owns this relationship.

## Declaration

```swift
var stage: USDStage { get }
```

<a id="discussion"></a>

## Discussion

A relationship’s state and validity is connected to its stage. A relationship becomes invalid when the lifetime of its stage ends. It can also become invalid when the stage is modified.
