> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iomemorydescriptor/3142952-setownership

# setOwnership

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Set the task that owns the descriptor’s memory.

## Declaration

```objectivec
IOReturn setOwnership(task_t newOwner, int newLedgerTag, IOOptionBits newLedgerOptions);
```

## See Also

### Configuring the Descriptor

- [setPurgeable](1812865-setpurgeable.md): Control the purgeable status of a memory descriptors memory.
- [setPurgeable](1442065-setpurgeable.md): Control the purgeable status of a memory descriptors memory.
