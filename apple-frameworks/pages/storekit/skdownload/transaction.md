> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownload/transaction](https://developer.apple.com/documentation/storekit/skdownload/transaction)

# transaction (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

The transaction associated with the downloadable file.

> Hosted content is no longer supported.

## Declaration

```swift
var transaction: SKPaymentTransaction { get }
```

<a id="Discussion"></a>

## Discussion

A download object is always associated with a payment transaction. The download object may only be queued after payment is processed and before the transaction is finished.

## See Also

### Getting Content Information

- [expectedContentLength](expectedcontentlength.md): Deprecated. The length of the downloadable content, in bytes.
- [contentIdentifier](contentidentifier.md): Deprecated. A string that uniquely identifies the downloadable content.
- [contentVersion](contentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [contentLength](contentlength.md): Deprecated. The length of the downloadable content, in bytes.

# transaction (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

The transaction associated with the downloadable file.

> Hosted content is no longer supported.

## Declaration

```objectivec
@property (nonatomic, readonly) SKPaymentTransaction * transaction;
```

<a id="Discussion"></a>

## Discussion

A download object is always associated with a payment transaction. The download object may only be queued after payment is processed and before the transaction is finished.

## See Also

### Getting Content Information

- [expectedContentLength](expectedcontentlength.md): Deprecated. The length of the downloadable content, in bytes.
- [contentIdentifier](contentidentifier.md): Deprecated. A string that uniquely identifies the downloadable content.
- [contentVersion](contentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [contentLength](contentlength.md): Deprecated. The length of the downloadable content, in bytes.
