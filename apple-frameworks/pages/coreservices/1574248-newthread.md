> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1574248-newthread](https://developer.apple.com/documentation/coreservices/1574248-newthread)

# NewThread

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
OSErr NewThread(ThreadStyle threadStyle, ThreadEntryTPP threadEntry, void *threadParam, Size stackSize, ThreadOptions options, void **threadResult, ThreadID *threadMade);
```
