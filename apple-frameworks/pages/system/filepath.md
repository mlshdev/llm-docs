> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath](https://developer.apple.com/documentation/system/filepath)

# FilePath

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Represents a location in the file system.

## Declaration

```swift
struct FilePath
```

<a id="overview"></a>

## Overview

This structure recognizes directory separators  (e.g. `/`), roots, and requires that the content terminates in a NUL (`0x0`). Beyond that, it does not give any meaning to the bytes that it contains. The file system defines how the content is interpreted; for example, by its choice of string encoding.

On construction, `FilePath` will normalize separators by removing redundant intermediary separators and stripping any trailing separators. On Windows, `FilePath` will also normalize forward slashes `/` into backslashes `\`, as preferred by the platform.

The code below creates a file path from a string literal, and then uses it to open and append to a log file:

```swift
let message: String = "This is a log message."
let path: FilePath = "/tmp/log"
let fd = try FileDescriptor.open(path, .writeOnly, options: .append)
try fd.closeAfter { try fd.writeAll(message.utf8) }
```

File paths conform to the [Equatable](https://developer.apple.com/documentation/swift/equatable) and [Hashable](https://developer.apple.com/documentation/swift/hashable) protocols by performing the protocols’ operations on their raw byte contents. This conformance allows file paths to be used, for example, as keys in a dictionary. However, the rules for path equivalence are file-system–specific and have additional considerations like case insensitivity, Unicode normalization, and symbolic links.

## Topics

### Creating a File Path

- [init()](filepath/init%28%29.md): Creates an empty, null-terminated path.
- [init(stringLiteral:)](filepath/init%28stringliteral_%29.md): Creates a file path from a string literal.

### Working with File Paths

- [length](filepath/length.md): The length of the file path, excluding the null terminator.
- [description](filepath/description.md): A textual representation of the file path.
- [debugDescription](filepath/debugdescription.md): A textual representation of the file path, suitable for debugging.

### Interacting with C APIs

- [withCString(\_:)](filepath/withcstring%28__%29.md): For backwards compatibility only. This function is equivalent to the preferred `withPlatformString`.

### Structures

- [FilePath.Component](filepath/component.md): Represents an individual, non-root component of a file path.
- [FilePath.ComponentView](filepath/componentview.md): A bidirectional, range replaceable collection of the non-root components that make up a file path.
- [FilePath.Root](filepath/root-swift.struct.md): Represents a root of a file path.

### Initializers

- [init(\_:)](filepath/init%28__%29-2gkpw.md): Creates a file path from a URL
- [init(\_:)](filepath/init%28__%29-61dsw.md): Creates a file path from a string.
- [init(cString:)](filepath/init%28cstring_%29-2hetg.md): Deprecated.
- [init(cString:)](filepath/init%28cstring_%29-3xw0n.md): Deprecated.
- [init(cString:)](filepath/init%28cstring_%29-5igtz.md): Deprecated. For backwards compatibility only. This initializer is equivalent to the preferred `FilePath(platformString:)`.
- [init(cString:)](filepath/init%28cstring_%29-8d3vx.md): Deprecated.
- [init(platformString:)](filepath/init%28platformstring_%29-4b3o6.md): Deprecated.
- [init(platformString:)](filepath/init%28platformstring_%29-5o7oh.md): Creates a file path by copying bytes from a null-terminated platform string.
- [init(platformString:)](filepath/init%28platformstring_%29-6i5cc.md): Deprecated.
- [init(platformString:)](filepath/init%28platformstring_%29-8amn5.md): Creates a file path by copying bytes from a null-terminated platform string.
- [init(root:\_:)](filepath/init%28root___%29-19uu0.md): Create a file path from a root and a collection of components.
- [init(root:\_:)](filepath/init%28root___%29-19xzy.md): Create a file path from an optional root and a slice of another path’s components.
- [init(root:components:)](filepath/init%28root_components_%29.md): Create a file path from a root and any number of components.

### Instance Properties

- [components](filepath/components.md): View the non-root components that make up this path.
- [extension](filepath/extension.md): The extension of the file or directory last component.
- [isAbsolute](filepath/isabsolute.md): Returns true if this path uniquely identifies the location of a file without reference to an additional starting location.
- [isEmpty](filepath/isempty.md): Whether this path is empty
- [isLexicallyNormal](filepath/islexicallynormal.md): Whether the path is in lexical-normal form, that is `.` and `..` components have been collapsed lexically (i.e. without following symlinks).
- [isRelative](filepath/isrelative.md): Returns true if this path is not absolute (see `isAbsolute`).
- [lastComponent](filepath/lastcomponent.md): Returns the final component of the path. Returns `nil` if the path is empty or only contains a root.
- [root](filepath/root-swift.property.md): Returns the root of a path if there is one, otherwise `nil`.
- [stem](filepath/stem.md): The non-extension portion of the file or directory last component.
- [string](filepath/string.md): Creates a string by interpreting the path’s content as UTF-8 on Unix and UTF-16 on Windows.

### Instance Methods

- [append(\_:)](filepath/append%28__%29-66nkr.md): Append `components` on to the end of this path.
- [append(\_:)](filepath/append%28__%29-7ttzp.md): Append the contents of `other`, ignoring any spurious leading separators.
- [append(\_:)](filepath/append%28__%29-8f41n.md): Append a `component` on to the end of this path.
- [appending(\_:)](filepath/appending%28__%29-1dtn3.md): Non-mutating version of `append(_:String)`.
- [appending(\_:)](filepath/appending%28__%29-24s87.md): Non-mutating version of `append(_:Component)`.
- [appending(\_:)](filepath/appending%28__%29-60fwk.md): Non-mutating version of `append(_:C)`.
- [ends(with:)](filepath/ends%28with_%29.md): Returns whether `other` is a suffix of `self`, only considering whole path components.
- [lexicallyNormalize()](filepath/lexicallynormalize%28%29.md): Collapse `.` and `..` components lexically (i.e. without following symlinks).
- [lexicallyNormalized()](filepath/lexicallynormalized%28%29.md): Returns a copy of `self` in lexical-normal form, that is `.` and `..` components have been collapsed lexically (i.e. without following symlinks). See `lexicallyNormalize`
- [lexicallyResolving(\_:)](filepath/lexicallyresolving%28__%29.md): Create a new `FilePath` by resolving `subpath` relative to `self`, ensuring that the result is lexically contained within `self`.
- [push(\_:)](filepath/push%28__%29.md): If `other` does not have a root, append each component of `other`. If `other` has a root, replaces `self` with other.
- [pushing(\_:)](filepath/pushing%28__%29.md): Non-mutating version of `push()`.
- [removeAll(keepingCapacity:)](filepath/removeall%28keepingcapacity_%29.md): Remove the contents of the path, keeping the null terminator.
- [removeLastComponent()](filepath/removelastcomponent%28%29.md): In-place mutating variant of `removingLastComponent`.
- [removePrefix(\_:)](filepath/removeprefix%28__%29.md): If `prefix` is a prefix of `self`, removes it and returns `true`. Otherwise returns `false`.
- [removingLastComponent()](filepath/removinglastcomponent%28%29.md): Creates a new path with everything up to but not including `lastComponent`.
- [removingRoot()](filepath/removingroot%28%29.md): Creates a new path containing just the components, i.e. everything after `root`.
- [reserveCapacity(\_:)](filepath/reservecapacity%28__%29.md): Reserve enough storage space to store `minimumCapacity` platform characters.
- [starts(with:)](filepath/starts%28with_%29.md): Returns whether `other` is a prefix of `self`, only considering whole path components.
- [stat(flags:retryOnInterrupt:)](filepath/stat%28flags_retryoninterrupt_%29.md): Creates a `Stat` struct for the file referenced by this `FilePath` using the given `Flags`.
- [stat(followTargetSymlink:retryOnInterrupt:)](filepath/stat%28followtargetsymlink_retryoninterrupt_%29.md): Creates a `Stat` struct for the file referenced by this `FilePath`.
- [stat(relativeTo:flags:retryOnInterrupt:)](filepath/stat%28relativeto_flags_retryoninterrupt_%29.md): Creates a `Stat` struct for the file referenced by this `FilePath` using the given `Flags`, including a `FileDescriptor` to resolve a relative path.
- [withPlatformString(\_:)](filepath/withplatformstring%28__%29.md): Calls the given closure with a pointer to the contents of the file path, represented as a null-terminated platform string.

### Default Implementations

- [CustomDebugStringConvertible Implementations](filepath/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](filepath/customstringconvertible-implementations.md)
- [ExpressibleByStringLiteral Implementations](filepath/expressiblebystringliteral-implementations.md)

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

## See Also

### Files

- [FileDescriptor](filedescriptor.md): An abstract handle to an input or output data resource, such as a file or a socket.
- [FilePermissions](filepermissions.md): The access permissions for a file.
