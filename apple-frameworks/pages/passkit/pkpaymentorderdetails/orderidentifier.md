> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentorderdetails/orderidentifier](https://developer.apple.com/documentation/passkit/pkpaymentorderdetails/orderidentifier)

# orderIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A unique order identifier scoped to your order type identifier.

## Declaration

```swift
var orderIdentifier: String { get set }
```

## See Also

### Identifying and authenticating the order

- [authenticationToken](authenticationtoken.md): The authentification token supplied to your web service.
- [orderTypeIdentifier](ordertypeidentifier.md): An identifier for the order type associated with the order.
- [webServiceURL](webserviceurl.md): The URL for your web service.

# orderIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A unique order identifier scoped to your order type identifier.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * orderIdentifier;
```

## See Also

### Identifying and authenticating the order

- [authenticationToken](authenticationtoken.md): The authentification token supplied to your web service.
- [orderTypeIdentifier](ordertypeidentifier.md): An identifier for the order type associated with the order.
- [webServiceURL](webserviceurl.md): The URL for your web service.
