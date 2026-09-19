> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionauthorizationproviding/completionhandler

# completionHandler (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A completion handler the system calls to find the result of authorizing the addition of the payment card.

## Declaration

```swift
var completionHandler: ((PKIssuerProvisioningExtensionAuthorizationResult) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The completion handler takes the following parameter:

- **`result`**: A [PKIssuerProvisioningExtensionAuthorizationResult](../pkissuerprovisioningextensionauthorizationresult.md) case that indicates the result of authorizing the addition of the payment card.

## See Also

### Providing the result of authorization

- [PKIssuerProvisioningExtensionAuthorizationResult](../pkissuerprovisioningextensionauthorizationresult.md): A value that indicates the result of authorizing the addition of a payment card.

# completionHandler (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A completion handler the system calls to find the result of authorizing the addition of the payment card.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^completionHandler)(PKIssuerProvisioningExtensionAuthorizationResult result);
```

<a id="Discussion"></a>

## Discussion

The completion handler takes the following parameter:

- **`result`**: A [PKIssuerProvisioningExtensionAuthorizationResult](../pkissuerprovisioningextensionauthorizationresult.md) case that indicates the result of authorizing the addition of the payment card.

## See Also

### Providing the result of authorization

- [PKIssuerProvisioningExtensionAuthorizationResult](../pkissuerprovisioningextensionauthorizationresult.md): A value that indicates the result of authorizing the addition of a payment card.
