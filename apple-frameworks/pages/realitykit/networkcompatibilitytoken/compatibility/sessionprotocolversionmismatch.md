> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/networkcompatibilitytoken/compatibility/sessionprotocolversionmismatch](https://developer.apple.com/documentation/realitykit/networkcompatibilitytoken/compatibility/sessionprotocolversionmismatch)

# NetworkCompatibilityToken.Compatibility.sessionProtocolVersionMismatch

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS

An indication that two peers running incompatible versions of RealityKit can’t sync.

## Declaration

```swift
case sessionProtocolVersionMismatch
```

<a id="discussion"></a>

## Discussion

The [compatibilityWith(\_:)](../compatibilitywith%28__%29.md) method returns this value when two devices have different OS versions and there has been a significant change in networking protocol between those releases.

## See Also

### Compatibility indicators

- [NetworkCompatibilityToken.Compatibility.compatible](compatible.md): An indication that the compared devices are running compatible versions of RealityKit.
