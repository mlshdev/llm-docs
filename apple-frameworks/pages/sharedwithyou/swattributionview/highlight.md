> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swattributionview/highlight](https://developer.apple.com/documentation/sharedwithyou/swattributionview/highlight)

# highlight (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The highlight you use to display this attribution.

## Declaration

```swift
var highlight: SWHighlight? { get set }
```

<a id="Discussion"></a>

## Discussion

When your app sets this property to a new `highlight`, the system reloads the contents of the view.

## See Also

### Customizing highlights

- [backgroundStyle](backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [displayContext](displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlightMenu](highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [horizontalAlignment](horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [supplementalMenu](supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.

# highlight (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The highlight you use to display this attribution.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) SWHighlight * highlight;
```

<a id="Discussion"></a>

## Discussion

When your app sets this property to a new `highlight`, the system reloads the contents of the view.

## See Also

### Customizing highlights

- [backgroundStyle](backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [displayContext](displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlightMenu](highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [horizontalAlignment](horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [supplementalMenu](supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.
- [enablesMarquee](enablesmarquee.md): Automatically enables a marquee effect.
