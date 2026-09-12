> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/outcome](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/outcome)

# GKTurnBasedMatch.Outcome (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The state of a participant when they forfeit a match or when a match ends.

## Declaration

```swift
enum Outcome
```

## Topics

### Outcomes

- [GKTurnBasedMatch.Outcome.none](outcome/none.md): The participant doesn’t reach an outcome.
- [GKTurnBasedMatch.Outcome.quit](outcome/quit.md): The participant forfeits the match.
- [GKTurnBasedMatch.Outcome.won](outcome/won.md): The participant wins the match.
- [GKTurnBasedMatch.Outcome.lost](outcome/lost.md): The participant loses the match.
- [GKTurnBasedMatch.Outcome.tied](outcome/tied.md): The participant ties the match.
- [GKTurnBasedMatch.Outcome.timeExpired](outcome/timeexpired.md): The match ends because the time limit expires.
- [GKTurnBasedMatch.Outcome.first](outcome/first.md): The participant finishes in first place.
- [GKTurnBasedMatch.Outcome.second](outcome/second.md): The participant finishes in second place.
- [GKTurnBasedMatch.Outcome.third](outcome/third.md): The participant finishes in third place.
- [GKTurnBasedMatch.Outcome.fourth](outcome/fourth.md): The participant finishes in fourth place.
- [GKTurnBasedMatch.Outcome.customRange](outcome/customrange.md): The participant reaches a game-specific outcome.

### Initializers

- [init(rawValue:)](outcome/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Forfeiting a Match

- [participantQuitInTurn(with:nextParticipants:turnTimeout:match:completionHandler:)](participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md): Forfeits the match on behalf of the local player when it’s their turn.
- [participantQuitOutOfTurn(with:withCompletionHandler:)](participantquitoutofturn%28with_withcompletionhandler_%29.md): Forfeits the match on behalf of the local player when it’s not their turn.

# GKTurnBasedMatchOutcome (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The state of a participant when they forfeit a match or when a match ends.

## Declaration

```objectivec
enum GKTurnBasedMatchOutcome : NSInteger;
```

## Topics

### Outcomes

- [GKTurnBasedMatchOutcomeNone](outcome/none.md): The participant doesn’t reach an outcome.
- [GKTurnBasedMatchOutcomeQuit](outcome/quit.md): The participant forfeits the match.
- [GKTurnBasedMatchOutcomeWon](outcome/won.md): The participant wins the match.
- [GKTurnBasedMatchOutcomeLost](outcome/lost.md): The participant loses the match.
- [GKTurnBasedMatchOutcomeTied](outcome/tied.md): The participant ties the match.
- [GKTurnBasedMatchOutcomeTimeExpired](outcome/timeexpired.md): The match ends because the time limit expires.
- [GKTurnBasedMatchOutcomeFirst](outcome/first.md): The participant finishes in first place.
- [GKTurnBasedMatchOutcomeSecond](outcome/second.md): The participant finishes in second place.
- [GKTurnBasedMatchOutcomeThird](outcome/third.md): The participant finishes in third place.
- [GKTurnBasedMatchOutcomeFourth](outcome/fourth.md): The participant finishes in fourth place.
- [GKTurnBasedMatchOutcomeCustomRange](outcome/customrange.md): The participant reaches a game-specific outcome.

## See Also

### Forfeiting a Match

- [participantQuitInTurnWithOutcome:nextParticipants:turnTimeout:matchData:completionHandler:](participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md): Forfeits the match on behalf of the local player when it’s their turn.
- [participantQuitOutOfTurnWithOutcome:withCompletionHandler:](participantquitoutofturn%28with_withcompletionhandler_%29.md): Forfeits the match on behalf of the local player when it’s not their turn.
