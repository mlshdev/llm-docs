> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1574289-setthreadstateendcritical

# SetThreadStateEndCritical

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
OSErr SetThreadStateEndCritical(ThreadID threadToSet, ThreadState newState, ThreadID suggestedThread);
```
