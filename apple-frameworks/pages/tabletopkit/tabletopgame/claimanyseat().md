> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/claimanyseat()](https://developer.apple.com/documentation/tabletopkit/tabletopgame/claimanyseat())

# claimAnySeat()

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Claims any free seat. Has no effect if the player is already seated or if there are no free seats.

## Declaration

```swift
func claimAnySeat()
```

## See Also

### Managing seats

- [claimSeat(\_:)](claimseat%28__%29.md): Claims the given seat. If provided Seat is not part of the table, it has no effect
- [claimSeat(matching:)](claimseat%28matching_%29.md): Claims the given seat. If provided ID does not exist, it has no effect
- [releaseSeat()](releaseseat%28%29.md): Releases the seat for this player. If the player is not seated it has no effect
