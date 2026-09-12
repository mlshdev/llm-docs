> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproduct/localizedtitle](https://developer.apple.com/documentation/storekit/skproduct/localizedtitle)

# localizedTitle (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The name of the product.

> Use Product.displayName.

## Declaration

```swift
var localizedTitle: String { get }
```

<a id="Discussion"></a>

## Discussion

The title’s language is determined by the storefront that the user’s device is connected to, not the preferred language set on the device.

## See Also

### Related Documentation

- [SKStorefront](../skstorefront.md): Deprecated. An object containing the location and unique identifier of an Apple App Store storefront.

### Getting Product Attributes

- [localizedDescription](localizeddescription.md): Deprecated. A description of the product.
- [contentVersion](contentversion.md): Deprecated. A string that identifies the version of the content.
- [isFamilyShareable](isfamilyshareable.md): Deprecated. A Boolean value that indicates whether the product is available for Family Sharing in App Store Connect.
- [contentLengths](contentlengths.md): Deprecated. The total size of the content, in bytes.

# localizedTitle (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The name of the product.

> Use Product.displayName.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * localizedTitle;
```

<a id="Discussion"></a>

## Discussion

The title’s language is determined by the storefront that the user’s device is connected to, not the preferred language set on the device.

## See Also

### Related Documentation

- [SKStorefront](../skstorefront.md): Deprecated. An object containing the location and unique identifier of an Apple App Store storefront.

### Getting Product Attributes

- [localizedDescription](localizeddescription.md): Deprecated. A description of the product.
- [contentVersion](contentversion.md): Deprecated. A string that identifies the version of the content.
- [isFamilyShareable](isfamilyshareable.md): Deprecated. A Boolean value that indicates whether the product is available for Family Sharing in App Store Connect.
- [contentLengths](contentlengths.md): Deprecated. The total size of the content, in bytes.
