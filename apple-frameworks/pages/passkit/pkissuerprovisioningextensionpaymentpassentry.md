> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkissuerprovisioningextensionpaymentpassentry](https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionpaymentpassentry)

# PKIssuerProvisioningExtensionPaymentPassEntry (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

An object that represents a payment card available to add as a payment pass.

## Declaration

```swift
class PKIssuerProvisioningExtensionPaymentPassEntry
```

## Topics

### Creating a payment pass entry

- [init(identifier:title:art:addRequestConfiguration:)](pkissuerprovisioningextensionpaymentpassentry/init%28identifier_title_art_addrequestconfiguration_%29.md): Creates a new entry for a payment pass that a user adds to Wallet.

### Getting the pass entry configuration

- [addRequestConfiguration](pkissuerprovisioningextensionpaymentpassentry/addrequestconfiguration.md): The configuration that the system uses to add a payment pass.

## Relationships

### Inherits From

- [PKIssuerProvisioningExtensionPassEntry](pkissuerprovisioningextensionpassentry.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Returning available passes

- [passEntries(completion:)](pkissuerprovisioningextensionhandler/passentries%28completion_%29.md): Reports the list of passes available to add to an iPhone.
- [remotePassEntries(completion:)](pkissuerprovisioningextensionhandler/remotepassentries%28completion_%29.md): Reports the list of passes available to add to an Apple Watch.
- [PKIssuerProvisioningExtensionPassEntry](pkissuerprovisioningextensionpassentry.md): An object that represents an item available to add to as a Wallet pass.

# PKIssuerProvisioningExtensionPaymentPassEntry (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

An object that represents a payment card available to add as a payment pass.

## Declaration

```objectivec
@interface PKIssuerProvisioningExtensionPaymentPassEntry : PKIssuerProvisioningExtensionPassEntry
```

## Topics

### Creating a payment pass entry

- [initWithIdentifier:title:art:addRequestConfiguration:](pkissuerprovisioningextensionpaymentpassentry/init%28identifier_title_art_addrequestconfiguration_%29.md): Creates a new entry for a payment pass that a user adds to Wallet.

### Getting the pass entry configuration

- [addRequestConfiguration](pkissuerprovisioningextensionpaymentpassentry/addrequestconfiguration.md): The configuration that the system uses to add a payment pass.

## Relationships

### Inherits From

- [PKIssuerProvisioningExtensionPassEntry](pkissuerprovisioningextensionpassentry.md)

## See Also

### Returning available passes

- [passEntriesWithCompletion:](pkissuerprovisioningextensionhandler/passentries%28completion_%29.md): Reports the list of passes available to add to an iPhone.
- [remotePassEntriesWithCompletion:](pkissuerprovisioningextensionhandler/remotepassentries%28completion_%29.md): Reports the list of passes available to add to an Apple Watch.
- [PKIssuerProvisioningExtensionPassEntry](pkissuerprovisioningextensionpassentry.md): An object that represents an item available to add to as a Wallet pass.
