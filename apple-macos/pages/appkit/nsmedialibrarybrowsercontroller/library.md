> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmedialibrarybrowsercontroller/library](https://developer.apple.com/documentation/appkit/nsmedialibrarybrowsercontroller/library)

# NSMediaLibraryBrowserController.Library (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.9+

These constants are masks used to configure a Media Library Browser to display specific types of media. Combined masks are not yet supported.  In other words, only one nonzero mask value is supported at a time.  If masks are combined, the lowest mask value is used.

## Declaration

```swift
struct Library
```

## Topics

### Constants

- [audio](library/audio.md): Display audio media.
- [image](library/image.md): Display image media.
- [movie](library/movie.md): Display movie media.

### Initializers

- [init(rawValue:)](library/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# NSMediaLibrary (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

These constants are masks used to configure a Media Library Browser to display specific types of media. Combined masks are not yet supported.  In other words, only one nonzero mask value is supported at a time.  If masks are combined, the lowest mask value is used.

## Declaration

```objectivec
enum NSMediaLibrary : NSUInteger;
```

## Topics

### Constants

- [NSMediaLibraryAudio](library/audio.md): Display audio media.
- [NSMediaLibraryImage](library/image.md): Display image media.
- [NSMediaLibraryMovie](library/movie.md): Display movie media.
