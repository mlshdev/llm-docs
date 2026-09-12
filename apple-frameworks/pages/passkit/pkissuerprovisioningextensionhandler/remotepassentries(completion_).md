> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkissuerprovisioningextensionhandler/remotepassentries(completion:)](https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionhandler/remotepassentries(completion:))

# remotePassEntries(completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Reports the list of passes available to add to an Apple Watch.

## Declaration

```swift
func remotePassEntries(completion: @escaping @Sendable ([PKIssuerProvisioningExtensionPassEntry]) -> Void)
```

```swift
func remotePassEntries() async -> [PKIssuerProvisioningExtensionPassEntry]
```

## Parameters

- `completion`: A completion handler that the system calls to find the list of passes available to add to an Apple Watch. This handler takes the following parameter:

  - **`entries`**: An array [PKIssuerProvisioningExtensionPassEntry](../pkissuerprovisioningextensionpassentry.md) items representing the passes that are available to add to Wallet.

## See Also

### Returning available passes

- [passEntries(completion:)](passentries%28completion_%29.md): Reports the list of passes available to add to an iPhone.
- [PKIssuerProvisioningExtensionPassEntry](../pkissuerprovisioningextensionpassentry.md): An object that represents an item available to add to as a Wallet pass.
- [PKIssuerProvisioningExtensionPaymentPassEntry](../pkissuerprovisioningextensionpaymentpassentry.md): An object that represents a payment card available to add as a payment pass.

# remotePassEntriesWithCompletion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Reports the list of passes available to add to an Apple Watch.

## Declaration

```objectivec
- (void) remotePassEntriesWithCompletion:(void (^)(NSArray<PKIssuerProvisioningExtensionPassEntry *> *entries)) completion;
```

## Parameters

- `completion`: A completion handler that the system calls to find the list of passes available to add to an Apple Watch. This handler takes the following parameter:

  - **`entries`**: An array [PKIssuerProvisioningExtensionPassEntry](../pkissuerprovisioningextensionpassentry.md) items representing the passes that are available to add to Wallet.

## See Also

### Returning available passes

- [passEntriesWithCompletion:](passentries%28completion_%29.md): Reports the list of passes available to add to an iPhone.
- [PKIssuerProvisioningExtensionPassEntry](../pkissuerprovisioningextensionpassentry.md): An object that represents an item available to add to as a Wallet pass.
- [PKIssuerProvisioningExtensionPaymentPassEntry](../pkissuerprovisioningextensionpaymentpassentry.md): An object that represents a payment card available to add as a payment pass.
