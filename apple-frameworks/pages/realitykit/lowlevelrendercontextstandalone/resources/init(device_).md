> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/resources/init(device:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/resources/init(device:))

# init(device:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously prepare resources for the given device.

## Declaration

```swift
nonisolated(nonsending) init(device: any MTLDevice) async throws
```

## Parameters

- `device`: The Metal device to prepare resources using.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if resources preparation fails.
