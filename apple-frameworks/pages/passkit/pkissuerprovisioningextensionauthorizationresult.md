> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkissuerprovisioningextensionauthorizationresult](https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionauthorizationresult)

# PKIssuerProvisioningExtensionAuthorizationResult (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A value that indicates the result of authorizing the addition of a payment card.

## Declaration

```swift
enum PKIssuerProvisioningExtensionAuthorizationResult
```

## Topics

### Authorization results

- [PKIssuerProvisioningExtensionAuthorizationResult.authorized](pkissuerprovisioningextensionauthorizationresult/authorized.md): A result that indicates the user successfully authorized adding the payment pass.
- [PKIssuerProvisioningExtensionAuthorizationResult.canceled](pkissuerprovisioningextensionauthorizationresult/canceled.md): A result that indicates the user canceled authorization or wasn’t authorized to add the payment card.

### Initializers

- [init(rawValue:)](pkissuerprovisioningextensionauthorizationresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing the result of authorization

- [completionHandler](pkissuerprovisioningextensionauthorizationproviding/completionhandler.md): A completion handler the system calls to find the result of authorizing the addition of the payment card.

# PKIssuerProvisioningExtensionAuthorizationResult (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A value that indicates the result of authorizing the addition of a payment card.

## Declaration

```objectivec
enum PKIssuerProvisioningExtensionAuthorizationResult : NSInteger;
```

## Topics

### Authorization results

- [PKIssuerProvisioningExtensionAuthorizationResultAuthorized](pkissuerprovisioningextensionauthorizationresult/authorized.md): A result that indicates the user successfully authorized adding the payment pass.
- [PKIssuerProvisioningExtensionAuthorizationResultCanceled](pkissuerprovisioningextensionauthorizationresult/canceled.md): A result that indicates the user canceled authorization or wasn’t authorized to add the payment card.

## See Also

### Providing the result of authorization

- [completionHandler](pkissuerprovisioningextensionauthorizationproviding/completionhandler.md): A completion handler the system calls to find the result of authorizing the addition of the payment card.
