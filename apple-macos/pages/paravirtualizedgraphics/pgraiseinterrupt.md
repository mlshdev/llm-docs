> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paravirtualizedgraphics/pgraiseinterrupt

# PGRaiseInterrupt (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The block signature for a routine that raises interrupts in the guest environment.

## Declaration

```swift
typealias PGRaiseInterrupt = (UInt32) -> Void
```

## Parameters

- `vector  `: The MSI vector to raise the interrupt on.

## See Also

### Handling Interrupts

- [raiseInterrupt](pgdevicedescriptor/raiseinterrupt.md): A handler that the system calls to raise an interrupt in the guest environment.

# PGRaiseInterrupt (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The block signature for a routine that raises interrupts in the guest environment.

## Declaration

```objectivec
typedef void (^)(unsigned int) PGRaiseInterrupt;
```

## Parameters

- `vector  `: The MSI vector to raise the interrupt on.

## See Also

### Handling Interrupts

- [raiseInterrupt](pgdevicedescriptor/raiseinterrupt.md): A handler that the system calls to raise an interrupt in the guest environment.
