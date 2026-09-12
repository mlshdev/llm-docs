> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecellview/backgroundstyle](https://developer.apple.com/documentation/appkit/nstablecellview/backgroundstyle)

# backgroundStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

This property is automatically set by the enclosing row view to let this view know what its background looks like.

## Declaration

```swift
var backgroundStyle: NSView.BackgroundStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The property is automatically set by the enclosing [NSTableRowView](../nstablerowview.md) to let this view know what its background looks like. For instance, when the `backgroundStyle` is NSBackgroundStyleDark, the view should use a light text color.

The default implementation automatically forwards calls to all subviews that implement `setBackgroundStyle:` or are an NSControl, which have `NSCell` classes that respond to [backgroundStyle](../nscell/backgroundstyle.md).

# backgroundStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

This property is automatically set by the enclosing row view to let this view know what its background looks like.

## Declaration

```objectivec
@property NSBackgroundStyle backgroundStyle;
```

<a id="Discussion"></a>

## Discussion

The property is automatically set by the enclosing [NSTableRowView](../nstablerowview.md) to let this view know what its background looks like. For instance, when the `backgroundStyle` is NSBackgroundStyleDark, the view should use a light text color.

The default implementation automatically forwards calls to all subviews that implement `setBackgroundStyle:` or are an NSControl, which have `NSCell` classes that respond to [backgroundStyle](../nscell/backgroundstyle.md).
