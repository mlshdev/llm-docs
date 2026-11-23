> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpthumbnailimage/imageoverlay

# imageOverlay (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An overlay with a custom image or text badge.

## Declaration

```swift
var imageOverlay: CPImageOverlay? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to add or update the overlay for the thumbnail image. This overlay displays the specified image or text with the alignment your overlay specifies. If you didn’t provide an overlay at initialization time, the default value of this property is `nil`.

## See Also

### Getting the thumbnail content

- [image](image.md): The main image to display.
- [sportsOverlay](sportsoverlay.md): An overlay with sporting event details, including the teams and current score.

# imageOverlay (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An overlay with a custom image or text badge.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CPImageOverlay * imageOverlay;
```

<a id="discussion"></a>

## Discussion

Use this property to add or update the overlay for the thumbnail image. This overlay displays the specified image or text with the alignment your overlay specifies. If you didn’t provide an overlay at initialization time, the default value of this property is `nil`.

## See Also

### Getting the thumbnail content

- [image](image.md): The main image to display.
- [sportsOverlay](sportsoverlay.md): An overlay with sporting event details, including the teams and current score.
