> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nszombieenabled](https://developer.apple.com/documentation/foundation/nszombieenabled)

# NSZombieEnabled

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A global variable related to zombie objects that in practice has no effect.

## Declaration

```objectivec
extern BOOL NSZombieEnabled;
```

## See Also

### Diagnostics and Debugging

- [NSLog](nslog.md): Logs an error message to the Apple System Log facility.
- [NSLogv](nslogv%28____%29.md): Logs an error message to the Apple System Log facility.
- [NSDeallocateZombies](nsdeallocatezombies.md): A global variable that determines whether or not the memory of zombie objects is deallocated.
- [NSDebugEnabled](nsdebugenabled.md): A global variable that can be used to enable debug behavior in your app, such as extra logging.
- [NSKeepAllocationStatistics](nskeepallocationstatistics.md): A no-longer-used global variable related to keeping statistics.
