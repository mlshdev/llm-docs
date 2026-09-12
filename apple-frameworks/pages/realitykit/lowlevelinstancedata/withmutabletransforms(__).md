> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelinstancedata/withmutabletransforms(_:)](https://developer.apple.com/documentation/realitykit/lowlevelinstancedata/withmutabletransforms(_:))

# withMutableTransforms(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Updates the per instance transform data synchronously on the CPU.

## Declaration

```swift
final func withMutableTransforms(_ callback: (UnsafeMutableBufferPointer<float4x4>) -> Void)
```

<a id="discussion"></a>

## Discussion

The transform buffer provided is only valid for the lifetime of the callback.
