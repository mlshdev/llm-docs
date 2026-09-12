> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swattributionview/preferredmaxlayoutwidth](https://developer.apple.com/documentation/sharedwithyou/swattributionview/preferredmaxlayoutwidth)

# preferredMaxLayoutWidth (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A width the system uses to constrain the view contents.

## Declaration

```swift
var preferredMaxLayoutWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

When embedding this view in a SwiftUI [UIViewRepresentable](https://developer.apple.com/documentation/swiftui/uiviewrepresentable) or [NSViewRepresentable](https://developer.apple.com/documentation/swiftui/nsviewrepresentable) view, the system constrains its contents to the `preferredMaxLayoutWidth` width.

If you’re not using SwiftUI this property shouldn’t be necessary, as [SWAttributionView](../swattributionview.md) otherwise derives the maximum width from the frame or constraints you set.

## See Also

### Customizing highlights

- [backgroundStyle](backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [displayContext](displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlight](highlight.md): The highlight you use to display this attribution.
- [highlightMenu](highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [horizontalAlignment](horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [supplementalMenu](supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.

# preferredMaxLayoutWidth (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A width the system uses to constrain the view contents.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) CGFloat preferredMaxLayoutWidth;
```

<a id="Discussion"></a>

## Discussion

When embedding this view in a SwiftUI [UIViewRepresentable](https://developer.apple.com/documentation/swiftui/uiviewrepresentable) or [NSViewRepresentable](https://developer.apple.com/documentation/swiftui/nsviewrepresentable) view, the system constrains its contents to the `preferredMaxLayoutWidth` width.

If you’re not using SwiftUI this property shouldn’t be necessary, as [SWAttributionView](../swattributionview.md) otherwise derives the maximum width from the frame or constraints you set.

## See Also

### Customizing highlights

- [backgroundStyle](backgroundstyle-swift.property.md): The background style of the child view that contains names and avatars.
- [displayContext](displaycontext-swift.property.md): The context for the content the system displays with this view.
- [highlight](highlight.md): The highlight you use to display this attribution.
- [highlightMenu](highlightmenu.md): A menu with a list of system actions specific to this hightlight.
- [horizontalAlignment](horizontalalignment-swift.property.md): The horizontal alignment of the view.
- [menuTitleForHideAction](menutitleforhideaction.md): A localized string the system uses as a custom title for the hide menu item.
- [supplementalMenu](supplementalmenu.md): A supplemental menu to augment the attribution view’s existing menu.
- [enablesMarquee](enablesmarquee.md): Automatically enables a marquee effect.
