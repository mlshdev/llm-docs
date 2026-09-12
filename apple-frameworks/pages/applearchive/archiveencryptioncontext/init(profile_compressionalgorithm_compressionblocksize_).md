> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveencryptioncontext/init(profile:compressionalgorithm:compressionblocksize:)](https://developer.apple.com/documentation/applearchive/archiveencryptioncontext/init(profile:compressionalgorithm:compressionblocksize:))

# init(profile:compressionAlgorithm:compressionBlockSize:)

**Framework:** Apple Archive  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns a new encryption context from the specified profile, compression algorithm, and block size.

## Declaration

```swift
init(profile: ArchiveEncryptionContext.Profile, compressionAlgorithm: ArchiveCompression, compressionBlockSize: Int = 1<<20)
```

## Parameters

- `profile`: The profile to use to create the encryption context.
- `compressionAlgorithm`: The compression algorithm.
- `compressionBlockSize`: The size of the independently compressed blocks.

## See Also

### Creating an archive encryption context

- [init(from:)](init%28from_%29.md): Returns a new encryption context from the specified encrypted stream.
