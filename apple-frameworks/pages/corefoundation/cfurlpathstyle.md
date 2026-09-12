> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlpathstyle](https://developer.apple.com/documentation/corefoundation/cfurlpathstyle)

# CFURLPathStyle (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options you can use to determine how CFURL functions parse a file system path name.

## Declaration

```swift
enum CFURLPathStyle
```

## Topics

### Constants

- [CFURLPathStyle.cfurlposixPathStyle](cfurlpathstyle/cfurlposixpathstyle.md): Indicates a POSIX style path name. Components are slash delimited. A leading slash indicates an absolute path; a trailing slash is not significant.
- [CFURLPathStyle.cfurlhfsPathStyle](cfurlpathstyle/cfurlhfspathstyle.md): Deprecated. Indicates a HFS style path name. Components are colon delimited. A leading colon indicates a relative path, otherwise the first path component denotes the volume.
- [CFURLPathStyle.cfurlWindowsPathStyle](cfurlpathstyle/cfurlwindowspathstyle.md): Indicates a Windows style path name.

### Initializers

- [init(rawValue:)](cfurlpathstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Miscellaneous

- [CFURLComponentType](cfurlcomponenttype.md): The types of components in a URL.

# CFURLPathStyle (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options you can use to determine how CFURL functions parse a file system path name.

## Declaration

```objectivec
enum CFURLPathStyle : CFIndex;
```

## Topics

### Constants

- [kCFURLPOSIXPathStyle](cfurlpathstyle/cfurlposixpathstyle.md): Indicates a POSIX style path name. Components are slash delimited. A leading slash indicates an absolute path; a trailing slash is not significant.
- [kCFURLHFSPathStyle](cfurlpathstyle/cfurlhfspathstyle.md): Deprecated. Indicates a HFS style path name. Components are colon delimited. A leading colon indicates a relative path, otherwise the first path component denotes the volume.
- [kCFURLWindowsPathStyle](cfurlpathstyle/cfurlwindowspathstyle.md): Indicates a Windows style path name.

## See Also

### Miscellaneous

- [CFURLComponentType](cfurlcomponenttype.md): The types of components in a URL.
