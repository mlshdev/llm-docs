> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofileresource/init(contentsof:withname:configuration:)](https://developer.apple.com/documentation/realitykit/audiofileresource/init(contentsof:withname:configuration:))

# init(contentsOf:withName:configuration:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Initializes an AudioFileResource asynchronously.

## Declaration

```swift
@MainActor @preconcurrency convenience init(contentsOf url: URL, withName resourceName: String? = nil, configuration: AudioFileResource.Configuration = .init()) async throws
```

<a id="discussion"></a>

## Discussion

> **Important**

> The name provided **must** be unique.
