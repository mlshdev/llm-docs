> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswindow/stylemask-swift.struct/titled

# titled (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The window displays a title bar.

## Declaration

```swift
static var titled: NSWindow.StyleMask { get }
```

<a id="discussion"></a>

## Discussion

Setting this flag also causes the default value of [canBecomeKey](../canbecomekey.md) to become [true](https://developer.apple.com/documentation/swift/true). Setting this flag doesn’t cause a sheet to display a title, so you can set it on a sheet without having to hide the title separately.

## See Also

### Constants

- [borderless](borderless.md): The window displays none of the usual peripheral elements.
- [closable](closable.md): The window displays a close button.
- [miniaturizable](miniaturizable.md): The window displays a minimize button.
- [resizable](resizable.md): The window can be resized by the user.
- [texturedBackground](texturedbackground.md): Deprecated. The window uses a textured background that darkens when the window is key or main and lightens when it is inactive, and may have a second gradient in the section below the window content.
- [unifiedTitleAndToolbar](unifiedtitleandtoolbar.md): This constant has no effect, because all windows that include a toolbar use the unified style.
- [fullScreen](fullscreen.md): The window can appear full screen. A fullscreen window does not draw its title bar, and may have special handling for its toolbar. (This mask is automatically toggled when [toggleFullScreen(\_:)](../togglefullscreen%28__%29.md) is called.)
- [fullSizeContentView](fullsizecontentview.md): When set, the window’s [contentView](../contentview.md) consumes the full size of the window. Although you can combine this constant with other window style masks, it is respected only for windows with a title bar. Note that using this mask opts in to layer-backing. Use the [contentLayoutRect](../contentlayoutrect.md) or the [contentLayoutGuide](../contentlayoutguide.md) to lay out views underneath the title bar–toolbar area.
- [utilityWindow](utilitywindow.md): The window is a panel or a subclass of [NSPanel](../../nspanel.md).
- [docModalWindow](docmodalwindow.md): The window is a document-modal panel (or a subclass of [NSPanel](../../nspanel.md)).
- [nonactivatingPanel](nonactivatingpanel.md): The window is a panel or a subclass of [NSPanel](../../nspanel.md) that does not activate the owning app.
- [hudWindow](hudwindow.md): The window is a HUD panel.

# NSWindowStyleMaskTitled (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The window displays a title bar.

## Declaration

```objectivec
NSWindowStyleMaskTitled
```

<a id="discussion"></a>

## Discussion

Setting this flag also causes the default value of [canBecomeKeyWindow](../canbecomekey.md) to become [true](https://developer.apple.com/documentation/swift/true). Setting this flag doesn’t cause a sheet to display a title, so you can set it on a sheet without having to hide the title separately.

## See Also

### Constants

- [NSWindowStyleMaskBorderless](borderless.md): The window displays none of the usual peripheral elements.
- [NSWindowStyleMaskClosable](closable.md): The window displays a close button.
- [NSWindowStyleMaskMiniaturizable](miniaturizable.md): The window displays a minimize button.
- [NSWindowStyleMaskResizable](resizable.md): The window can be resized by the user.
- [NSWindowStyleMaskTexturedBackground](texturedbackground.md): Deprecated. The window uses a textured background that darkens when the window is key or main and lightens when it is inactive, and may have a second gradient in the section below the window content.
- [NSWindowStyleMaskUnifiedTitleAndToolbar](unifiedtitleandtoolbar.md): This constant has no effect, because all windows that include a toolbar use the unified style.
- [NSWindowStyleMaskFullScreen](fullscreen.md): The window can appear full screen. A fullscreen window does not draw its title bar, and may have special handling for its toolbar. (This mask is automatically toggled when [toggleFullScreen:](../togglefullscreen%28__%29.md) is called.)
- [NSWindowStyleMaskFullSizeContentView](fullsizecontentview.md): When set, the window’s [contentView](../contentview.md) consumes the full size of the window. Although you can combine this constant with other window style masks, it is respected only for windows with a title bar. Note that using this mask opts in to layer-backing. Use the [contentLayoutRect](../contentlayoutrect.md) or the [contentLayoutGuide](../contentlayoutguide.md) to lay out views underneath the title bar–toolbar area.
- [NSWindowStyleMaskUtilityWindow](utilitywindow.md): The window is a panel or a subclass of [NSPanel](../../nspanel.md).
- [NSWindowStyleMaskDocModalWindow](docmodalwindow.md): The window is a document-modal panel (or a subclass of [NSPanel](../../nspanel.md)).
- [NSWindowStyleMaskNonactivatingPanel](nonactivatingpanel.md): The window is a panel or a subclass of [NSPanel](../../nspanel.md) that does not activate the owning app.
- [NSWindowStyleMaskHUDWindow](hudwindow.md): The window is a HUD panel.
