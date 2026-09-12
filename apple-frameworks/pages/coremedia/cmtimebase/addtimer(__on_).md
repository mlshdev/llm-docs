> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebase/addtimer(_:on:)](https://developer.apple.com/documentation/coremedia/cmtimebase/addtimer(_:on:))

# addTimer(\_:on:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds the timer to the list of timers the timebase manages.

## Declaration

```swift
func addTimer(_ timer: Timer, on runloop: RunLoop) throws
```

## See Also

### Adding and Removing Timers

- [addTimer(\_:)](addtimer%28__%29.md): Adds the timer dispatch source to the list of timers the timebase manages.
- [removeTimer(\_:)](removetimer%28__%29-4f6re.md): Removes the timer from the list of timers the timebase manages.
- [removeTimer(\_:)](removetimer%28__%29-448o2.md): Removes the timer dispatch source from the list of timers the timebase manages.
