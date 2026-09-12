> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1442122-iodtresolveaddressing](https://developer.apple.com/documentation/kernel/1442122-iodtresolveaddressing)

# IODTResolveAddressing

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
OSArray * IODTResolveAddressing(IORegistryEntry *regEntry, const char *addressPropertyName, IODeviceMemory *parent);
```

## See Also

### Registry Utilities

- [IODTCompareNubName](1442126-iodtcomparenubname.md)
- [IODTFindMatchingEntries](1442113-iodtfindmatchingentries.md)
- [IODTFindSlotName](1442138-iodtfindslotname.md)
- [IODTGetCellCounts](1442140-iodtgetcellcounts.md)
- [IODTInterruptControllerName](1442136-iodtinterruptcontrollername.md)
- [IODTMakeNVDescriptor](1442146-iodtmakenvdescriptor.md)
- [IODTMatchNubWithKeys](1442144-iodtmatchnubwithkeys.md)
- [IODTResolveAddressCell](1442103-iodtresolveaddresscell.md)
- [IODTSetResolving](1442142-iodtsetresolving.md)
- [IODTGetInterruptOptions](1442172-iodtgetinterruptoptions.md)
- [IODTMapInterrupts](1442130-iodtmapinterrupts.md)
