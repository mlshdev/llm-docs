> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontroller/canmakepayments()](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller/canmakepayments())

# canMakePayments() (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Returns whether the user can make payments.

## Declaration

```swift
class func canMakePayments() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports making payments; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

User may not be able to make payments for a variety of reasons. For example, this functionality may not be supported by their hardware, or it may be restricted by parental controls.

On devices that support making payments but don’t have any payment cards configured, the [present(completion:)](present%28completion_%29.md) method returns [true](https://developer.apple.com/documentation/swift/true) because the hardware and parental controls allow making payments, but the [canMakePayments(usingNetworks:)](canmakepayments%28usingnetworks_%29.md) method returns [false](https://developer.apple.com/documentation/swift/false) regardless of network.

## See Also

### Determining whether the user can make payments or disbursements

- [canMakePayments(usingNetworks:)](canmakepayments%28usingnetworks_%29.md): Returns whether the user can make payments through the specified network.
- [canMakePayments(usingNetworks:capabilities:)](canmakepayments%28usingnetworks_capabilities_%29.md): Returns whether the user can make payments using a card from the specified network with the specified capabilities.
- [supportsDisbursements()](supportsdisbursements%28%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests.
- [supportsDisbursements(using:)](supportsdisbursements%28using_%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment network brands.
- [supportsDisbursements(using:capabilities:)](supportsdisbursements%28using_capabilities_%29.md): Returns a Boolean value indicating whether this device can process disbursement requests using the specified payment network brands and capabilities.

# canMakePayments (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Returns whether the user can make payments.

## Declaration

```objectivec
+ (BOOL) canMakePayments;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports making payments; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

User may not be able to make payments for a variety of reasons. For example, this functionality may not be supported by their hardware, or it may be restricted by parental controls.

On devices that support making payments but don’t have any payment cards configured, the [presentWithCompletion:](present%28completion_%29.md) method returns [true](https://developer.apple.com/documentation/swift/true) because the hardware and parental controls allow making payments, but the [canMakePaymentsUsingNetworks:](canmakepayments%28usingnetworks_%29.md) method returns [false](https://developer.apple.com/documentation/swift/false) regardless of network.

## See Also

### Determining whether the user can make payments or disbursements

- [canMakePaymentsUsingNetworks:](canmakepayments%28usingnetworks_%29.md): Returns whether the user can make payments through the specified network.
- [canMakePaymentsUsingNetworks:capabilities:](canmakepayments%28usingnetworks_capabilities_%29.md): Returns whether the user can make payments using a card from the specified network with the specified capabilities.
- [supportsDisbursements](supportsdisbursements%28%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests.
- [supportsDisbursementsUsingNetworks:](supportsdisbursements%28using_%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment network brands.
- [supportsDisbursementsUsingNetworks:capabilities:](supportsdisbursements%28using_capabilities_%29.md): Returns a Boolean value indicating whether this device can process disbursement requests using the specified payment network brands and capabilities.
