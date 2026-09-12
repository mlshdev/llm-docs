> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosvirtualmachinestartoptions/setguestprovisioning(_:)](https://developer.apple.com/documentation/virtualization/vzmacosvirtualmachinestartoptions/setguestprovisioning(_:))

# setGuestProvisioning(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Sets guest provisioning options with validation.

## Declaration

```swift
func setGuestProvisioning(_ guestProvisioningOptions: VZMacGuestProvisioningOptions?) throws
```

## Parameters

- `guestProvisioningOptions`: The guest provisioning options to set, or `nil` to remove.

<a id="discussion"></a>

## Discussion

This method validates the provisioning options before setting them. If validation fails, the current options remain unchanged.

## See Also

### Related Documentation

- [VZMacGuestProvisioningOptions](../vzmacguestprovisioningoptions.md): The configuration for guest setup during macOS virtual machine startup.

# setGuestProvisioningOptions:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Sets guest provisioning options with validation.

## Declaration

```objectivec
- (BOOL) setGuestProvisioningOptions:(VZMacGuestProvisioningOptions *) guestProvisioningOptions error:(NSError **) error;
```

## Parameters

- `guestProvisioningOptions`: The guest provisioning options to set, or `nil` to remove.
- `error`: On input, a pointer to an error object. If an error occurs, the framework sets this pointer to an actual error object containing the error.

<a id="return-value"></a>

## Return Value

`YES` if the options were set successfully (or `nil` was passed), `NO` if validation failed.

<a id="discussion"></a>

## Discussion

This method validates the provisioning options before setting them. If validation fails, the current options remain unchanged.

## See Also

### Related Documentation

- [VZMacGuestProvisioningOptions](../vzmacguestprovisioningoptions.md): The configuration for guest setup during macOS virtual machine startup.
