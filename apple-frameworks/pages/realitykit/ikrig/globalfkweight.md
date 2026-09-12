> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/globalfkweight](https://developer.apple.com/documentation/realitykit/ikrig/globalfkweight)

# globalFkWeight

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The solver global weight for the forward kinematics demands.

## Declaration

```swift
var globalFkWeight: Float
```

<a id="discussion"></a>

## Discussion

This weight is a multiplier for each joint’s [fkWeightPerAxis](joint/fkweightperaxis.md).

The recommended value range is the closed range `[0, 1]`, where `0` means no FK demands influence, and `1` is no rig level modification.
