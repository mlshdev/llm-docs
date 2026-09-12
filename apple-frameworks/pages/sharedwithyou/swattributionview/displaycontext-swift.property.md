> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swattributionview/displaycontext-swift.property](https://developer.apple.com/documentation/sharedwithyou/swattributionview/displaycontext-swift.property)

# displayContext (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The context for the content the system displays with this view.

## Declaration

```swift
var displayContext: SWAttributionView.DisplayContext { get set }
```

<a id="Discussion"></a>

## Discussion

Set the `displayContext` prior to adding this view to your view hierarchy.

## See Also

### Customizing highlights

- [backgroundStyle](backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [highlight](highlight.md): The highlight you use to display this attribution.
- [highlightMenu](highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [horizontalAlignment](horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [supplementalMenu](supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.

# displayContext (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The context for the content the system displays with this view.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) SWAttributionViewDisplayContext displayContext;
```

<a id="Discussion"></a>

## Discussion

Set the `displayContext` prior to adding this view to your view hierarchy.

## See Also

### Customizing highlights

- [backgroundStyle](backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [highlight](highlight.md): The highlight you use to display this attribution.
- [highlightMenu](highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [horizontalAlignment](horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [supplementalMenu](supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.
- [enablesMarquee](enablesmarquee.md): Automatically enables a marquee effect.
