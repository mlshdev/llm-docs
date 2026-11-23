> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteam/isfavorite

# isFavorite (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A Boolean value that indicates whether the team is one of the person’s favorites.

## Declaration

```swift
var isFavorite: Bool { get }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, CarPlay displays a star next to the team information.

## See Also

### Getting the team information

- [name](name.md): The localized name of the team.
- [logo](logo.md): The logo information for the team.
- [teamStandings](teamstandings.md): Team-specific information to display with the team’s name and logo.

# favorite (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A Boolean value that indicates whether the team is one of the person’s favorites.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isFavorite) BOOL favorite;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, CarPlay displays a star next to the team information.

## See Also

### Getting the team information

- [name](name.md): The localized name of the team.
- [logo](logo.md): The logo information for the team.
- [teamStandings](teamstandings.md): Team-specific information to display with the team’s name and logo.
