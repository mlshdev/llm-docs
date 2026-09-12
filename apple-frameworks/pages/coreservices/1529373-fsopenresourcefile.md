> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1529373-fsopenresourcefile](https://developer.apple.com/documentation/coreservices/1529373-fsopenresourcefile)

# FSOpenResourceFile

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSOpenResourceFile(const FSRef *ref, UniCharCount forkNameLength, const UniChar *forkName, SInt8 permissions, ResFileRefNum *refNum);
```
