> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/component/kind-swift.enum](https://developer.apple.com/documentation/system/filepath/component/kind-swift.enum)

# FilePath.Component.Kind

**Framework:** System  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Whether a component is a regular file or directory name, or a special directory `.` or `..`

## Declaration

```swift
@frozen enum Kind
```

## Topics

### Enumeration Cases

- [FilePath.Component.Kind.currentDirectory](kind-swift.enum/currentdirectory.md): The special directory `.`, representing the current directory.
- [FilePath.Component.Kind.parentDirectory](kind-swift.enum/parentdirectory.md): The special directory `..`, representing the parent directory.
- [FilePath.Component.Kind.regular](kind-swift.enum/regular.md): A file or directory name

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
