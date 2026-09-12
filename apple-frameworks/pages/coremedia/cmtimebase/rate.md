> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebase/rate](https://developer.apple.com/documentation/coremedia/cmtimebase/rate)

# rate

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The current rate relative to its immediate primary clock or timebase.

## Declaration

```swift
var rate: Double { get }
```

## See Also

### Inspecting Timebases

- [time](time.md): The current time.
- [source](source.md): The immediate source that represents the clock or timebase.
- [sourceClock](sourceclock.md): Returns the immediate source clock, if any.
- [sourceTimebase](sourcetimebase.md): Returns the immediate source timebase, if any.
- [effectiveRate](effectiverate.md): The effective rate that combines its rate with the rates of all its primary timebases.
- [timeAndRate](timeandrate.md): Returns the current time and rate.
- [ultimateSourceClock](ultimatesourceclock.md): Returns the source clock that’s the source of all the other source timebases.
