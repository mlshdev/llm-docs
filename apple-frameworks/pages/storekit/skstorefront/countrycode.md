> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstorefront/countrycode](https://developer.apple.com/documentation/storekit/skstorefront/countrycode)

# countryCode (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The three-letter code representing the country or region associated with the App Store storefront.

> Use 'Storefront.countryCode'.

## Declaration

```swift
var countryCode: String { get }
```

<a id="Discussion"></a>

## Discussion

This property uses the ISO 3166-1 Alpha-3 country code representation.

## See Also

### Identifying the Storefront

- [identifier](identifier.md): Deprecated. A value defined by Apple that uniquely identifies an App Store storefront.

# countryCode (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The three-letter code representing the country or region associated with the App Store storefront.

> Use 'Storefront.countryCode'.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * countryCode;
```

```objectivec
@property (atomic, copy, readonly) NSString * countryCode;
```

<a id="Discussion"></a>

## Discussion

This property uses the ISO 3166-1 Alpha-3 country code representation.

## See Also

### Identifying the Storefront

- [identifier](identifier.md): Deprecated. A value defined by Apple that uniquely identifies an App Store storefront.
