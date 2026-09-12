> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/root-swift.struct](https://developer.apple.com/documentation/system/filepath/root-swift.struct)

# FilePath.Root

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Represents a root of a file path.

## Declaration

```swift
struct Root
```

<a id="overview"></a>

## Overview

On Unix, a root is simply the directory separator `/`.

On Windows, a root contains the entire path prefix up to and including the final separator.

Examples:

- Unix:

  - `/`
- Windows:

  - `C:\`
  - `C:`
  - `\`
  - `\\server\share\`
  - `\\?\UNC\server\share\`
  - `\\?\Volume{12345678-abcd-1111-2222-123445789abc}\`

## Topics

### Initializers

- [init(\_:)](root-swift.struct/init%28__%29.md): Create a file path root from a string.
- [init(platformString:)](root-swift.struct/init%28platformstring_%29-3s0ol.md): Creates a file path root by copying bytes from a null-terminated platform string. It is a precondition that a null byte indicates the end of the string. The absence of a null byte will trigger a runtime error.
- [init(platformString:)](root-swift.struct/init%28platformstring_%29-4twb4.md): Deprecated.
- [init(platformString:)](root-swift.struct/init%28platformstring_%29-5j1fu.md): Creates a file path root by copying bytes from a null-terminated platform string.
- [init(platformString:)](root-swift.struct/init%28platformstring_%29-8hwtb.md): Deprecated.

### Instance Properties

- [string](root-swift.struct/string.md): On Unix, this returns `"/"`.

### Instance Methods

- [withPlatformString(\_:)](root-swift.struct/withplatformstring%28__%29.md): Calls the given closure with a pointer to the contents of the file path root, represented as a null-terminated platform string.

### Default Implementations

- [CustomDebugStringConvertible Implementations](root-swift.struct/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](root-swift.struct/customstringconvertible-implementations.md)
- [ExpressibleByStringLiteral Implementations](root-swift.struct/expressiblebystringliteral-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
