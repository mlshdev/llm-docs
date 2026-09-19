> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpaymentorderdetails/init(ordertypeidentifier:orderidentifier:webserviceurl:authenticationtoken:)

# init(orderTypeIdentifier:orderIdentifier:webServiceURL:authenticationToken:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Initializes a payment order details object with the identifier, web service URL, and authentication token you provide.

## Declaration

```swift
init(orderTypeIdentifier: String, orderIdentifier: String, webServiceURL: URL, authenticationToken: String)
```

## Parameters

- `orderTypeIdentifier`: An identifier for the order type associated with the order.
- `orderIdentifier`: A unique order identifier scoped to your order type identifier.
- `webServiceURL`: The URL of your web service.
- `authenticationToken`: The authentication token supplied to your web service.

# initWithOrderTypeIdentifier:orderIdentifier:webServiceURL:authenticationToken: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Initializes a payment order details object with the identifier, web service URL, and authentication token you provide.

## Declaration

```objectivec
- (instancetype) initWithOrderTypeIdentifier:(NSString *) orderTypeIdentifier orderIdentifier:(NSString *) orderIdentifier webServiceURL:(NSURL *) webServiceURL authenticationToken:(NSString *) authenticationToken;
```

## Parameters

- `orderTypeIdentifier`: An identifier for the order type associated with the order.
- `orderIdentifier`: A unique order identifier scoped to your order type identifier.
- `webServiceURL`: The URL of your web service.
- `authenticationToken`: The authentication token supplied to your web service.
