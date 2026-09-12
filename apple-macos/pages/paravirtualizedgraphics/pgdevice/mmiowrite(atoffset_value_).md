> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevice/mmiowrite(atoffset:value:)](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevice/mmiowrite(atoffset:value:))

# mmioWrite(atOffset:value:) (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Writes data to the virtual graphics device’s memory-mapped I/O region.

## Declaration

```swift
func mmioWrite(atOffset offset: Int, value: UInt32)
```

## Parameters

- `offset`: The offset into the MMIO bar to write to.
- `value`: The value to write to memory.

<a id="Discussion"></a>

## Discussion

Call this method whenever the guest virtual machine writes to the graphics device’s memory-mapped I/O region.

## See Also

### Handling Memory-Mapped I/O

- [mmioRead(atOffset:)](mmioread%28atoffset_%29.md): Reads data from the virtual graphics device’s memory-mapped I/O region.

# mmioWriteAtOffset:value: (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Writes data to the virtual graphics device’s memory-mapped I/O region.

## Declaration

```objectivec
- (void) mmioWriteAtOffset:(size_t) offset value:(uint32_t) value;
```

## Parameters

- `offset`: The offset into the MMIO bar to write to.
- `value`: The value to write to memory.

<a id="Discussion"></a>

## Discussion

Call this method whenever the guest virtual machine writes to the graphics device’s memory-mapped I/O region.

## See Also

### Handling Memory-Mapped I/O

- [mmioReadAtOffset:](mmioread%28atoffset_%29.md): Reads data from the virtual graphics device’s memory-mapped I/O region.
