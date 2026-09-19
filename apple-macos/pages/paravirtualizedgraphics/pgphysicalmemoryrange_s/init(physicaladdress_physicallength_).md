> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paravirtualizedgraphics/pgphysicalmemoryrange_s/init(physicaladdress:physicallength:)

# init(physicalAddress:physicalLength:)

**Framework:** Paravirtualized Graphics  
**Kind:** Initializer  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Creates a memory range.

## Declaration

```swift
init(physicalAddress: UInt64, physicalLength: UInt64)
```

## Parameters

- `physicalAddress`: The starting address of the range in physical memory.
- `physicalLength`: The length of the range.

## See Also

### Creating a Memory Range

- [init()](init%28%29.md): Creates a default memory range.
