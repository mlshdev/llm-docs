> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phsharedalbumcreationconfiguration-swift.struct](https://developer.apple.com/documentation/photosui/phsharedalbumcreationconfiguration-swift.struct)

# PHSharedAlbumCreationConfiguration

**Framework:** PhotosUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An object used to configure a `PHSharedAlbumCreationViewController`.

## Declaration

```swift
struct PHSharedAlbumCreationConfiguration
```

## Topics

### Initializers

- [init(photoLibrary:)](phsharedalbumcreationconfiguration-swift.struct/init%28photolibrary_%29.md)

### Instance Properties

- [defaultPolicy](phsharedalbumcreationconfiguration-swift.struct/defaultpolicy.md): The default sharing policy of the shared album. If not specified, this defaults to `PHSharedAlbumCreationSharingPolicyPrivate`.
- [defaultTitle](phsharedalbumcreationconfiguration-swift.struct/defaulttitle.md): The default title for the shared album. Useful for suggesting a relevant title to the user. Defaults to `nil`.
- [photoLibrary](phsharedalbumcreationconfiguration-swift.struct/photolibrary.md): The photo library in which the shared album will be created.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
