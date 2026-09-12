> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontroller/supportsdisbursements(using:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller/supportsdisbursements(using:))

# supportsDisbursements(using:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment network brands.

## Declaration

```swift
class func supportsDisbursements(using supportedNetworks: [PKPaymentNetwork]) -> Bool
```

## Parameters

- `supportedNetworks`: An array of `PKPaymentNetwork` elements to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports processing disbursements through any of the specified networks; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining whether the user can make payments or disbursements

- [canMakePayments()](canmakepayments%28%29.md): Returns whether the user can make payments.
- [canMakePayments(usingNetworks:)](canmakepayments%28usingnetworks_%29.md): Returns whether the user can make payments through the specified network.
- [canMakePayments(usingNetworks:capabilities:)](canmakepayments%28usingnetworks_capabilities_%29.md): Returns whether the user can make payments using a card from the specified network with the specified capabilities.
- [supportsDisbursements()](supportsdisbursements%28%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests.
- [supportsDisbursements(using:capabilities:)](supportsdisbursements%28using_capabilities_%29.md): Returns a Boolean value indicating whether this device can process disbursement requests using the specified payment network brands and capabilities.

# supportsDisbursementsUsingNetworks: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment network brands.

## Declaration

```objectivec
+ (BOOL) supportsDisbursementsUsingNetworks:(NSArray<NSString *> *) supportedNetworks;
```

## Parameters

- `supportedNetworks`: An array of `PKPaymentNetwork` elements to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports processing disbursements through any of the specified networks; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining whether the user can make payments or disbursements

- [canMakePayments](canmakepayments%28%29.md): Returns whether the user can make payments.
- [canMakePaymentsUsingNetworks:](canmakepayments%28usingnetworks_%29.md): Returns whether the user can make payments through the specified network.
- [canMakePaymentsUsingNetworks:capabilities:](canmakepayments%28usingnetworks_capabilities_%29.md): Returns whether the user can make payments using a card from the specified network with the specified capabilities.
- [supportsDisbursements](supportsdisbursements%28%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests.
- [supportsDisbursementsUsingNetworks:capabilities:](supportsdisbursements%28using_capabilities_%29.md): Returns a Boolean value indicating whether this device can process disbursement requests using the specified payment network brands and capabilities.
