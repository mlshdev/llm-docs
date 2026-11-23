> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteam/teamstandings

# teamStandings (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Team-specific information to display with the team’s name and logo.

## Declaration

```swift
var teamStandings: String? { get }
```

<a id="discussion"></a>

## Discussion

This property stores additional team-specific information that people might find interesting. For example, it can display the team’s win-loss record, their standings in the league, or other relevant statistics. The amount of text CarPlay can show depends on the display, but is typically no more than 15 to 20 characters.

## See Also

### Getting the team information

- [name](name.md): The localized name of the team.
- [logo](logo.md): The logo information for the team.
- [isFavorite](isfavorite.md): A Boolean value that indicates whether the team is one of the person’s favorites.

# teamStandings (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Team-specific information to display with the team’s name and logo.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * teamStandings;
```

<a id="discussion"></a>

## Discussion

This property stores additional team-specific information that people might find interesting. For example, it can display the team’s win-loss record, their standings in the league, or other relevant statistics. The amount of text CarPlay can show depends on the display, but is typically no more than 15 to 20 characters.

## See Also

### Getting the team information

- [name](name.md): The localized name of the team.
- [logo](logo.md): The logo information for the team.
- [favorite](isfavorite.md): A Boolean value that indicates whether the team is one of the person’s favorites.
