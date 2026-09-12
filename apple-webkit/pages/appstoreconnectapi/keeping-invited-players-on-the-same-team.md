> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/keeping-invited-players-on-the-same-team](https://developer.apple.com/documentation/appstoreconnectapi/keeping-invited-players-on-the-same-team)

# Keeping invited players on the same team

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Article

Return a Boolean value that indicates whether players in the same match requests are on the same team.

<a id="Declaration"></a>

### Declaration

```other
boolean hasInvitedPlayersOnSameTeam(array[object] $teams, array[object] $players)
```

<a id="Parameters"></a>

### Parameters

-`teams`: The teams in the rule set. Pass the `teams` array that’s available in team rule expressions. -`players`: The players that the rule applies to. Pass the `players` array that’s available in team rule expressions.

<a id="Return-value"></a>

### Return value

`true` if the players in the same match requests are on the same team; otherwise, `false`. The players in a match request include the local player and any recipients or other players that the local player invites.
