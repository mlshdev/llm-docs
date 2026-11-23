> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteam/name

# name (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The localized name of the team.

## Declaration

```swift
var name: String { get }
```

<a id="discussion"></a>

## Discussion

CarPlay displays this string with the team logo in the Now Playing interface.

## See Also

### Getting the team information

- [logo](logo.md): The logo information for the team.
- [isFavorite](isfavorite.md): A Boolean value that indicates whether the team is one of the person’s favorites.
- [teamStandings](teamstandings.md): Team-specific information to display with the team’s name and logo.

# name (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The localized name of the team.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * name;
```

<a id="discussion"></a>

## Discussion

CarPlay displays this string with the team logo in the Now Playing interface.

## See Also

### Getting the team information

- [logo](logo.md): The logo information for the team.
- [favorite](isfavorite.md): A Boolean value that indicates whether the team is one of the person’s favorites.
- [teamStandings](teamstandings.md): Team-specific information to display with the team’s name and logo.
