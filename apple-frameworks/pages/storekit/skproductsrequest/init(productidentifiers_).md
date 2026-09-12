> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductsrequest/init(productidentifiers:)](https://developer.apple.com/documentation/storekit/skproductsrequest/init(productidentifiers:))

# init(productIdentifiers:) (Swift)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Initializes the request with the set of product identifiers.

> Use Product.products(for:).

## Declaration

```swift
init(productIdentifiers: Set<String>)
```

## Parameters

- `productIdentifiers`: The list of product identifiers for the products you wish to retrieve descriptions of.

<a id="return-value"></a>

## Return Value

The initialized request object.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

# initWithProductIdentifiers: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Initializes the request with the set of product identifiers.

> Use Product.products(for:).

## Declaration

```objectivec
- (instancetype) initWithProductIdentifiers:(NSSet<NSString *> *) productIdentifiers;
```

## Parameters

- `productIdentifiers`: The list of product identifiers for the products you wish to retrieve descriptions of.

<a id="return-value"></a>

## Return Value

The initialized request object.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)
