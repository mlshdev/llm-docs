> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/thumbnail

# thumbnail (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The thumbnail image to display in the header.

## Declaration

```swift
var thumbnail: CPThumbnailImage { get set }
```

<a id="discussion"></a>

## Discussion

The image in this property represents the primary visual content of the header. You can augment the thumbnail image to include overlays or playback progress indicators. For example, you can place sports scores on top the image using a sports overlay.

## See Also

### Managing the header’s content

- [title](title.md): The primary text to display in the header.
- [subtitle](subtitle.md): The text to display in the header below the title.
- [bodyVariants](bodyvariants.md): An optional array of localized strings to display beneath the subtitle.
- [actionButtons](actionbuttons.md): An array of action buttons to display in the header.
- [wantsAdaptiveBackgroundStyle](wantsadaptivebackgroundstyle.md): A Boolean value that indicates whether to apply a custom background style to the header.

# thumbnail (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The thumbnail image to display in the header.

## Declaration

```objectivec
@property (nonatomic, strong) CPThumbnailImage * thumbnail;
```

<a id="discussion"></a>

## Discussion

The image in this property represents the primary visual content of the header. You can augment the thumbnail image to include overlays or playback progress indicators. For example, you can place sports scores on top the image using a sports overlay.

## See Also

### Managing the header’s content

- [title](title.md): The primary text to display in the header.
- [subtitle](subtitle.md): The text to display in the header below the title.
- [bodyVariants](bodyvariants.md): An optional array of localized strings to display beneath the subtitle.
- [actionButtons](actionbuttons.md): An array of action buttons to display in the header.
- [adaptiveBackgroundStyle](wantsadaptivebackgroundstyle.md): A Boolean value that indicates whether to apply a custom background style to the header.
