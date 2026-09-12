> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565302-fsunlockrange](https://developer.apple.com/documentation/coreservices/1565302-fsunlockrange)

# FSUnlockRange

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus FSUnlockRange(FSIORefNum forkRefNum, UInt16 positionMode, SInt64 positionOffset, UInt64 requestCount, UInt64 *rangeStart);
```
