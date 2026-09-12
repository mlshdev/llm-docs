> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingdefault/viewsizechanged(_:)](https://developer.apple.com/documentation/appkit/nscolorpickingdefault/viewsizechanged(_:))

# viewSizeChanged(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the recever when the color panel’s view size changes in a way that might affect the color picker.

## Declaration

```swift
@MainActor func viewSizeChanged(_ sender: Any?)
```

## Parameters

- `sender`: The `NSColorPanel` that contains the color picker.

<a id="Discussion"></a>

## Discussion

Use this method to perform special preparation when resizing the color picker’s view. Because this method is invoked only as appropriate, it’s better to implement this method than to override the method `superviewSizeChanged:` for the `NSView` in which the color picker’s user interface is contained.

## See Also

### Related Documentation

- [provideNewView(\_:)](../nscolorpickingcustom/providenewview%28__%29.md): Returns the view containing the receiver’s user interface.

### Handling Events

- [alphaControlAddedOrRemoved(\_:)](alphacontroladdedorremoved%28__%29.md): Sent when the color panel’s opacity controls have been hidden or displayed.

# viewSizeChanged: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the recever when the color panel’s view size changes in a way that might affect the color picker.

## Declaration

```objectivec
- (void) viewSizeChanged:(id) sender;
```

## Parameters

- `sender`: The `NSColorPanel` that contains the color picker.

<a id="Discussion"></a>

## Discussion

Use this method to perform special preparation when resizing the color picker’s view. Because this method is invoked only as appropriate, it’s better to implement this method than to override the method `superviewSizeChanged:` for the `NSView` in which the color picker’s user interface is contained.

## See Also

### Related Documentation

- [provideNewView:](../nscolorpickingcustom/providenewview%28__%29.md): Returns the view containing the receiver’s user interface.

### Handling Events

- [alphaControlAddedOrRemoved:](alphacontroladdedorremoved%28__%29.md): Sent when the color panel’s opacity controls have been hidden or displayed.
