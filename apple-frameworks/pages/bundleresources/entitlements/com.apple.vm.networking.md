> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking)

# com.apple.vm.networking

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.10+

A Boolean that indicates whether the app manages virtual network interfaces without escalating privileges to the root user.

## Details

`com.apple.vm.networking`

<a id="Discussion"></a>

## Discussion

The entitlement is required to use the [vmnet](https://developer.apple.com/documentation/vmnet) APIs.

> **Note**

>  This entitlement is restricted to developers of virtualization software. To request this entitlement, contact your Apple representative.

## See Also

### Hypervisor

- [com.apple.security.hypervisor](com.apple.security.hypervisor.md): A Boolean value that indicates whether the app creates and manages virtual machines.
- [com.apple.vm.hypervisor](com.apple.vm.hypervisor.md): Deprecated. A Boolean value that indicates whether the app creates and manages virtual machines.
- [com.apple.vm.device-access](com.apple.vm.device-access.md): A Boolean value that indicates whether the app captures USB devices and uses them in the guest-operating system.
- [com.apple.security.virtualization](com.apple.security.virtualization.md): A Boolean value that indicates whether your app can use the Virtualization framework.
