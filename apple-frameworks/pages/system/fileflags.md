> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/fileflags](https://developer.apple.com/documentation/system/fileflags)

# FileFlags

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

File-specific flags found in the `st_flags` property of a `stat` struct or used as input to `chflags()`.

## Declaration

```swift
@frozen struct FileFlags
```

<a id="overview"></a>

## Overview

> **Note**

> Only available on Darwin, FreeBSD, and OpenBSD.

## Topics

### Initializers

- [init(rawValue:)](fileflags/init%28rawvalue_%29.md): Creates a strongly-typed `FileFlags` from the raw C value.

### Instance Properties

- [rawValue](fileflags/rawvalue.md): The raw C flags.

### Type Properties

- [archived](fileflags/archived.md): File has been archived.
- [compressed](fileflags/compressed.md): File is compressed at the file system level.
- [dataVault](fileflags/datavault.md): File requires an entitlement for reading and writing.
- [dataless](fileflags/dataless.md): File is a dataless placeholder (content is stored remotely).
- [firmlink](fileflags/firmlink.md): File is a firmlink.
- [hidden](fileflags/hidden.md): File should not be displayed in a GUI.
- [noDump](fileflags/nodump.md): Do not dump the file during backups.
- [opaque](fileflags/opaque.md): Directory is opaque when viewed through a union mount.
- [restricted](fileflags/restricted.md): File requires an entitlement for writing.
- [systemAppend](fileflags/systemappend.md): Writes to the file may only append.
- [systemImmutable](fileflags/systemimmutable.md): File may not be changed.
- [systemNoUnlink](fileflags/systemnounlink.md): File may not be removed or renamed.
- [tracked](fileflags/tracked.md): File is tracked for the purpose of document IDs.
- [userAppend](fileflags/userappend.md): Writes to the file may only append.
- [userImmutable](fileflags/userimmutable.md): File may not be changed.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)
