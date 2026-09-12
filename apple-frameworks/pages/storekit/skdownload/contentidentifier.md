> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownload/contentidentifier](https://developer.apple.com/documentation/storekit/skdownload/contentidentifier)

# contentIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

A string that uniquely identifies the downloadable content.

> Hosted content is no longer supported.

## Declaration

```swift
var contentIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Each piece of downloadable content associated with a product has its own unique identifier. The content identifier is specified in App Store Connect when you add the content.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Getting Content Information

- [expectedContentLength](expectedcontentlength.md): Deprecated. The length of the downloadable content, in bytes.
- [contentVersion](contentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [transaction](transaction.md): Deprecated. The transaction associated with the downloadable file.
- [contentLength](contentlength.md): Deprecated. The length of the downloadable content, in bytes.

# contentIdentifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

A string that uniquely identifies the downloadable content.

> Hosted content is no longer supported.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * contentIdentifier;
```

<a id="Discussion"></a>

## Discussion

Each piece of downloadable content associated with a product has its own unique identifier. The content identifier is specified in App Store Connect when you add the content.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Getting Content Information

- [expectedContentLength](expectedcontentlength.md): Deprecated. The length of the downloadable content, in bytes.
- [contentVersion](contentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [transaction](transaction.md): Deprecated. The transaction associated with the downloadable file.
- [contentLength](contentlength.md): Deprecated. The length of the downloadable content, in bytes.
