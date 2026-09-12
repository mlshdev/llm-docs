> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkissuerprovisioningextensionhandler/status(completion:)](https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionhandler/status(completion:))

# status(completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Reports the status of your Wallet extension.

## Declaration

```swift
func status(completion: @escaping @Sendable (PKIssuerProvisioningExtensionStatus) -> Void)
```

```swift
func status() async -> PKIssuerProvisioningExtensionStatus
```

## Parameters

- `completion`: A completion handler that the system calls to determine if there is a pass available and if adding the pass requires authentication. This handler takes the following parameter:

  - **`status`**: A [PKIssuerProvisioningExtensionStatus](../pkissuerprovisioningextensionstatus.md) that indicates whether there are any payment cards available to add as Wallet passes.

## See Also

### Returning extension status

- [PKIssuerProvisioningExtensionStatus](../pkissuerprovisioningextensionstatus.md): An object that indicates whether there are any payment cards available to add as Wallet passes.

# statusWithCompletion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Reports the status of your Wallet extension.

## Declaration

```objectivec
- (void) statusWithCompletion:(void (^)(PKIssuerProvisioningExtensionStatus *status)) completion;
```

## Parameters

- `completion`: A completion handler that the system calls to determine if there is a pass available and if adding the pass requires authentication. This handler takes the following parameter:

  - **`status`**: A [PKIssuerProvisioningExtensionStatus](../pkissuerprovisioningextensionstatus.md) that indicates whether there are any payment cards available to add as Wallet passes.

## See Also

### Returning extension status

- [PKIssuerProvisioningExtensionStatus](../pkissuerprovisioningextensionstatus.md): An object that indicates whether there are any payment cards available to add as Wallet passes.
