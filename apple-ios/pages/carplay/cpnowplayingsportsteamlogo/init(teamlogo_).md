> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteamlogo/init(teamlogo:)

# init(teamLogo:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates a logo object using a team-specific image.

## Declaration

```swift
init(teamLogo: UIImage)
```

## Parameters

- `teamLogo`: The official logo of the team. Specify an image that is 350 by 350 points in size. This method resizes larger or smaller images to fit the expected size.

<a id="return-value"></a>

## Return Value

An initialized logo object.

<a id="discussion"></a>

## Discussion

If the team doesn’t have an official logo, use the [init(teamInitials:)](init%28teaminitials_%29.md) method to specify the team’s initials instead.

## See Also

### Creating a team logo

- [init(teamInitials:)](init%28teaminitials_%29.md): Creates a logo object using the team’s initials or the official abbreviation of the team name.
- [init(coder:)](init%28coder_%29.md)

# initWithTeamLogo: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates a logo object using a team-specific image.

## Declaration

```objectivec
- (instancetype) initWithTeamLogo:(UIImage *) teamLogo;
```

## Parameters

- `teamLogo`: The official logo of the team. Specify an image that is 350 by 350 points in size. This method resizes larger or smaller images to fit the expected size.

<a id="return-value"></a>

## Return Value

An initialized logo object.

<a id="discussion"></a>

## Discussion

If the team doesn’t have an official logo, use the [initWithTeamInitials:](init%28teaminitials_%29.md) method to specify the team’s initials instead.

## See Also

### Creating a team logo

- [initWithTeamInitials:](init%28teaminitials_%29.md): Creates a logo object using the team’s initials or the official abbreviation of the team name.
