> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclock/convertsystemunitstohosttime(_:)](https://developer.apple.com/documentation/coremedia/cmclock/convertsystemunitstohosttime(_:))

# convertSystemUnitsToHostTime(\_:)

**Framework:** Core Media  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a host time from native units to a time structure.

## Declaration

```swift
static func convertSystemUnitsToHostTime(_ systemUnits: UInt64) -> CMTime
```

## Parameters

- `systemUnits`: The host time to convert.

## See Also

### Converting Time

- [convertHostTimeToSystemUnits(\_:)](converthosttimetosystemunits%28__%29.md): Converts a host time from a time structure to the host time’s native units.
