> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkissuerprovisioningextensionpaymentpassentry/init(identifier:title:art:addrequestconfiguration:)](https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionpaymentpassentry/init(identifier:title:art:addrequestconfiguration:))

# init(identifier:title:art:addRequestConfiguration:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

Creates a new entry for a payment pass that a user adds to Wallet.

## Declaration

```swift
init?(identifier: String, title: String, art: CGImage, addRequestConfiguration configuration: PKAddPaymentPassRequestConfiguration)
```

## Parameters

- `identifier`: The value that you use to identify the card.
- `title`: The name for the pass the system displays to the user when they add or select the card.
- `art`: The image that the system displays to the user when they add or select the card.
- `configuration`: The configuration that an [PKAddSecureElementPassViewController](../pkaddsecureelementpassviewcontroller.md) uses to create a secure pass.

# initWithIdentifier:title:art:addRequestConfiguration: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

Creates a new entry for a payment pass that a user adds to Wallet.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier title:(NSString *) title art:(CGImageRef) art addRequestConfiguration:(PKAddPaymentPassRequestConfiguration *) configuration;
```

## Parameters

- `identifier`: The value that you use to identify the card.
- `title`: The name for the pass the system displays to the user when they add or select the card.
- `art`: The image that the system displays to the user when they add or select the card.
- `configuration`: The configuration that an [PKAddSecureElementPassViewController](../pkaddsecureelementpassviewcontroller.md) uses to create a secure pass.
