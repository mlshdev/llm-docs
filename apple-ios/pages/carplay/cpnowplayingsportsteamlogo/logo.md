> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteamlogo/logo

# logo (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The image with the team’s logo.

## Declaration

```swift
@NSCopying var logo: UIImage? { get }
```

<a id="discussion"></a>

## Discussion

This property contains an image that is 350 by 350 points in size. If you initialize the logo object with the team’s initials, this property is `nil`.

## See Also

### Getting the logo content

- [initials](initials.md): The team’s initials or official team-name abbreviation.

# logo (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The image with the team’s logo.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UIImage * logo;
```

<a id="discussion"></a>

## Discussion

This property contains an image that is 350 by 350 points in size. If you initialize the logo object with the team’s initials, this property is `nil`.

## See Also

### Getting the logo content

- [initials](initials.md): The team’s initials or official team-name abbreviation.
