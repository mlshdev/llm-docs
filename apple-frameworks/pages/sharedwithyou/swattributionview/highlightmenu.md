> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swattributionview/highlightmenu](https://developer.apple.com/documentation/sharedwithyou/swattributionview/highlightmenu)

# highlightMenu (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A menu with a list of system actions specific to this hightlight.

## Declaration

```swift
var highlightMenu: UIMenu { get }
```

```swift
var highlightMenu: NSMenu { get }
```

<a id="Discussion"></a>

## Discussion

Use this menu to augment an existing menu that the system attaches to the content represented by this [SWAttributionView](../swattributionview.md). This menu allows the user to reply to or hide the highlight. Your app needs to add this `hightlightMenu` inline with, and at the end of, the menu elements it augments.

## See Also

### Customizing highlights

- [backgroundStyle](backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [displayContext](displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlight](highlight.md): The highlight you use to display this attribution.
- [horizontalAlignment](horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [supplementalMenu](supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.

# highlightMenu (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A menu with a list of system actions specific to this hightlight.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UIMenu * highlightMenu;
```

```objectivec
@property (nonatomic, strong, readonly) NSMenu * highlightMenu;
```

<a id="Discussion"></a>

## Discussion

Use this menu to augment an existing menu that the system attaches to the content represented by this [SWAttributionView](../swattributionview.md). This menu allows the user to reply to or hide the highlight. Your app needs to add this `hightlightMenu` inline with, and at the end of, the menu elements it augments.

## See Also

### Customizing highlights

- [backgroundStyle](backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [displayContext](displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlight](highlight.md): The highlight you use to display this attribution.
- [horizontalAlignment](horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [supplementalMenu](supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.
- [enablesMarquee](enablesmarquee.md): Automatically enables a marquee effect.
