> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevicedescriptor/raiseinterrupt](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevicedescriptor/raiseinterrupt)

# raiseInterrupt (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A handler that the system calls to raise an interrupt in the guest environment.

## Declaration

```swift
var raiseInterrupt: PGRaiseInterrupt? { get set }
```

## See Also

### Handling Interrupts

- [PGRaiseInterrupt](../pgraiseinterrupt.md): The block signature for a routine that raises interrupts in the guest environment.

# raiseInterrupt (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A handler that the system calls to raise an interrupt in the guest environment.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) PGRaiseInterrupt raiseInterrupt;
```

## See Also

### Handling Interrupts

- [PGRaiseInterrupt](../pgraiseinterrupt.md): The block signature for a routine that raises interrupts in the guest environment.
