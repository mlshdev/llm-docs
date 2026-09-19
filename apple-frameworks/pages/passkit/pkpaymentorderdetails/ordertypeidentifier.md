> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpaymentorderdetails/ordertypeidentifier

# orderTypeIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An identifier for the order type associated with the order.

## Declaration

```swift
var orderTypeIdentifier: String { get set }
```

## See Also

### Identifying and authenticating the order

- [authenticationToken](authenticationtoken.md): The authentification token supplied to your web service.
- [orderIdentifier](orderidentifier.md): A unique order identifier scoped to your order type identifier.
- [webServiceURL](webserviceurl.md): The URL for your web service.

# orderTypeIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An identifier for the order type associated with the order.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * orderTypeIdentifier;
```

## See Also

### Identifying and authenticating the order

- [authenticationToken](authenticationtoken.md): The authentification token supplied to your web service.
- [orderIdentifier](orderidentifier.md): A unique order identifier scoped to your order type identifier.
- [webServiceURL](webserviceurl.md): The URL for your web service.
