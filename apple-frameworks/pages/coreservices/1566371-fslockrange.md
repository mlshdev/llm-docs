> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1566371-fslockrange

# FSLockRange

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus FSLockRange(FSIORefNum forkRefNum, UInt16 positionMode, SInt64 positionOffset, UInt64 requestCount, UInt64 *rangeStart);
```
