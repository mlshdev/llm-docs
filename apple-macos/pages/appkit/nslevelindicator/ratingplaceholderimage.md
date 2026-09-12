> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicator/ratingplaceholderimage](https://developer.apple.com/documentation/appkit/nslevelindicator/ratingplaceholderimage)

# ratingPlaceholderImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Sets the image used by the rating indicator style in place of the default faded placeholder image.

## Declaration

```swift
var ratingPlaceholderImage: NSImage? { get set }
```

<a id="discussion"></a>

## Discussion

If the custom placeholder is a template image, its fill opacity can be adjusted by modifying the opacity of the template image. If both a [ratingImage](ratingimage.md) and [ratingPlaceholderImage](ratingplaceholderimage.md) are set, each rating position is sized such that either image will fit without scaling (i.e. sized to the maximum width and height of both images). The default value is `nil`.

## See Also

### Managing Placeholder Information

- [placeholderVisibility](placeholdervisibility-swift.property.md): For a rating-style indicator, sets the conditions under which rating placeholders are displayed.
- [NSLevelIndicator.PlaceholderVisibility](placeholdervisibility-swift.enum.md)

# ratingPlaceholderImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Sets the image used by the rating indicator style in place of the default faded placeholder image.

## Declaration

```objectivec
@property (strong, nullable) NSImage * ratingPlaceholderImage;
```

<a id="discussion"></a>

## Discussion

If the custom placeholder is a template image, its fill opacity can be adjusted by modifying the opacity of the template image. If both a [ratingImage](ratingimage.md) and [ratingPlaceholderImage](ratingplaceholderimage.md) are set, each rating position is sized such that either image will fit without scaling (i.e. sized to the maximum width and height of both images). The default value is `nil`.

## See Also

### Managing Placeholder Information

- [placeholderVisibility](placeholdervisibility-swift.property.md): For a rating-style indicator, sets the conditions under which rating placeholders are displayed.
- [NSLevelIndicatorPlaceholderVisibility](placeholdervisibility-swift.enum.md)
