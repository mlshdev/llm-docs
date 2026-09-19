> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1560166-data_transfer_commands

# Data Transfer Commands

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Specify commands for caller-supplied ColorSync data transfer functions.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [cmOpenReadSpool](1560166-data_transfer_commands/cmopenreadspool.md): Directs the function to begin the process of reading data.
- [cmOpenWriteSpool](1560166-data_transfer_commands/cmopenwritespool.md): Directs the function to begin the process of writing data.
- [cmReadSpool](1560166-data_transfer_commands/cmreadspool.md): Directs the function to read the number of bytes specified by the `CMFlattenProcPtr` function’s `size` parameter.
- [cmWriteSpool](1560166-data_transfer_commands/cmwritespool.md): Directs the function to write the number of bytes specified by the `CMFlattenProcPtr` function’s `size` parameter.
- [cmCloseSpool](1560166-data_transfer_commands/cmclosespool.md): Directs the function to complete the data transfer.
