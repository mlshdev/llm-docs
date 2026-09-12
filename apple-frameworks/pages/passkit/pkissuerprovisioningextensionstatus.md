> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkissuerprovisioningextensionstatus](https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionstatus)

# PKIssuerProvisioningExtensionStatus (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

An object that indicates whether there are any payment cards available to add as Wallet passes.

## Declaration

```swift
class PKIssuerProvisioningExtensionStatus
```

## Topics

### Creating an issuer extension provisioning status

- [init()](pkissuerprovisioningextensionstatus/init%28%29.md): Creates a new extension-handler status object.

### Reporting pass availability

- [passEntriesAvailable](pkissuerprovisioningextensionstatus/passentriesavailable.md): A Boolean value that indicates whether a payment card is available to add to an iPhone.
- [remotePassEntriesAvailable](pkissuerprovisioningextensionstatus/remotepassentriesavailable.md): A Boolean value that indicates whether a payment card is available to add to an Apple Watch.

### Reporting requirements for authentication

- [requiresAuthentication](pkissuerprovisioningextensionstatus/requiresauthentication.md): A Boolean value that indicates whether adding a card requires an authorization-user-interface extension provided by your app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Returning extension status

- [status(completion:)](pkissuerprovisioningextensionhandler/status%28completion_%29.md): Reports the status of your Wallet extension.

# PKIssuerProvisioningExtensionStatus (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

An object that indicates whether there are any payment cards available to add as Wallet passes.

## Declaration

```objectivec
@interface PKIssuerProvisioningExtensionStatus : NSObject
```

## Topics

### Creating an issuer extension provisioning status

- [init](pkissuerprovisioningextensionstatus/init%28%29.md): Creates a new extension-handler status object.

### Reporting pass availability

- [passEntriesAvailable](pkissuerprovisioningextensionstatus/passentriesavailable.md): A Boolean value that indicates whether a payment card is available to add to an iPhone.
- [remotePassEntriesAvailable](pkissuerprovisioningextensionstatus/remotepassentriesavailable.md): A Boolean value that indicates whether a payment card is available to add to an Apple Watch.

### Reporting requirements for authentication

- [requiresAuthentication](pkissuerprovisioningextensionstatus/requiresauthentication.md): A Boolean value that indicates whether adding a card requires an authorization-user-interface extension provided by your app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Returning extension status

- [statusWithCompletion:](pkissuerprovisioningextensionhandler/status%28completion_%29.md): Reports the status of your Wallet extension.
