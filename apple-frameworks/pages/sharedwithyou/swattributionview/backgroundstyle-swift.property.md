> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swattributionview/backgroundstyle-swift.property](https://developer.apple.com/documentation/sharedwithyou/swattributionview/backgroundstyle-swift.property)

# backgroundStyle (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The background style of the child view that contains names and avatars.

## Declaration

```swift
var backgroundStyle: SWAttributionView.BackgroundStyle { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a background style, the system chooses one automatically. In general, [SWAttributionView.BackgroundStyle.color](backgroundstyle-swift.enum/color.md) looks best on monochrome backgrounds, while [SWAttributionView.BackgroundStyle.material](backgroundstyle-swift.enum/material.md) looks better on colored backgrounds.

## See Also

### Customizing highlights

- [displayContext](displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlight](highlight.md): The highlight you use to display this attribution.
- [highlightMenu](highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [horizontalAlignment](horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [supplementalMenu](supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.

# backgroundStyle (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The background style of the child view that contains names and avatars.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) SWAttributionViewBackgroundStyle backgroundStyle;
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a background style, the system chooses one automatically. In general, [SWAttributionViewBackgroundStyleColor](backgroundstyle-swift.enum/color.md) looks best on monochrome backgrounds, while [SWAttributionViewBackgroundStyleMaterial](backgroundstyle-swift.enum/material.md) looks better on colored backgrounds.

## See Also

### Customizing highlights

- [displayContext](displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlight](highlight.md): The highlight you use to display this attribution.
- [highlightMenu](highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [horizontalAlignment](horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [supplementalMenu](supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.
- [enablesMarquee](enablesmarquee.md): Automatically enables a marquee effect.
