> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/3516452-withspecification](https://developer.apple.com/documentation/kernel/iodmacommand/3516452-withspecification)

# withSpecification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.2+

Creates and initializes an DMA command in one operation.

## Declaration

```objectivec
static OSPtr<IODMACommand> withSpecification(SegmentFunction outSegFunc, const SegmentOptions *segmentOptions, uint32_t mappingOptions, IOMapper *mapper, void *refCon);
```

## Parameters

- `outSegFunc`: SegmentFunction to call to output one physical segment. A set of nine commonly required segment functions are provided.
- `segmentOptions`: A structure with the segment configuration options.
- `mappingOptions`: The type of mapping that is required to translate an IOMemoryDescriptor into the desired number of bits. For instance if your hardware only supports 32 bits but must run on machines with \> 4G of RAM some mapping will be required. Number of bits will be specified in numAddressBits, see below.This parameter can take 3 values:- kNonCoherent - used for non-coherent hardware transfers, Mapped - Validate that all I/O bus generated addresses are within the number of addressing bits specified, Bypassed indicates that bypassed addressing is required, this is used when the hardware transferes are into coherent memory but no mapping is required. See also prepare() for failure cases.
- `mapper`: For mapping types kMapped & kBypassed mapper is used to define the hardware that will perform the mapping, defaults to the system mapper.
- `refCon`: A reference constant for the object.

<a id="return_value"></a>

## Return Value

Returns a new memory cursor if successfully created and initialized, 0 otherwise.

<a id="discussion"></a>

## Discussion

Factory function to create and initialize an IODMACommand in one operation.

## See Also

### Creating a DMA Command

- [withSpecification](1811330-withspecification.md): Creates and initializes a DMA command in one operation.
- [withSpecification](1547758-withspecification.md): Creates and initializes an DMA command in one operation.
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
- [MappingOptions](mappingoptions.md): Mapping types to indicate the desired mapper type for translating memory descriptors into I/O DMA Bus addresses.
- [SynchronizeOptions](synchronizeoptions.md): Options for the synchronize method.
