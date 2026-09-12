> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/1547759-setspecification](https://developer.apple.com/documentation/kernel/iodmacommand/1547759-setspecification)

# setSpecification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn setSpecification(SegmentFunction outSegFunc, const SegmentOptions *segmentOptions, uint32_t mappingOptions, IOMapper *mapper);
```

## See Also

### Getting Configuration Details

- [getAlignment](1547755-getalignment.md)
- [getAlignmentInternalSegments](1547737-getalignmentinternalsegments.md)
- [getAlignmentLength](1547731-getalignmentlength.md)
- [getMetaClass](1547717-getmetaclass.md)
- [getNumAddressBits](1547735-getnumaddressbits.md)
