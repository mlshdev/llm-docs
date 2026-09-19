> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/property/stage

# stage

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The stage that owns this property.

## Declaration

```swift
var stage: USDStage { get }
```

<a id="discussion"></a>

## Discussion

A property’s state and validity is connected to its stage. A property becomes invalid when the lifetime of its stage ends. It can also become invalid when the stage is modified.
