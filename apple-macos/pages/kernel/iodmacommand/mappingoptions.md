> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/mappingoptions](https://developer.apple.com/documentation/kernel/iodmacommand/mappingoptions)

# MappingOptions

**Interface language:** Objective-C

**Framework:** Kernel

Mapping types to indicate the desired mapper type for translating memory descriptors into I/O DMA Bus addresses.

## Declaration

```objectivec
enum MappingOptions {
   kMapped = 0x00000000,
   kBypassed = 0x00000001,
   kNonCoherent = 0x00000002,
   kTypeMask = 0x0000000f,
   kNoCacheStore = 0x00000010, // Memory in descriptor
   kOnChip = 0x00000020, // Indicates DMA is on South Bridge
   kIterateOnly = 0x00000040 // DMACommand will be used as a cursor only
};
```

## Topics

### Constants

- [kNonCoherent](mappingoptions/knoncoherent.md)
- [kMapped](mappingoptions/kmapped.md)
- [kBypassed](mappingoptions/kbypassed.md)
- [kMaxMappingOptions](mappingoptions/kmaxmappingoptions.md)

## See Also

### Creating a DMA Command

- [withSpecification](1811330-withspecification.md): Creates and initializes a DMA command in one operation.
- [withSpecification](1547758-withspecification.md): Creates and initializes an DMA command in one operation.
- [withSpecification](3516452-withspecification.md): Creates and initializes an DMA command in one operation.
- [initWithSpecification](1811207-initwithspecification.md): Primary initializer for the DMA command object.
- [initWithSpecification](1547748-initwithspecification.md): Primary initializer for the DMA command object.
- [initWithSpecification](3516450-initwithspecification.md): Primary initializer for the DMA command object.
- [weakWithSpecification](1811323-weakwithspecification.md): Creates and initializes an DMA command object in one operation if this version of the operating system supports it.
- [withRefCon](1547747-withrefcon.md)
- [initWithRefCon](1547754-initwithrefcon.md)
- [cloneCommand](1811059-clonecommand.md): Creates a new command based on the specification of the current one.
- [cloneCommand](1547732-clonecommand.md): Creates a new command based on the specification of the current one.
- [init](https://developer.apple.com/documentation/driverkit/iodmacommand/init)
- [free](1547725-free.md)
- [SynchronizeOptions](synchronizeoptions.md): Options for the synchronize method.
