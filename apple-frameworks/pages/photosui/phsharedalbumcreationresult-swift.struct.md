> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phsharedalbumcreationresult-swift.struct](https://developer.apple.com/documentation/photosui/phsharedalbumcreationresult-swift.struct)

# PHSharedAlbumCreationResult

**Framework:** PhotosUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The result of a user creating a shared album.

## Declaration

```swift
struct PHSharedAlbumCreationResult
```

## Topics

### Instance Properties

- [albumIdentifier](phsharedalbumcreationresult-swift.struct/albumidentifier.md): The identifier of the created shared album. `nil` if creation failed.
- [albumURL](phsharedalbumcreationresult-swift.struct/albumurl.md): The URL of the created shared album. `nil` if creation failed.
- [error](phsharedalbumcreationresult-swift.struct/error.md): An error describing why shared album creation failed, if it failed. `nil` on success.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
