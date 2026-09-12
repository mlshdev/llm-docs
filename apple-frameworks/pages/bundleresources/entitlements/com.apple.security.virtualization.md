> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.virtualization](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.virtualization)

# com.apple.security.virtualization (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 11.0+

A Boolean value that indicates whether your app can use the Virtualization framework.

## Details

`com.apple.security.virtualization`

<a id="Discussion"></a>

## Discussion

You can read the `VZVirtualMachine` property [isSupported](https://developer.apple.com/documentation/virtualization/vzmachardwaremodel/issupported) to check for the availability of virtualization on the system. Calling [validate()](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/validate%28%29) checks for the availability of the entitlement the framework requires to run guest OSes.

## See Also

### Hypervisor

- [com.apple.security.hypervisor](com.apple.security.hypervisor.md): A Boolean value that indicates whether the app creates and manages virtual machines.
- [com.apple.vm.hypervisor](com.apple.vm.hypervisor.md): Deprecated. A Boolean value that indicates whether the app creates and manages virtual machines.
- [com.apple.vm.device-access](com.apple.vm.device-access.md): A Boolean value that indicates whether the app captures USB devices and uses them in the guest-operating system.
- [com.apple.vm.networking](com.apple.vm.networking.md): A Boolean that indicates whether the app manages virtual network interfaces without escalating privileges to the root user.

# com.apple.security.virtualization (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 11.0+

A Boolean value that indicates whether your app can use the Virtualization framework.

## Details

`com.apple.security.virtualization`

<a id="Discussion"></a>

## Discussion

You can read the `VZVirtualMachine` property [supported](https://developer.apple.com/documentation/virtualization/vzmachardwaremodel/issupported) to check for the availability of virtualization on the system. Calling [validateWithError:](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/validate%28%29) checks for the availability of the entitlement the framework requires to run guest OSes.

## See Also

### Hypervisor

- [com.apple.security.hypervisor](com.apple.security.hypervisor.md): A Boolean value that indicates whether the app creates and manages virtual machines.
- [com.apple.vm.hypervisor](com.apple.vm.hypervisor.md): Deprecated. A Boolean value that indicates whether the app creates and manages virtual machines.
- [com.apple.vm.device-access](com.apple.vm.device-access.md): A Boolean value that indicates whether the app captures USB devices and uses them in the guest-operating system.
- [com.apple.vm.networking](com.apple.vm.networking.md): A Boolean that indicates whether the app manages virtual network interfaces without escalating privileges to the root user.
