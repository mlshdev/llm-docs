> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audiofileresource/init(from:configuration:)

# init(from:configuration:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Initializes an AudioFileResource from in-memory data asynchronously.

## Declaration

```swift
@MainActor @preconcurrency convenience init(from data: Data, configuration: AudioFileResource.Configuration = .init()) async throws
```

## Parameters

- `data`: The audio file data in memory
- `configuration`: Configuration settings for the audio resource

<a id="discussion"></a>

## Discussion

This API creates a memory-resident audio resource that never writes to disk. The data must contain a valid audio file format (WAV, M4A, etc.).

> **Throws**

> `AudioFileResource.Error` if the data is invalid or cannot be processed
