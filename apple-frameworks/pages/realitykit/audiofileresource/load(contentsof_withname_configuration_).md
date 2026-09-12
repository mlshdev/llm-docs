> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofileresource/load(contentsof:withname:configuration:)](https://developer.apple.com/documentation/realitykit/audiofileresource/load(contentsof:withname:configuration:))

# load(contentsOf:withName:configuration:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Loads an AudioFileResource synchronously.

## Declaration

```swift
@MainActor @preconcurrency static func load(contentsOf url: URL, withName name: String? = nil, configuration: AudioFileResource.Configuration = .init()) throws -> AudioFileResource
```

<a id="discussion"></a>

## Discussion

> **Important**

> The name provided **must** be unique.
