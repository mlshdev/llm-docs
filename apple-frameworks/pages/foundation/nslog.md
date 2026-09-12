> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslog](https://developer.apple.com/documentation/foundation/nslog)

# NSLog

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Logs an error message to the Apple System Log facility.

## Declaration

```objectivec
extern void NSLog(NSString *format, ...);
```

<a id="Discussion"></a>

## Discussion

Simply calls [NSLogv](nslogv%28____%29.md), passing it a variable number of arguments.

## See Also

### Diagnostics and Debugging

- [NSLogv](nslogv%28____%29.md): Logs an error message to the Apple System Log facility.
- [NSDeallocateZombies](nsdeallocatezombies.md): A global variable that determines whether or not the memory of zombie objects is deallocated.
- [NSDebugEnabled](nsdebugenabled.md): A global variable that can be used to enable debug behavior in your app, such as extra logging.
- [NSZombieEnabled](nszombieenabled.md): A global variable related to zombie objects that in practice has no effect.
- [NSKeepAllocationStatistics](nskeepallocationstatistics.md): A no-longer-used global variable related to keeping statistics.
