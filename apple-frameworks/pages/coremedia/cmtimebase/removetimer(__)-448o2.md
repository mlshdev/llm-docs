> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebase/removetimer(_:)-448o2](https://developer.apple.com/documentation/coremedia/cmtimebase/removetimer(_:)-448o2)

# removeTimer(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Removes the timer dispatch source from the list of timers the timebase manages.

## Declaration

```swift
func removeTimer<T>(_ timer: T) throws where T : DispatchSourceTimer
```

## See Also

### Adding and Removing Timers

- [addTimer(\_:on:)](addtimer%28__on_%29.md): Adds the timer to the list of timers the timebase manages.
- [addTimer(\_:)](addtimer%28__%29.md): Adds the timer dispatch source to the list of timers the timebase manages.
- [removeTimer(\_:)](removetimer%28__%29-4f6re.md): Removes the timer from the list of timers the timebase manages.
