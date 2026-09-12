> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproduct/downloadable](https://developer.apple.com/documentation/storekit/skproduct/downloadable)

# downloadable (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 10.15)

A Boolean value that indicates whether the App Store has downloadable content for this product.

> Use [isDownloadable](isdownloadable.md) instead.

## Declaration

```swift
var downloadable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

You can associate a set of data files with the App Store Connect record you created for a product. The value of this property is [true](https://developer.apple.com/documentation/swift/true) if at least one file has been associated with the product.

## See Also

### Getting Downloadable Content Information

- [isDownloadable](isdownloadable.md): Deprecated. A Boolean value that indicates whether the App Store has downloadable content for this product.
- [downloadContentLengths](downloadcontentlengths.md): Deprecated. The lengths of the downloadable files available for this product.
- [downloadContentVersion](downloadcontentversion.md): Deprecated. A string that identifies which version of the content is available for download.

# downloadable (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 10.15)

A Boolean value that indicates whether the App Store has downloadable content for this product.

> Use [isDownloadable](isdownloadable.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL downloadable;
```

<a id="Discussion"></a>

## Discussion

You can associate a set of data files with the App Store Connect record you created for a product. The value of this property is [true](https://developer.apple.com/documentation/swift/true) if at least one file has been associated with the product.

## See Also

### Getting Downloadable Content Information

- [isDownloadable](isdownloadable.md): Deprecated. A Boolean value that indicates whether the App Store has downloadable content for this product.
- [downloadContentLengths](downloadcontentlengths.md): Deprecated. The lengths of the downloadable files available for this product.
- [downloadContentVersion](downloadcontentversion.md): Deprecated. A string that identifies which version of the content is available for download.
