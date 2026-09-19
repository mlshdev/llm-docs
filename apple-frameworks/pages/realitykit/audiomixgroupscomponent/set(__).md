> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audiomixgroupscomponent/set(_:)

# set(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Adds the given `AudioMixGroup` to the component.

## Declaration

```swift
mutating func set(_ mixGroup: AudioMixGroup)
```

<a id="discussion"></a>

## Discussion

> **Important**

> Adding an audio mix group replaces any existing audio mix group with the same name.
