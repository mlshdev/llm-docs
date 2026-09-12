> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownload/contentlength](https://developer.apple.com/documentation/storekit/skdownload/contentlength)

# contentLength (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.0+ (deprecated in 13.0) · macOS 10.8+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0)

The length of the downloadable content, in bytes.

> Use [expectedContentLength](expectedcontentlength.md) instead.

## Declaration

```swift
var contentLength: Int64 { get }
```

```swift
@NSCopying var contentLength: NSNumber { get }
```

## See Also

### Getting Content Information

- [expectedContentLength](expectedcontentlength.md): Deprecated. The length of the downloadable content, in bytes.
- [contentIdentifier](contentidentifier.md): Deprecated. A string that uniquely identifies the downloadable content.
- [contentVersion](contentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [transaction](transaction.md): Deprecated. The transaction associated with the downloadable file.

# contentLength (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.0) · macOS 10.8+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0)

The length of the downloadable content, in bytes.

> Use [expectedContentLength](expectedcontentlength.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly) long long contentLength;
```

```objectivec
@property (nonatomic, copy, readonly) NSNumber * contentLength;
```

## See Also

### Getting Content Information

- [expectedContentLength](expectedcontentlength.md): Deprecated. The length of the downloadable content, in bytes.
- [contentIdentifier](contentidentifier.md): Deprecated. A string that uniquely identifies the downloadable content.
- [contentVersion](contentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [transaction](transaction.md): Deprecated. The transaction associated with the downloadable file.
