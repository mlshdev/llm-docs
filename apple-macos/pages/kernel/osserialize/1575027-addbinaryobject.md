> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osserialize/1575027-addbinaryobject

# addBinaryObject

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
bool addBinaryObject(const OSMetaClassBase *o, uint32_t key, const void *_bits, uint32_t size, uint32_t *startCollection);
```
