> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosvirtualmachinestartoptions/guestprovisioningoptions](https://developer.apple.com/documentation/virtualization/vzmacosvirtualmachinestartoptions/guestprovisioningoptions)

# guestProvisioningOptions (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A value that controls provisioning a macOS guest.

## Declaration

```swift
@NSCopying var guestProvisioningOptions: VZMacGuestProvisioningOptions? { get }
```

<a id="discussion"></a>

## Discussion

This property allows someone to provision a macOS guest by setting [VZMacGuestProvisioningOptions](../vzmacguestprovisioningoptions.md).

# guestProvisioningOptions (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A value that controls provisioning a macOS guest.

## Declaration

```objectivec
@property (copy, readonly, nullable) VZMacGuestProvisioningOptions * guestProvisioningOptions;
```

<a id="discussion"></a>

## Discussion

This property allows someone to provision a macOS guest by setting [VZMacGuestProvisioningOptions](../vzmacguestprovisioningoptions.md).
