> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/controllingseats/current

# ControllingSeats.current

**Framework:** TabletopKit  
**Kind:** Case  
**Availability:** visionOS 2.0+

Lets only seats currently in turn interact with the equipment.

## Declaration

```swift
case current
```

## See Also

### Seats

- [ControllingSeats.any](any.md): Lets players in all seats interact with the equipment.
- [ControllingSeats.restricted(\_:)](restricted%28__%29.md): Lets players in specific seats interact with the equipment.
- [ControllingSeats.restrictedCurrent(\_:)](restrictedcurrent%28__%29.md): Lets players in specific seats interact with the equipment if they are currently in turn.
- [ControllingSeats.inherited](inherited.md): The value is inherited from the parent. The table implicit value is considered to be `.any`.
