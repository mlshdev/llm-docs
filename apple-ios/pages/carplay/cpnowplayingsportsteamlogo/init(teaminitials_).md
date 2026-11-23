> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteamlogo/init(teaminitials:)

# init(teamInitials:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates a logo object using the team’s initials or the official abbreviation of the team name.

## Declaration

```swift
init(teamInitials: String)
```

## Parameters

- `teamInitials`: An abbreviation of the team name. If the team name has an official abbreviation in the league, specify that abbreviation. Otherwise, specify the team’s initials. Specify no more than three characters in this string. If your string contains more than three characters, this method uses only the first three.

<a id="return-value"></a>

## Return Value

An initialized logo object.

<a id="discussion"></a>

## Discussion

Use this initializer when you don’t have relevant artwork to display for the team’s logo.

## See Also

### Creating a team logo

- [init(teamLogo:)](init%28teamlogo_%29.md): Creates a logo object using a team-specific image.
- [init(coder:)](init%28coder_%29.md)

# initWithTeamInitials: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates a logo object using the team’s initials or the official abbreviation of the team name.

## Declaration

```objectivec
- (instancetype) initWithTeamInitials:(NSString *) teamInitials;
```

## Parameters

- `teamInitials`: An abbreviation of the team name. If the team name has an official abbreviation in the league, specify that abbreviation. Otherwise, specify the team’s initials. Specify no more than three characters in this string. If your string contains more than three characters, this method uses only the first three.

<a id="return-value"></a>

## Return Value

An initialized logo object.

<a id="discussion"></a>

## Discussion

Use this initializer when you don’t have relevant artwork to display for the team’s logo.

## See Also

### Creating a team logo

- [initWithTeamLogo:](init%28teamlogo_%29.md): Creates a logo object using a team-specific image.
