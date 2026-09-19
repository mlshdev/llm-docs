> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiprintpagerenderer/footerheight

# footerHeight (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The height of the page footer.

## Declaration

```swift
var footerHeight: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The footer is measured in points from the bottom of [printableRect](printablerect.md) and is below the content area. The default footer height is 0.0

## See Also

### Specifying header and footer heights

- [headerHeight](headerheight.md): The height of the page header.

# footerHeight (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The height of the page footer.

## Declaration

```objectivec
@property (nonatomic) CGFloat footerHeight;
```

<a id="Discussion"></a>

## Discussion

The footer is measured in points from the bottom of [printableRect](printablerect.md) and is below the content area. The default footer height is 0.0

## See Also

### Specifying header and footer heights

- [headerHeight](headerheight.md): The height of the page header.
