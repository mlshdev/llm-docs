> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpagerenderer/headerheight](https://developer.apple.com/documentation/uikit/uiprintpagerenderer/headerheight)

# headerHeight (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The height of the page header.

## Declaration

```swift
var headerHeight: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The header is measured in points from the top of [printableRect](printablerect.md) and is above the content area. The default header height is 0.0.

## See Also

### Specifying header and footer heights

- [footerHeight](footerheight.md): The height of the page footer.

# headerHeight (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The height of the page header.

## Declaration

```objectivec
@property (nonatomic) CGFloat headerHeight;
```

<a id="Discussion"></a>

## Discussion

The header is measured in points from the top of [printableRect](printablerect.md) and is above the content area. The default header height is 0.0.

## See Also

### Specifying header and footer heights

- [footerHeight](footerheight.md): The height of the page footer.
