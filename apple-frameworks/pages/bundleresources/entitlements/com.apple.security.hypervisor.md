> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.hypervisor](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.hypervisor)

# com.apple.security.hypervisor

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the app creates and manages virtual machines.

## Details

`com.apple.security.hypervisor`

<a id="Discussion"></a>

## Discussion

The entitlement is required to use the Hypervisor APIs in any process.

> **Important**

>  If your app has a deployment target of macOS 10.15 or earlier, add the [com.apple.vm.hypervisor](com.apple.vm.hypervisor.md) entitlement to your app in addition to this entitlement.

## See Also

### Hypervisor

- [com.apple.vm.hypervisor](com.apple.vm.hypervisor.md): Deprecated. A Boolean value that indicates whether the app creates and manages virtual machines.
- [com.apple.vm.device-access](com.apple.vm.device-access.md): A Boolean value that indicates whether the app captures USB devices and uses them in the guest-operating system.
- [com.apple.vm.networking](com.apple.vm.networking.md): A Boolean that indicates whether the app manages virtual network interfaces without escalating privileges to the root user.
- [com.apple.security.virtualization](com.apple.security.virtualization.md): A Boolean value that indicates whether your app can use the Virtualization framework.
