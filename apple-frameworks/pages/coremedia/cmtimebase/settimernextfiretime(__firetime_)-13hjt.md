> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebase/settimernextfiretime(_:firetime:)-13hjt](https://developer.apple.com/documentation/coremedia/cmtimebase/settimernextfiretime(_:firetime:)-13hjt)

# setTimerNextFireTime(\_:fireTime:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the time on the timebase’s timeline at which the timer should fire next.

## Declaration

```swift
func setTimerNextFireTime(_ timer: Timer, fireTime: CMTime) throws
```

## See Also

### Setting Timers

- [setTimerNextFireTime(\_:fireTime:)](settimernextfiretime%28__firetime_%29-2yvaa.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.
- [setTimerToFireImmediately(\_:)](settimertofireimmediately%28__%29-9t3wi.md): Sets the timer to fire immediately once, overriding any previous calls.
- [setTimerToFireImmediately(\_:)](settimertofireimmediately%28__%29-4903g.md): Sets the timer dispatch source to fire immediately once, overriding any previous calls.
