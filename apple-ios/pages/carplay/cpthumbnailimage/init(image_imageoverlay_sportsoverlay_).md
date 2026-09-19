> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpthumbnailimage/init(image:imageoverlay:sportsoverlay:)

# init(image:imageOverlay:sportsOverlay:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize a thumbnail with a combination of properties.

## Declaration

```swift
init(image: UIImage, imageOverlay: CPImageOverlay?, sportsOverlay: CPSportsOverlay?)
```

## Parameters

- `image`: The image to display in the thumbnail.
- `imageOverlay`: The image overlay for the thumbnail.
- `sportsOverlay`: The sports overlay for the thumbnail.

# initWithImage:imageOverlay:sportsOverlay: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize a thumbnail with a combination of properties.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image imageOverlay:(CPImageOverlay *) imageOverlay sportsOverlay:(CPSportsOverlay *) sportsOverlay;
```

## Parameters

- `image`: The image to display in the thumbnail.
- `imageOverlay`: The image overlay for the thumbnail.
- `sportsOverlay`: The sports overlay for the thumbnail.
