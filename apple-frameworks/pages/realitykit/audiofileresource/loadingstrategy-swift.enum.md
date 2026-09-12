> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofileresource/loadingstrategy-swift.enum](https://developer.apple.com/documentation/realitykit/audiofileresource/loadingstrategy-swift.enum)

# AudioFileResource.LoadingStrategy

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A container for different strategies on how to handle resources’ data before and during playback.

## Declaration

```swift
enum LoadingStrategy
```

## Topics

### Specifying a loading strategy

- [AudioFileResource.LoadingStrategy.preload](loadingstrategy-swift.enum/preload.md): Load and decode all the data into memory before playback.
- [AudioFileResource.LoadingStrategy.stream](loadingstrategy-swift.enum/stream.md): Stream data from disk, decoding in real time.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AudioFileResource.Configuration](configuration-swift.struct.md): A container for various settings for loading an audio file resource.
