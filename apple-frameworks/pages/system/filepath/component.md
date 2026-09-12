> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/component](https://developer.apple.com/documentation/system/filepath/component)

# FilePath.Component

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Represents an individual, non-root component of a file path.

## Declaration

```swift
struct Component
```

<a id="overview"></a>

## Overview

Components can be one of the special directory components (`.` or `..`) or a file or directory name. Components are never empty and never contain the directory separator.

Example:

```swift
var path: FilePath = "/tmp"
let file: FilePath.Component = "foo.txt"
file.kind == .regular           // true
file.extension                  // "txt"
path.append(file)               // path is "/tmp/foo.txt"
```

## Topics

### Initializers

- [init(\_:)](component/init%28__%29.md): Create a file path component from a string.
- [init(platformString:)](component/init%28platformstring_%29-2tz4.md): Creates a file path component by copying bytes from a null-terminated platform string. It is a precondition that a null byte indicates the end of the string. The absence of a null byte will trigger a runtime error.
- [init(platformString:)](component/init%28platformstring_%29-3mzo3.md): Deprecated.
- [init(platformString:)](component/init%28platformstring_%29-8kixy.md): Deprecated.
- [init(platformString:)](component/init%28platformstring_%29-9a3qq.md): Creates a file path component by copying bytes from a null-terminated platform string.

### Instance Properties

- [extension](component/extension.md): The extension of this file or directory component.
- [kind](component/kind-swift.property.md): The kind of this component
- [stem](component/stem.md): The non-extension portion of this file or directory component.
- [string](component/string.md): Creates a string by interpreting the component’s content as UTF-8 on Unix and UTF-16 on Windows.

### Instance Methods

- [withPlatformString(\_:)](component/withplatformstring%28__%29.md): Calls the given closure with a pointer to the contents of the file path component, represented as a null-terminated platform string.

### Enumerations

- [FilePath.Component.Kind](component/kind-swift.enum.md): Whether a component is a regular file or directory name, or a special directory `.` or `..`

### Default Implementations

- [CustomDebugStringConvertible Implementations](component/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](component/customstringconvertible-implementations.md)
- [ExpressibleByStringLiteral Implementations](component/expressiblebystringliteral-implementations.md)

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
