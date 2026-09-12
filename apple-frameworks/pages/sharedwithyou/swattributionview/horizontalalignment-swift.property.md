> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swattributionview/horizontalalignment-swift.property](https://developer.apple.com/documentation/sharedwithyou/swattributionview/horizontalalignment-swift.property)

# horizontalAlignment (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The horizontal alignment of the view.

## Declaration

```swift
var horizontalAlignment: SWAttributionView.HorizontalAlignment { get set }
```

<a id="Discussion"></a>

## Discussion

This `horizontalAlignment` specifies the horizontal anchor for the view’s contents. This value only has an effect when the width of the contents are less than the available width. You should specify a value, in case the internal default ever changes.

## See Also

### Customizing highlights

- [backgroundStyle](backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [displayContext](displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlight](highlight.md): The highlight you use to display this attribution.
- [highlightMenu](highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [supplementalMenu](supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.

# horizontalAlignment (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The horizontal alignment of the view.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) SWAttributionViewHorizontalAlignment horizontalAlignment;
```

<a id="Discussion"></a>

## Discussion

This `horizontalAlignment` specifies the horizontal anchor for the view’s contents. This value only has an effect when the width of the contents are less than the available width. You should specify a value, in case the internal default ever changes.

## See Also

### Customizing highlights

- [backgroundStyle](backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [displayContext](displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlight](highlight.md): The highlight you use to display this attribution.
- [highlightMenu](highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [supplementalMenu](supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.
- [enablesMarquee](enablesmarquee.md): Automatically enables a marquee effect.
