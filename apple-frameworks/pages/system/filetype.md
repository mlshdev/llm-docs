> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filetype](https://developer.apple.com/documentation/system/filetype)

# FileType

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A file type matching those contained in a C `mode_t`.

## Declaration

```swift
@frozen struct FileType
```

<a id="overview"></a>

## Overview

> **Note**

> Only available on Unix-like platforms.

## Topics

### Initializers

- [init(rawValue:)](filetype/init%28rawvalue_%29.md): Creates a strongly-typed file type from the raw C `mode_t`.

### Instance Properties

- [rawValue](filetype/rawvalue.md): The raw file-type bits from the C mode.

### Type Properties

- [blockSpecial](filetype/blockspecial.md): Block special device
- [characterSpecial](filetype/characterspecial.md): Character special device
- [directory](filetype/directory.md): Directory
- [fifo](filetype/fifo.md): FIFO (or named pipe)
- [regular](filetype/regular.md): Regular file
- [socket](filetype/socket.md): Socket
- [symbolicLink](filetype/symboliclink.md): Symbolic link
- [whiteout](filetype/whiteout.md): Whiteout file

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
