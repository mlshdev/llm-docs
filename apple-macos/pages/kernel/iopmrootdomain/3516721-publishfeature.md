> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopmrootdomain/3516721-publishfeature

# publishFeature

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
void publishFeature(const char *feature, uint32_t supportedWhere, uint32_t *uniqueFeatureID);
```
