> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevice/mmioread(atoffset:)](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevice/mmioread(atoffset:))

# mmioRead(atOffset:) (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Reads data from the virtual graphics device’s memory-mapped I/O region.

## Declaration

```swift
func mmioRead(atOffset offset: Int) -> UInt32
```

## Parameters

- `offset`: The offset into the MMIO bar to write to.

<a id="return-value"></a>

## Return Value

The 32-bit unsigned integer from the MMIO region.

<a id="Discussion"></a>

## Discussion

Call this method whenever the guest virtual machine reads from the graphics device’s memory-mapped I/O region.

## See Also

### Handling Memory-Mapped I/O

- [mmioWrite(atOffset:value:)](mmiowrite%28atoffset_value_%29.md): Writes data to the virtual graphics device’s memory-mapped I/O region.

# mmioReadAtOffset: (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Reads data from the virtual graphics device’s memory-mapped I/O region.

## Declaration

```objectivec
- (uint32_t) mmioReadAtOffset:(size_t) offset;
```

## Parameters

- `offset`: The offset into the MMIO bar to write to.

<a id="return-value"></a>

## Return Value

The 32-bit unsigned integer from the MMIO region.

<a id="Discussion"></a>

## Discussion

Call this method whenever the guest virtual machine reads from the graphics device’s memory-mapped I/O region.

## See Also

### Handling Memory-Mapped I/O

- [mmioWriteAtOffset:value:](mmiowrite%28atoffset_value_%29.md): Writes data to the virtual graphics device’s memory-mapped I/O region.
