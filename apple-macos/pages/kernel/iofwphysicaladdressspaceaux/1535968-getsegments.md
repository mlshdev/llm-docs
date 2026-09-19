> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofwphysicaladdressspaceaux/1535968-getsegments

# getSegments

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn getSegments(UInt64 *offset, FWSegment *fw_segments, UInt32 *num_segments);
```
