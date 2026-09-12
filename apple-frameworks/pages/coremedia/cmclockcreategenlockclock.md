> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclockcreategenlockclock](https://developer.apple.com/documentation/coremedia/cmclockcreategenlockclock)

# CMClockCreateGenlockClock

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Returns a clock whose time is based on genlock when the system is synchronized to an external genlock signal, and on host time otherwise.

## Declaration

```objectivec
extern CMClockRefCMClockCreateGenlockClock();
```

<a id="discussion"></a>

## Discussion

When the system is not synchronized to an external genlock signal, the returned clock will provide a time based on the host time clock. When the system is synchronized to an external genlock signal, the returned clock will provide a time based on the genlock signal. Use `CMIsAnyDisplaySynchronizedToLockedGenlockSignal` to determine whether the system is currently synchronized to an external genlock signal. The caller is responsible for releasing the returned clock when it is no longer needed. While the clock object persists, system energy use may be elevated (to monitor the genlock signal). When a genlock clock is already in use, further calls to this function may return the same clock object.
