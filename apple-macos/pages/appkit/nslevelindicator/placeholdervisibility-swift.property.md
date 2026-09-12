> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicator/placeholdervisibility-swift.property](https://developer.apple.com/documentation/appkit/nslevelindicator/placeholdervisibility-swift.property)

# placeholderVisibility (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

For a rating-style indicator, sets the conditions under which rating placeholders are displayed.

## Declaration

```swift
var placeholderVisibility: NSLevelIndicator.PlaceholderVisibility { get set }
```

<a id="discussion"></a>

## Discussion

This property currently has no effect for other indicator styles. The default value is `NSLevelIndicatorPlaceholderVisibilityAutomatic`.

## See Also

### Managing Placeholder Information

- [ratingPlaceholderImage](ratingplaceholderimage.md): Sets the image used by the rating indicator style in place of the default faded placeholder image.
- [NSLevelIndicator.PlaceholderVisibility](placeholdervisibility-swift.enum.md)

# placeholderVisibility (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

For a rating-style indicator, sets the conditions under which rating placeholders are displayed.

## Declaration

```objectivec
@property NSLevelIndicatorPlaceholderVisibility placeholderVisibility;
```

<a id="discussion"></a>

## Discussion

This property currently has no effect for other indicator styles. The default value is `NSLevelIndicatorPlaceholderVisibilityAutomatic`.

## See Also

### Managing Placeholder Information

- [ratingPlaceholderImage](ratingplaceholderimage.md): Sets the image used by the rating indicator style in place of the default faded placeholder image.
- [NSLevelIndicatorPlaceholderVisibility](placeholdervisibility-swift.enum.md)
