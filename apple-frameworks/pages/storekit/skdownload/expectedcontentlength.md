> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/skdownload/expectedcontentlength

# expectedContentLength (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · tvOS 13.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

The length of the downloadable content, in bytes.

> Hosted content is no longer supported.

## Declaration

```swift
var expectedContentLength: Int64 { get }
```

## See Also

### Getting Content Information

- [contentIdentifier](contentidentifier.md): Deprecated. A string that uniquely identifies the downloadable content.
- [contentVersion](contentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [transaction](transaction.md): Deprecated. The transaction associated with the downloadable file.
- [contentLength](contentlength.md): Deprecated. The length of the downloadable content, in bytes.

# expectedContentLength (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · tvOS 13.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

The length of the downloadable content, in bytes.

> Hosted content is no longer supported.

## Declaration

```objectivec
@property (nonatomic, readonly) long long expectedContentLength;
```

## See Also

### Getting Content Information

- [contentIdentifier](contentidentifier.md): Deprecated. A string that uniquely identifies the downloadable content.
- [contentVersion](contentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [transaction](transaction.md): Deprecated. The transaction associated with the downloadable file.
- [contentLength](contentlength.md): Deprecated. The length of the downloadable content, in bytes.
