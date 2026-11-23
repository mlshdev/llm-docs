> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteam/logo

# logo (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The logo information for the team.

## Declaration

```swift
@NSCopying var logo: CPNowPlayingSportsTeamLogo { get }
```

<a id="discussion"></a>

## Discussion

Logo information can include either an image with the team’s logo or an abbreviation of the team’s name.

## See Also

### Getting the team information

- [name](name.md): The localized name of the team.
- [isFavorite](isfavorite.md): A Boolean value that indicates whether the team is one of the person’s favorites.
- [teamStandings](teamstandings.md): Team-specific information to display with the team’s name and logo.

# logo (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The logo information for the team.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CPNowPlayingSportsTeamLogo * logo;
```

<a id="discussion"></a>

## Discussion

Logo information can include either an image with the team’s logo or an abbreviation of the team’s name.

## See Also

### Getting the team information

- [name](name.md): The localized name of the team.
- [favorite](isfavorite.md): A Boolean value that indicates whether the team is one of the person’s favorites.
- [teamStandings](teamstandings.md): Team-specific information to display with the team’s name and logo.
