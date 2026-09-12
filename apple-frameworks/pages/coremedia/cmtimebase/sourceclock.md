> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebase/sourceclock](https://developer.apple.com/documentation/coremedia/cmtimebase/sourceclock)

# sourceClock

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the immediate source clock, if any.

## Declaration

```swift
var sourceClock: CMClock? { get }
```

## See Also

### Inspecting Timebases

- [time](time.md): The current time.
- [rate](rate.md): The current rate relative to its immediate primary clock or timebase.
- [source](source.md): The immediate source that represents the clock or timebase.
- [sourceTimebase](sourcetimebase.md): Returns the immediate source timebase, if any.
- [effectiveRate](effectiverate.md): The effective rate that combines its rate with the rates of all its primary timebases.
- [timeAndRate](timeandrate.md): Returns the current time and rate.
- [ultimateSourceClock](ultimatesourceclock.md): Returns the source clock that’s the source of all the other source timebases.
