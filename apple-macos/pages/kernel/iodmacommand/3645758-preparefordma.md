> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/3645758-preparefordma](https://developer.apple.com/documentation/kernel/iodmacommand/3645758-preparefordma)

# PrepareForDMA

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
kern_return_t PrepareForDMA(uint64_t options, IOMemoryDescriptor *memory, uint64_t offset, uint64_t length, uint64_t *flags, uint32_t *segmentsCount, IOAddressSegment *segments, OSDispatchMethod supermethod);
```

## See Also

### Callbacks

- [CompleteDMA_Invoke](3645747-completedma_invoke.md)
- [Create](3645748-create.md)
- [Create_Impl](3645749-create_impl.md)
- [Create_Invoke](3645750-create_invoke.md)
- [GetPreparation_Invoke](3645754-getpreparation_invoke.md)
- [PerformOperation_Invoke](3645757-performoperation_invoke.md)
- [PrepareForDMA_Invoke](3645760-preparefordma_invoke.md)
- [CompleteDMA](3645745-completedma.md)
- [CompleteDMA](https://developer.apple.com/documentation/driverkit/iodmacommand/completedma)
- [CompleteDMA_Impl](3645746-completedma_impl.md)
- [GetPreparation](3645752-getpreparation.md)
- [GetPreparation](https://developer.apple.com/documentation/driverkit/iodmacommand/getpreparation)
- [GetPreparation_Impl](3645753-getpreparation_impl.md)
- [PerformOperation](3645755-performoperation.md)
- [PerformOperation](https://developer.apple.com/documentation/driverkit/iodmacommand/performoperation)
- [PerformOperation_Impl](3645756-performoperation_impl.md)
- [PrepareForDMA](https://developer.apple.com/documentation/driverkit/iodmacommand/preparefordma)
- [PrepareForDMA_Impl](3645759-preparefordma_impl.md)
