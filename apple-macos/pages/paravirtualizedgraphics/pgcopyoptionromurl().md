> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgcopyoptionromurl()](https://developer.apple.com/documentation/paravirtualizedgraphics/pgcopyoptionromurl())

# PGCopyOptionROMURL() (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+ (deprecated in 27.0)

Copies the URL of the ROM image to use on the guest graphics device.

## Declaration

```swift
func PGCopyOptionROMURL() -> URL
```

<a id="return-value"></a>

## Return Value

The URL of the ROM file to load.

<a id="Discussion"></a>

## Discussion

The URL points to a local file of a flat ROM image. After loading the file, pad the data size to a power of two and fill the extra bytes with zeroes. Map the resulting data into the guest, setting the PCI ROM base address register to point to the data.

## See Also

### PCI Device Characteristics

- [PG_PCI_DEVICE_ID](pg_pci_device_id.md): The PCI device identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_VENDOR_ID](pg_pci_vendor_id.md): The vendor identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_BAR_MMIO](pg_pci_bar_mmio.md): The base address register to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_MAX_MSI_VECTORS](pg_pci_max_msi_vectors.md): The number of MSI vectors that you need to allocate for the graphics configuration.

# PGCopyOptionROMURL (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+ (deprecated in 27.0)

Copies the URL of the ROM image to use on the guest graphics device.

## Declaration

```objectivec
extern NSURL *PGCopyOptionROMURL();
```

<a id="return-value"></a>

## Return Value

The URL of the ROM file to load.

<a id="Discussion"></a>

## Discussion

The URL points to a local file of a flat ROM image. After loading the file, pad the data size to a power of two and fill the extra bytes with zeroes. Map the resulting data into the guest, setting the PCI ROM base address register to point to the data.

## See Also

### PCI Device Characteristics

- [PG_PCI_DEVICE_ID](pg_pci_device_id.md): The PCI device identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_VENDOR_ID](pg_pci_vendor_id.md): The vendor identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_BAR_MMIO](pg_pci_bar_mmio.md): The base address register to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_MAX_MSI_VECTORS](pg_pci_max_msi_vectors.md): The number of MSI vectors that you need to allocate for the graphics configuration.
