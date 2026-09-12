> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablesnapshot/seat(of:for:)](https://developer.apple.com/documentation/tabletopkit/tablesnapshot/seat(of:for:))

# seat(of:for:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

## Declaration

```swift
func seat<S>(of type: S.Type, for player: Player) -> (S, S.State)? where S : TableSeat
```

## See Also

### Getting information on seats

- [turn](turn.md)
- [seats](seats.md)
- [seatIDs](seatids.md)
- [seat(of:matching:)](seat%28of_matching_%29.md)
- [seats(of:)](seats%28of_%29.md)
- [state(for:)](state%28for_%29.md)
- [state(matching:)](state%28matching_%29-ear2.md)
- [entity(forSeat:)](entity%28forseat_%29.md)
- [entity(matching:)](entity%28matching_%29-7ps7s.md)
