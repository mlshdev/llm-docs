> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsdeallocatezombies

# NSDeallocateZombies

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A global variable that determines whether or not the memory of zombie objects is deallocated.

## Declaration

```objectivec
extern BOOL NSDeallocateZombies;
```

## See Also

### Diagnostics and Debugging

- [NSLog](nslog.md): Logs an error message to the Apple System Log facility.
- [NSLogv](nslogv%28____%29.md): Logs an error message to the Apple System Log facility.
- [NSDebugEnabled](nsdebugenabled.md): A global variable that can be used to enable debug behavior in your app, such as extra logging.
- [NSZombieEnabled](nszombieenabled.md): A global variable related to zombie objects that in practice has no effect.
- [NSKeepAllocationStatistics](nskeepallocationstatistics.md): A no-longer-used global variable related to keeping statistics.
