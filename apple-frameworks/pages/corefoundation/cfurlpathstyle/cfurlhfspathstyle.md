> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlpathstyle/cfurlhfspathstyle](https://developer.apple.com/documentation/corefoundation/cfurlpathstyle/cfurlhfspathstyle)

# CFURLPathStyle.cfurlhfsPathStyle (Swift)

**Framework:** Core Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Indicates a HFS style path name. Components are colon delimited. A leading colon indicates a relative path, otherwise the first path component denotes the volume.

> Carbon File Manager is deprecated, use kCFURLPOSIXPathStyle where possible

## Declaration

```swift
case cfurlhfsPathStyle
```

## See Also

### Constants

- [CFURLPathStyle.cfurlposixPathStyle](cfurlposixpathstyle.md): Indicates a POSIX style path name. Components are slash delimited. A leading slash indicates an absolute path; a trailing slash is not significant.
- [CFURLPathStyle.cfurlWindowsPathStyle](cfurlwindowspathstyle.md): Indicates a Windows style path name.

# kCFURLHFSPathStyle (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Indicates a HFS style path name. Components are colon delimited. A leading colon indicates a relative path, otherwise the first path component denotes the volume.

> Carbon File Manager is deprecated, use kCFURLPOSIXPathStyle where possible

## Declaration

```objectivec
kCFURLHFSPathStyle
```

## See Also

### Constants

- [kCFURLPOSIXPathStyle](cfurlposixpathstyle.md): Indicates a POSIX style path name. Components are slash delimited. A leading slash indicates an absolute path; a trailing slash is not significant.
- [kCFURLWindowsPathStyle](cfurlwindowspathstyle.md): Indicates a Windows style path name.
