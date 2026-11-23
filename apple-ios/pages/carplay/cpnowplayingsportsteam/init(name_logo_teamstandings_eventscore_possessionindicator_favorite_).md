> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteam/init(name:logo:teamstandings:eventscore:possessionindicator:favorite:)

# init(name:logo:teamStandings:eventScore:possessionIndicator:favorite:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates an object using a team’s name, logo, and other information.

## Declaration

```swift
init(name: String, logo: CPNowPlayingSportsTeamLogo, teamStandings: String?, eventScore: String, possessionIndicator: UIImage?, favorite: Bool)
```

## Parameters

- `name`: The name of the team. Specify the name as a string localized for the current language settings.
- `logo`: The team’s logo information. Specify an image or a text abbreviation people can use to identify the team.
- `teamStandings`: Additional information about the team. Specify the team’s win-loss record, the team standings, or other relevant statistics. The amount of text CarPlay can display depends on the vehicle, but is typically no more than 15 to 20 characters.
- `eventScore`: The team’s current score. The amount of text you can display depends on the vehicle, but limit strings to no more than three to five characters.
- `possessionIndicator`: An image to indicate the team has possession of the ball. If the team isn’t in possession of the ball, or the sport doesn’t support the concept of possession, specify `nil`.
- `favorite`: `true` if the person marked this as one of their favorite teams. Specify `false` if the team isn’t one of the person’s favorites or if your app doesn’t support this information. Set the value of this property based on data you manage for a person’s favorite teams.

<a id="return-value"></a>

## Return Value

An initialized team object to display in the Now Playing interface.

## See Also

### Creating a sports team object

- [init(coder:)](init%28coder_%29.md)

# initWithName:logo:teamStandings:eventScore:possessionIndicator:favorite: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates an object using a team’s name, logo, and other information.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name logo:(CPNowPlayingSportsTeamLogo *) logo teamStandings:(NSString *) teamStandings eventScore:(NSString *) eventScore possessionIndicator:(UIImage *) possessionIndicator favorite:(BOOL) favorite;
```

## Parameters

- `name`: The name of the team. Specify the name as a string localized for the current language settings.
- `logo`: The team’s logo information. Specify an image or a text abbreviation people can use to identify the team.
- `teamStandings`: Additional information about the team. Specify the team’s win-loss record, the team standings, or other relevant statistics. The amount of text CarPlay can display depends on the vehicle, but is typically no more than 15 to 20 characters.
- `eventScore`: The team’s current score. The amount of text you can display depends on the vehicle, but limit strings to no more than three to five characters.
- `possessionIndicator`: An image to indicate the team has possession of the ball. If the team isn’t in possession of the ball, or the sport doesn’t support the concept of possession, specify `nil`.
- `favorite`: `true` if the person marked this as one of their favorite teams. Specify `false` if the team isn’t one of the person’s favorites or if your app doesn’t support this information. Set the value of this property based on data you manage for a person’s favorite teams.

<a id="return-value"></a>

## Return Value

An initialized team object to display in the Now Playing interface.
