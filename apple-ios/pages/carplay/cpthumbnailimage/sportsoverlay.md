> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpthumbnailimage/sportsoverlay

# sportsOverlay (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An overlay with sporting event details, including the teams and current score.

## Declaration

```swift
var sportsOverlay: CPSportsOverlay? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to add or update the overlay for the thumbnail image. This overlay displays the team, score, and event information you provide. If you didn’t provide an overlay at initialization time, the default value of this property is `nil`.

## See Also

### Getting the thumbnail content

- [image](image.md): The main image to display.
- [imageOverlay](imageoverlay.md): An overlay with a custom image or text badge.

# sportsOverlay (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An overlay with sporting event details, including the teams and current score.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CPSportsOverlay * sportsOverlay;
```

<a id="discussion"></a>

## Discussion

Use this property to add or update the overlay for the thumbnail image. This overlay displays the team, score, and event information you provide. If you didn’t provide an overlay at initialization time, the default value of this property is `nil`.

## See Also

### Getting the thumbnail content

- [image](image.md): The main image to display.
- [imageOverlay](imageoverlay.md): An overlay with a custom image or text badge.
