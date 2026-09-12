> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/screensaverview/init(frame:ispreview:)](https://developer.apple.com/documentation/screensaver/screensaverview/init(frame:ispreview:))

# init(frame:isPreview:) (Swift)

**Framework:** Screen Saver  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Creates a newly allocated screen saver view with the specified frame rectangle and preview information.

## Declaration

```swift
init?(frame: NSRect, isPreview: Bool)
```

## Parameters

- `frame`: The frame rectangle for the view.
- `isPreview`: [true](https://developer.apple.com/documentation/swift/true) if this view provides a preview for system settings, or [false](https://developer.apple.com/documentation/swift/false) if the system fills the screen with your view’s contents.

<a id="Discussion"></a>

## Discussion

The screen saver application installs the new view object into the view hierarchy of an [NSWindow](../../appkit/nswindow.md) before the animation begins. This method is the designated initializer for the [ScreenSaverView](../screensaverview.md) class. Returns `self`.

# initWithFrame:isPreview: (Objective-C)

**Framework:** Screen Saver  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Creates a newly allocated screen saver view with the specified frame rectangle and preview information.

## Declaration

```objectivec
- (instancetype) initWithFrame:(NSRect) frame isPreview:(BOOL) isPreview;
```

## Parameters

- `frame`: The frame rectangle for the view.
- `isPreview`: [true](https://developer.apple.com/documentation/swift/true) if this view provides a preview for system settings, or [false](https://developer.apple.com/documentation/swift/false) if the system fills the screen with your view’s contents.

<a id="Discussion"></a>

## Discussion

The screen saver application installs the new view object into the view hierarchy of an [NSWindow](../../appkit/nswindow.md) before the animation begins. This method is the designated initializer for the [ScreenSaverView](../screensaverview.md) class. Returns `self`.
