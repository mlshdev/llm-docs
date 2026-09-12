> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pg_pci_vendor_id](https://developer.apple.com/documentation/paravirtualizedgraphics/pg_pci_vendor_id)

# PG_PCI_VENDOR_ID (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The vendor identifier to use when advertising the graphics stack inside a virtual machine.

## Declaration

```swift
var PG_PCI_VENDOR_ID: Int32 { get }
```

## See Also

### PCI Device Characteristics

- [PG_PCI_DEVICE_ID](pg_pci_device_id.md): The PCI device identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_BAR_MMIO](pg_pci_bar_mmio.md): The base address register to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_MAX_MSI_VECTORS](pg_pci_max_msi_vectors.md): The number of MSI vectors that you need to allocate for the graphics configuration.
- [PGCopyOptionROMURL()](pgcopyoptionromurl%28%29.md): Deprecated. Copies the URL of the ROM image to use on the guest graphics device.

# PG_PCI_VENDOR_ID (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Macro  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The vendor identifier to use when advertising the graphics stack inside a virtual machine.

## Declaration

```objectivec
#define PG_PCI_VENDOR_ID
```

## See Also

### PCI Device Characteristics

- [PG_PCI_DEVICE_ID](pg_pci_device_id.md): The PCI device identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_BAR_MMIO](pg_pci_bar_mmio.md): The base address register to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_MAX_MSI_VECTORS](pg_pci_max_msi_vectors.md): The number of MSI vectors that you need to allocate for the graphics configuration.
- [PGCopyOptionROMURL](pgcopyoptionromurl%28%29.md): Deprecated. Copies the URL of the ROM image to use on the guest graphics device.
