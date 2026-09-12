> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swattributionview/supplementalmenu](https://developer.apple.com/documentation/sharedwithyou/swattributionview/supplementalmenu)

# supplementalMenu (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A supplemental menu to augment the attribution view’s existing menu.

## Declaration

```swift
var supplementalMenu: UIMenu? { get set }
```

```swift
var supplementalMenu: NSMenuItem? { get set }
```

<a id="Discussion"></a>

## Discussion

Use `supplementalMenu` when there are additional actions a user can take on content represented by this view’s [SWHighlight](../swhighlight.md). A `nil` value informs the system to not add a supplemental menu.

## See Also

### Customizing highlights

- [backgroundStyle](backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [displayContext](displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlight](highlight.md): The highlight you use to display this attribution.
- [highlightMenu](highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [horizontalAlignment](horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.

# supplementalMenu (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A supplemental menu to augment the attribution view’s existing menu.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) UIMenu * supplementalMenu;
```

```objectivec
@property (nonatomic, strong, readwrite, nullable) NSMenuItem * supplementalMenu;
```

<a id="Discussion"></a>

## Discussion

Use `supplementalMenu` when there are additional actions a user can take on content represented by this view’s [SWHighlight](../swhighlight.md). A `nil` value informs the system to not add a supplemental menu.

## See Also

### Customizing highlights

- [backgroundStyle](backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [displayContext](displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlight](highlight.md): The highlight you use to display this attribution.
- [highlightMenu](highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [horizontalAlignment](horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): A width the system uses to constrain the view contents.
- [enablesMarquee](enablesmarquee.md): Automatically enables a marquee effect.
