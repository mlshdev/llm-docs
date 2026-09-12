> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentorderdetails/webserviceurl](https://developer.apple.com/documentation/passkit/pkpaymentorderdetails/webserviceurl)

# webServiceURL (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The URL for your web service.

## Declaration

```swift
var webServiceURL: URL { get set }
```

## See Also

### Identifying and authenticating the order

- [authenticationToken](authenticationtoken.md): The authentification token supplied to your web service.
- [orderIdentifier](orderidentifier.md): A unique order identifier scoped to your order type identifier.
- [orderTypeIdentifier](ordertypeidentifier.md): An identifier for the order type associated with the order.

# webServiceURL (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The URL for your web service.

## Declaration

```objectivec
@property (nonatomic, copy) NSURL * webServiceURL;
```

## See Also

### Identifying and authenticating the order

- [authenticationToken](authenticationtoken.md): The authentification token supplied to your web service.
- [orderIdentifier](orderidentifier.md): A unique order identifier scoped to your order type identifier.
- [orderTypeIdentifier](ordertypeidentifier.md): An identifier for the order type associated with the order.
