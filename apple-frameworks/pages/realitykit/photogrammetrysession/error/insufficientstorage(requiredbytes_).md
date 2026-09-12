> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/error/insufficientstorage(requiredbytes:)](https://developer.apple.com/documentation/realitykit/photogrammetrysession/error/insufficientstorage(requiredbytes:))

# PhotogrammetrySession.Error.insufficientStorage(requiredBytes:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An error that indicates insufficient storage space.

## Declaration

```swift
case insufficientStorage(requiredBytes: Int64)
```

<a id="discussion"></a>

## Discussion

This error occurs when there is not enough available storage, and the system estimates that it needs `requiredBytes` of storage.
