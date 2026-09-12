> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontroller/supportsdisbursements(using:capabilities:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontroller/supportsdisbursements(using:capabilities:))

# supportsDisbursements(using:capabilities:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment networks and merchant capabilities.

## Declaration

```swift
nonisolated class func supportsDisbursements(using supportedNetworks: [PKPaymentNetwork], capabilities: PKMerchantCapability) -> Bool
```

## Parameters

- `supportedNetworks`: An array of payment networks to check.
- `capabilities`: One of the [PKMerchantCapability](../pkmerchantcapability.md) `capabilities.`

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device can process disbursement requests using the specified payment networks and merchant capabilities; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining whether the user can make payments

- [canMakePayments()](canmakepayments%28%29.md): Returns whether the user can make payments.
- [canMakePayments(usingNetworks:)](canmakepayments%28usingnetworks_%29.md): Returns whether the user can make payments through the specified network.
- [canMakePayments(usingNetworks:capabilities:)](canmakepayments%28usingnetworks_capabilities_%29.md): Returns whether the user can make payments using a card from the specified network with the specified capabilities.
- [supportsDisbursements()](supportsdisbursements%28%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests.
- [supportsDisbursements(using:)](supportsdisbursements%28using_%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment networks.

# supportsDisbursementsUsingNetworks:capabilities: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment networks and merchant capabilities.

## Declaration

```objectivec
+ (BOOL) supportsDisbursementsUsingNetworks:(NSArray<NSString *> *) supportedNetworks capabilities:(PKMerchantCapability) capabilities;
```

## Parameters

- `supportedNetworks`: An array of payment networks to check.
- `capabilities`: One of the [PKMerchantCapability](../pkmerchantcapability.md) `capabilities.`

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device can process disbursement requests using the specified payment networks and merchant capabilities; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining whether the user can make payments

- [canMakePayments](canmakepayments%28%29.md): Returns whether the user can make payments.
- [canMakePaymentsUsingNetworks:](canmakepayments%28usingnetworks_%29.md): Returns whether the user can make payments through the specified network.
- [canMakePaymentsUsingNetworks:capabilities:](canmakepayments%28usingnetworks_capabilities_%29.md): Returns whether the user can make payments using a card from the specified network with the specified capabilities.
- [supportsDisbursements](supportsdisbursements%28%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests.
- [supportsDisbursementsUsingNetworks:](supportsdisbursements%28using_%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment networks.
