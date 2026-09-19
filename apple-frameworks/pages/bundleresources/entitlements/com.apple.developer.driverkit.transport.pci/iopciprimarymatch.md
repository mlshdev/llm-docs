> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.driverkit.transport.pci/iopciprimarymatch

# IOPCIPrimaryMatch

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15.4+

A key to match PCI devices by vendor and device ID registers.

## Details

`IOPCIPrimaryMatch`

<a id="Discussion"></a>

## Discussion

This value of this key matches the vendor and device ID (`0x00`) register.

## See Also

### Identifying PCI Devices

- [IOPCIMatch](iopcimatch.md): A key to match PCI devices by vendor and device ID registers or subsystem registers.
- [IOPCISecondaryMatch](iopcisecondarymatch.md): A key to match PCI devices by subsystem vendor ID and device ID registers.
- [IOPCIClassMatch](iopciclassmatch.md): A key to match PCI devices by class code register.
