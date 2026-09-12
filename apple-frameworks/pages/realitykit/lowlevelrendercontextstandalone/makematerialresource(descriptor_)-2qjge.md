> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/makematerialresource(descriptor:)-2qjge](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makematerialresource(descriptor:)-2qjge)

# makeMaterialResource(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Synchronous variant of [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-2qjge.md). Blocks the current thread until compilation completes.

## Declaration

```swift
final func makeMaterialResource(descriptor: LowLevelMaterialResource.Descriptor) throws -> sending LowLevelMaterialResource
```
