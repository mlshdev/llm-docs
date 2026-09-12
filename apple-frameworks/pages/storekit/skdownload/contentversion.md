> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownload/contentversion](https://developer.apple.com/documentation/storekit/skdownload/contentversion)

# contentVersion (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

A string that identifies which version of the content is available for download.

> Hosted content is no longer supported.

## Declaration

```swift
var contentVersion: String { get }
```

<a id="Discussion"></a>

## Discussion

The version string must be formatted as a series of integers separated by periods.

## See Also

### Getting Content Information

- [expectedContentLength](expectedcontentlength.md): Deprecated. The length of the downloadable content, in bytes.
- [contentIdentifier](contentidentifier.md): Deprecated. A string that uniquely identifies the downloadable content.
- [transaction](transaction.md): Deprecated. The transaction associated with the downloadable file.
- [contentLength](contentlength.md): Deprecated. The length of the downloadable content, in bytes.

# contentVersion (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

A string that identifies which version of the content is available for download.

> Hosted content is no longer supported.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * contentVersion;
```

<a id="Discussion"></a>

## Discussion

The version string must be formatted as a series of integers separated by periods.

## See Also

### Getting Content Information

- [expectedContentLength](expectedcontentlength.md): Deprecated. The length of the downloadable content, in bytes.
- [contentIdentifier](contentidentifier.md): Deprecated. A string that uniquely identifies the downloadable content.
- [transaction](transaction.md): Deprecated. The transaction associated with the downloadable file.
- [contentLength](contentlength.md): Deprecated. The length of the downloadable content, in bytes.
