> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkissuerprovisioningextensionhandler/passentries(completion:)](https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionhandler/passentries(completion:))

# passEntries(completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Reports the list of passes available to add to an iPhone.

## Declaration

```swift
func passEntries(completion: @escaping @Sendable ([PKIssuerProvisioningExtensionPassEntry]) -> Void)
```

```swift
func passEntries() async -> [PKIssuerProvisioningExtensionPassEntry]
```

## Parameters

- `completion`: A completion handler that the system calls to find the list of passes available to add to an iPhone. This handler takes the following parameter:

  - **`entries`**: An array [PKIssuerProvisioningExtensionPassEntry](../pkissuerprovisioningextensionpassentry.md) items that represents the passes that are available to add to Wallet.

## See Also

### Returning available passes

- [remotePassEntries(completion:)](remotepassentries%28completion_%29.md): Reports the list of passes available to add to an Apple Watch.
- [PKIssuerProvisioningExtensionPassEntry](../pkissuerprovisioningextensionpassentry.md): An object that represents an item available to add to as a Wallet pass.
- [PKIssuerProvisioningExtensionPaymentPassEntry](../pkissuerprovisioningextensionpaymentpassentry.md): An object that represents a payment card available to add as a payment pass.

# passEntriesWithCompletion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Reports the list of passes available to add to an iPhone.

## Declaration

```objectivec
- (void) passEntriesWithCompletion:(void (^)(NSArray<PKIssuerProvisioningExtensionPassEntry *> *entries)) completion;
```

## Parameters

- `completion`: A completion handler that the system calls to find the list of passes available to add to an iPhone. This handler takes the following parameter:

  - **`entries`**: An array [PKIssuerProvisioningExtensionPassEntry](../pkissuerprovisioningextensionpassentry.md) items that represents the passes that are available to add to Wallet.

## See Also

### Returning available passes

- [remotePassEntriesWithCompletion:](remotepassentries%28completion_%29.md): Reports the list of passes available to add to an Apple Watch.
- [PKIssuerProvisioningExtensionPassEntry](../pkissuerprovisioningextensionpassentry.md): An object that represents an item available to add to as a Wallet pass.
- [PKIssuerProvisioningExtensionPaymentPassEntry](../pkissuerprovisioningextensionpaymentpassentry.md): An object that represents a payment card available to add as a payment pass.
