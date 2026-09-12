> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/claimseat(_:)](https://developer.apple.com/documentation/tabletopkit/tabletopgame/claimseat(_:))

# claimSeat(\_:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Claims the given seat. If provided Seat is not part of the table, it has no effect

## Declaration

```swift
func claimSeat(_ seat: some TableSeat)
```

## See Also

### Managing seats

- [claimAnySeat()](claimanyseat%28%29.md): Claims any free seat. Has no effect if the player is already seated or if there are no free seats.
- [claimSeat(matching:)](claimseat%28matching_%29.md): Claims the given seat. If provided ID does not exist, it has no effect
- [releaseSeat()](releaseseat%28%29.md): Releases the seat for this player. If the player is not seated it has no effect
