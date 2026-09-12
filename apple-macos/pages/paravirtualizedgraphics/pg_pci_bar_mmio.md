> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pg_pci_bar_mmio](https://developer.apple.com/documentation/paravirtualizedgraphics/pg_pci_bar_mmio)

# PG_PCI_BAR_MMIO (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The base address register to use when advertising the graphics stack inside a virtual machine.

## Declaration

```swift
var PG_PCI_BAR_MMIO: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Specify the following characteristics for the memory that this base address register references:

- Allocate 16 kilobytes of memory.
- Place MSI interrupt vectors between offsets `0x0000` and `0x0FFF` of this memory block.
- Place MMIO mapped registers starting at offset `0x1000`.

When you see a read or write access to this memory region, call [mmioRead(atOffset:)](pgdevice/mmioread%28atoffset_%29.md) or [mmioWrite(atOffset:value:)](pgdevice/mmiowrite%28atoffset_value_%29.md) on the host device. The framework aligns reads and writes to addresses that are multiples of `4` bytes with a length of `4` bytes.

## See Also

### PCI Device Characteristics

- [PG_PCI_DEVICE_ID](pg_pci_device_id.md): The PCI device identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_VENDOR_ID](pg_pci_vendor_id.md): The vendor identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_MAX_MSI_VECTORS](pg_pci_max_msi_vectors.md): The number of MSI vectors that you need to allocate for the graphics configuration.
- [PGCopyOptionROMURL()](pgcopyoptionromurl%28%29.md): Deprecated. Copies the URL of the ROM image to use on the guest graphics device.

# PG_PCI_BAR_MMIO (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Macro  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The base address register to use when advertising the graphics stack inside a virtual machine.

## Declaration

```objectivec
#define PG_PCI_BAR_MMIO
```

<a id="Discussion"></a>

## Discussion

Specify the following characteristics for the memory that this base address register references:

- Allocate 16 kilobytes of memory.
- Place MSI interrupt vectors between offsets `0x0000` and `0x0FFF` of this memory block.
- Place MMIO mapped registers starting at offset `0x1000`.

When you see a read or write access to this memory region, call [mmioReadAtOffset:](pgdevice/mmioread%28atoffset_%29.md) or [mmioWriteAtOffset:value:](pgdevice/mmiowrite%28atoffset_value_%29.md) on the host device. The framework aligns reads and writes to addresses that are multiples of `4` bytes with a length of `4` bytes.

## See Also

### PCI Device Characteristics

- [PG_PCI_DEVICE_ID](pg_pci_device_id.md): The PCI device identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_VENDOR_ID](pg_pci_vendor_id.md): The vendor identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_MAX_MSI_VECTORS](pg_pci_max_msi_vectors.md): The number of MSI vectors that you need to allocate for the graphics configuration.
- [PGCopyOptionROMURL](pgcopyoptionromurl%28%29.md): Deprecated. Copies the URL of the ROM image to use on the guest graphics device.
