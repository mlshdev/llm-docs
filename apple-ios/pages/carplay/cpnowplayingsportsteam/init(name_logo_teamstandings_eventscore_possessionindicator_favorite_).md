> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingsportsteam/init(name:logo:teamstandings:eventscore:possessionindicator:favorite:)](https://developer.apple.com/documentation/carplay/cpnowplayingsportsteam/init(name:logo:teamstandings:eventscore:possessionindicator:favorite:))

# init(name:logo:teamStandings:eventScore:possessionIndicator:favorite:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Initialize a sports team for display on the now playing screen.

## Declaration

```swift
init(name: String, logo: CPNowPlayingSportsTeamLogo, teamStandings: String?, eventScore: String, possessionIndicator: UIImage?, favorite: Bool)
```

## Parameters

- `name`: A localized, user-visible name for this sports team.
- `logo`: The team logo or, if no logo is available, the initials/abbreviation for this team.
- `teamStandings`: An optional additional label displayed near the team name. This could be a win-loss ratio string, team standings, or other statistics relevant to this team. Depending on the size of the car screen, a maximum of 15-20 characters may be displayed.
- `eventScore`: The score string for this team in the current event. Depending on the size of the car screen, a maximum of 3 to 5 characters may be displayed.
- `possessionIndicator`: An optional indicator used to indicate possession by this team. Only one team should have possession at a given time.
- `favorite`: If true, the team is marked with a star to indicate it has been saved as a user favorite.

# initWithName:logo:teamStandings:eventScore:possessionIndicator:favorite: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Initialize a sports team for display on the now playing screen.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name logo:(CPNowPlayingSportsTeamLogo *) logo teamStandings:(NSString *) teamStandings eventScore:(NSString *) eventScore possessionIndicator:(UIImage *) possessionIndicator favorite:(BOOL) favorite;
```

## Parameters

- `name`: A localized, user-visible name for this sports team.
- `logo`: The team logo or, if no logo is available, the initials/abbreviation for this team.
- `teamStandings`: An optional additional label displayed near the team name. This could be a win-loss ratio string, team standings, or other statistics relevant to this team. Depending on the size of the car screen, a maximum of 15-20 characters may be displayed.
- `eventScore`: The score string for this team in the current event. Depending on the size of the car screen, a maximum of 3 to 5 characters may be displayed.
- `possessionIndicator`: An optional indicator used to indicate possession by this team. Only one team should have possession at a given time.
- `favorite`: If true, the team is marked with a star to indicate it has been saved as a user favorite.
