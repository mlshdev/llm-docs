> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filemode](https://developer.apple.com/documentation/system/filemode)

# FileMode

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A strongly-typed file mode representing a C `mode_t`.

## Declaration

```swift
@frozen struct FileMode
```

<a id="overview"></a>

## Overview

> **Note**

> Only available on Unix-like platforms.

## Topics

### Initializers

- [init(rawValue:)](filemode/init%28rawvalue_%29.md): Creates a strongly-typed `FileMode` from the raw C value.
- [init(type:permissions:)](filemode/init%28type_permissions_%29.md): Creates a `FileMode` from the given file type and permissions.

### Instance Properties

- [permissions](filemode/permissions.md): The file’s permissions, from the mode’s permission bits.
- [rawValue](filemode/rawvalue.md): The raw C mode.
- [type](filemode/type.md): The file’s type, from the mode’s file-type bits.

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
