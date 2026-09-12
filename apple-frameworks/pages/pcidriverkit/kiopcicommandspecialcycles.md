> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pcidriverkit/kiopcicommandspecialcycles](https://developer.apple.com/documentation/pcidriverkit/kiopcicommandspecialcycles)

# kIOPCICommandSpecialCycles

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit · macOS

The bit that enables the legacy special cycle feature.

## Declaration

```objectivec
kIOPCICommandSpecialCycles
```

## See Also

### Bits

- [kIOPCICommandIOSpace](kiopcicommandiospace.md): The bit that indicates whether the device allows access to I/O space.
- [kIOPCICommandMemorySpace](kiopcicommandmemoryspace.md): The bit that indicates whether the device allows access to memory space.
- [kIOPCICommandBusMaster](kiopcicommandbusmaster.md): The bit that controls the ability to issue or forward memory and I/O requests.
- [kIOPCICommandMemWrInvalidate](kiopcicommandmemwrinvalidate.md): The bit that enables legacy memory writing and invalidation.
- [kIOPCICommandPaletteSnoop](kiopcicommandpalettesnoop.md): The bit that enables the legacy palette snooping feature.
- [kIOPCICommandParityError](kiopcicommandparityerror.md): The bit that controls the logging of poisoned transaction-layer packets.
- [kIOPCICommandAddressStepping](kiopcicommandaddressstepping.md): The bit that controls the legacy address stepping and wait cycle feature.
- [kIOPCICommandSERR](kiopcicommandserr.md): The bit that enables the upstream reporting of fatal and non-fatal errors.
- [kIOPCICommandFastBack2Back](kiopcicommandfastback2back.md): The bit that enables legacy fast back-to-back transactions.
- [kIOPCICommandInterruptDisable](kiopcicommandinterruptdisable.md): The bit that prevents the generation of INTx emulation interrupts.
- [kIOPCICommandBusLead](kiopcicommandbuslead.md)
