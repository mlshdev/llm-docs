> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksecureelementpass/isprovisioningavailable](https://developer.apple.com/documentation/passkit/pksecureelementpass/isprovisioningavailable)

# isProvisioningAvailable (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A Boolean value indicating whether provisioning is available for this pass.

## Declaration

```swift
var isProvisioningAvailable: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property is YES when the pass is in a pre-provisioned state and the issuer app can guide the user to complete provisioning. Check this property when passActivationState returns PKSecureElementPassActivationStateDeactivated to determine if provisioning is available.

# provisioningAvailable (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A Boolean value indicating whether provisioning is available for this pass.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isProvisioningAvailable) BOOL provisioningAvailable;
```

<a id="discussion"></a>

## Discussion

This property is YES when the pass is in a pre-provisioned state and the issuer app can guide the user to complete provisioning. Check this property when passActivationState returns PKSecureElementPassActivationStateDeactivated to determine if provisioning is available.
