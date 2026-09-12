> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/generateasync(from:)](https://developer.apple.com/documentation/realitykit/meshresource/generateasync(from:))

# generateAsync(from:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Create a mesh resource from contents asynchronously.

## Declaration

```swift
@MainActor @preconcurrency static func generateAsync(from content: MeshResource.Contents) -> LoadRequest<MeshResource>
```
