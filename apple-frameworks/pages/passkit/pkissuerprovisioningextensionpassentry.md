> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkissuerprovisioningextensionpassentry](https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionpassentry)

# PKIssuerProvisioningExtensionPassEntry (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

An object that represents an item available to add to as a Wallet pass.

## Declaration

```swift
class PKIssuerProvisioningExtensionPassEntry
```

## Topics

### Information for displaying an addable card

- [art](pkissuerprovisioningextensionpassentry/art.md): An image to that the system displays to the user when they add or select the card.
- [title](pkissuerprovisioningextensionpassentry/title.md): A name for the pass that the system displays to the user when they add or select the card.
- [identifier](pkissuerprovisioningextensionpassentry/identifier.md): A developer-defined value you use to identify the card.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKIssuerProvisioningExtensionPaymentPassEntry](pkissuerprovisioningextensionpaymentpassentry.md)

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
- [PKIssuerProvisioningExtensionPaymentPassEntry](pkissuerprovisioningextensionpaymentpassentry.md): An object that represents a payment card available to add as a payment pass.

# PKIssuerProvisioningExtensionPassEntry (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

An object that represents an item available to add to as a Wallet pass.

## Declaration

```objectivec
@interface PKIssuerProvisioningExtensionPassEntry : NSObject
```

## Topics

### Information for displaying an addable card

- [art](pkissuerprovisioningextensionpassentry/art.md): An image to that the system displays to the user when they add or select the card.
- [title](pkissuerprovisioningextensionpassentry/title.md): A name for the pass that the system displays to the user when they add or select the card.
- [identifier](pkissuerprovisioningextensionpassentry/identifier.md): A developer-defined value you use to identify the card.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKIssuerProvisioningExtensionPaymentPassEntry](pkissuerprovisioningextensionpaymentpassentry.md)

## See Also

### Returning available passes

- [passEntriesWithCompletion:](pkissuerprovisioningextensionhandler/passentries%28completion_%29.md): Reports the list of passes available to add to an iPhone.
- [remotePassEntriesWithCompletion:](pkissuerprovisioningextensionhandler/remotepassentries%28completion_%29.md): Reports the list of passes available to add to an Apple Watch.
- [PKIssuerProvisioningExtensionPaymentPassEntry](pkissuerprovisioningextensionpaymentpassentry.md): An object that represents a payment card available to add as a payment pass.
