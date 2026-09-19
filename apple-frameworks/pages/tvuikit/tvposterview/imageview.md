> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvuikit/tvposterview/imageview

# imageView (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

The image view associated with the poster view.

## Declaration

```swift
var imageView: UIImageView { get }
```

<a id="Discussion"></a>

## Discussion

Use the image view to add additional information, such as overlays or badges, to the main content image. Don’t set an image directly on the image view. Always use the poster view’s [image](image.md) property.

## See Also

### Configuring a Poster View

- [image](image.md): The image for the poster view.
- [title](title.md): The title for the poster view.
- [subtitle](subtitle.md): The subtitle for the poster view.

# imageView (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

The image view associated with the poster view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UIImageView * imageView;
```

<a id="Discussion"></a>

## Discussion

Use the image view to add additional information, such as overlays or badges, to the main content image. Don’t set an image directly on the image view. Always use the poster view’s [image](image.md) property.

## See Also

### Configuring a Poster View

- [image](image.md): The image for the poster view.
- [title](title.md): The title for the poster view.
- [subtitle](subtitle.md): The subtitle for the poster view.
