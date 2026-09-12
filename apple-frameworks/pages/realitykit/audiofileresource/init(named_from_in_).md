> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofileresource/init(named:from:in:)](https://developer.apple.com/documentation/realitykit/audiofileresource/init(named:from:in:))

# init(named:from:in:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Initializes a preconfigured AudioFileResource asynchronously from a Reality Composer Pro project with the given `name` as the the prim-path of the AudioFile, and the `scene` as the name of the USD file name.

## Declaration

```swift
@MainActor @preconcurrency convenience init(named name: String, from scene: String, in bundle: Bundle? = nil) async throws
```

<a id="discussion"></a>

## Discussion

> **Important**

> The name provided **must** be unique.

## See Also

### Loading audio from a bundle

- [init(named:in:configuration:)](init%28named_in_configuration_%29.md): Initializes an AudioFileResource asynchronously.
