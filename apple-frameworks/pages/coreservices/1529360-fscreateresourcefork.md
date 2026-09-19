> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1529360-fscreateresourcefork

# FSCreateResourceFork

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSCreateResourceFork(const FSRef *ref, UniCharCount forkNameLength, const UniChar *forkName, UInt32 flags);
```
