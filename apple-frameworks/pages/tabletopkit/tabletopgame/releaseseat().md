> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/releaseseat()](https://developer.apple.com/documentation/tabletopkit/tabletopgame/releaseseat())

# releaseSeat()

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Releases the seat for this player. If the player is not seated it has no effect

## Declaration

```swift
func releaseSeat()
```

## See Also

### Managing seats

- [claimAnySeat()](claimanyseat%28%29.md): Claims any free seat. Has no effect if the player is already seated or if there are no free seats.
- [claimSeat(\_:)](claimseat%28__%29.md): Claims the given seat. If provided Seat is not part of the table, it has no effect
- [claimSeat(matching:)](claimseat%28matching_%29.md): Claims the given seat. If provided ID does not exist, it has no effect
