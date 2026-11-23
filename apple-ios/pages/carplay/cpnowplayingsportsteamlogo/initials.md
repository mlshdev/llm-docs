> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteamlogo/initials

# initials (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The team’s initials or official team-name abbreviation.

## Declaration

```swift
var initials: String? { get }
```

<a id="discussion"></a>

## Discussion

This property contains only the first three characters of the string you specify at initialization time. If you initialize the logo object with an image, this property is `nil`.

## See Also

### Getting the logo content

- [logo](logo.md): The image with the team’s logo.

# initials (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The team’s initials or official team-name abbreviation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * initials;
```

<a id="discussion"></a>

## Discussion

This property contains only the first three characters of the string you specify at initialization time. If you initialize the logo object with an image, this property is `nil`.

## See Also

### Getting the logo content

- [logo](logo.md): The image with the team’s logo.
