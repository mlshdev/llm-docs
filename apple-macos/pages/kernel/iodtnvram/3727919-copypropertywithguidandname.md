> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodtnvram/3727919-copypropertywithguidandname

# copyPropertyWithGUIDAndName

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.3+

## Declaration

```objectivec
OSSharedPtr<OSObject> copyPropertyWithGUIDAndName(const uuid_t guid, const char *name);
```
