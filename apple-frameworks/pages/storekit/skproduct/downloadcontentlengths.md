> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproduct/downloadcontentlengths](https://developer.apple.com/documentation/storekit/skproduct/downloadcontentlengths)

# downloadContentLengths (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.14+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 9.0)

The lengths of the downloadable files available for this product.

> Hosted content is no longer supported.

## Declaration

```swift
var downloadContentLengths: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

The array holds [NSNumber](../../foundation/nsnumber.md) objects, each of which holds a `long long` value that is the size of one of the downloadable files (in bytes).

## See Also

### Getting Downloadable Content Information

- [isDownloadable](isdownloadable.md): Deprecated. A Boolean value that indicates whether the App Store has downloadable content for this product.
- [downloadContentVersion](downloadcontentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [downloadable](downloadable.md): Deprecated. A Boolean value that indicates whether the App Store has downloadable content for this product.

# downloadContentLengths (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.14+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 9.0)

The lengths of the downloadable files available for this product.

> Hosted content is no longer supported.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * downloadContentLengths;
```

<a id="Discussion"></a>

## Discussion

The array holds [NSNumber](../../foundation/nsnumber.md) objects, each of which holds a `long long` value that is the size of one of the downloadable files (in bytes).

## See Also

### Getting Downloadable Content Information

- [isDownloadable](isdownloadable.md): Deprecated. A Boolean value that indicates whether the App Store has downloadable content for this product.
- [downloadContentVersion](downloadcontentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [downloadable](downloadable.md): Deprecated. A Boolean value that indicates whether the App Store has downloadable content for this product.
