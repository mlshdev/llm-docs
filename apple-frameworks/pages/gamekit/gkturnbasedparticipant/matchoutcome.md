> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedparticipant/matchoutcome](https://developer.apple.com/documentation/gamekit/gkturnbasedparticipant/matchoutcome)

# matchOutcome (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The conclusion or results of a participant in a match.

## Declaration

```swift
var matchOutcome: GKTurnBasedMatch.Outcome { get set }
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Initially, GameKit sets this property to [GKTurnBasedMatch.Outcome.none](../gkturnbasedmatch/outcome/none.md). Then before a player forfeits a match or you end a match, set this property to a value that reflects the participant’s outcome. Optionally, set this property to a custom value using an `OR` operation that fits in the range specified by the [GKTurnBasedMatch.Outcome.customRange](../gkturnbasedmatch/outcome/customrange.md) enumeration case.

## See Also

### Setting Participant Outcomes

- [GKTurnBasedMatch.Outcome](../gkturnbasedmatch/outcome.md): The state of a participant when they forfeit a match or when a match ends.

# matchOutcome (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The conclusion or results of a participant in a match.

## Declaration

```objectivec
@property (nonatomic, assign) GKTurnBasedMatchOutcome matchOutcome;
```

```objectivec
@property (atomic, assign) GKTurnBasedMatchOutcome matchOutcome;
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Initially, GameKit sets this property to [GKTurnBasedMatchOutcomeNone](../gkturnbasedmatch/outcome/none.md). Then before a player forfeits a match or you end a match, set this property to a value that reflects the participant’s outcome. Optionally, set this property to a custom value using an `OR` operation that fits in the range specified by the [GKTurnBasedMatchOutcomeCustomRange](../gkturnbasedmatch/outcome/customrange.md) enumeration case.

## See Also

### Setting Participant Outcomes

- [GKTurnBasedMatchOutcome](../gkturnbasedmatch/outcome.md): The state of a participant when they forfeit a match or when a match ends.
