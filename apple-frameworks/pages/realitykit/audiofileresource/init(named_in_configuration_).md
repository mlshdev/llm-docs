> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofileresource/init(named:in:configuration:)](https://developer.apple.com/documentation/realitykit/audiofileresource/init(named:in:configuration:))

# init(named:in:configuration:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Initializes an AudioFileResource asynchronously.

## Declaration

```swift
@MainActor @preconcurrency convenience init(named name: String, in bundle: Bundle? = nil, configuration: AudioFileResource.Configuration = .init()) async throws
```

<a id="discussion"></a>

## Discussion

> **Important**

> The name provided **must** be unique.

## See Also

### Loading audio from a bundle

- [init(named:from:in:)](init%28named_from_in_%29.md): Initializes a preconfigured AudioFileResource asynchronously from a Reality Composer Pro project with the given `name` as the the prim-path of the AudioFile, and the `scene` as the name of the USD file name.
