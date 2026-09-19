> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audiofileresource/load(named:in:configuration:)

# load(named:in:configuration:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Loads an AudioFileResource synchronously.

## Declaration

```swift
@MainActor @preconcurrency static func load(named name: String, in bundle: Bundle? = nil, configuration: AudioFileResource.Configuration = .init()) throws -> AudioFileResource
```

<a id="discussion"></a>

## Discussion

> **Important**

> The name provided **must** be unique.
