> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingdefault/init(pickermask:colorpanel:)](https://developer.apple.com/documentation/appkit/nscolorpickingdefault/init(pickermask:colorpanel:))

# init(pickerMask:colorPanel:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes the receiver with a given color panel and its mode.

## Declaration

```swift
@MainActor init?(pickerMask mask: Int, colorPanel owningColorPanel: NSColorPanel)
```

## Parameters

- `mask`: A mask indicating the various color picker modes supported by the color panel. This is determined by the argument to the `NSColorPanel` method [setPickerMask(\_:)](../nscolorpanel/setpickermask%28__%29.md). If it has not been set, `panelModes` is `NSColorPanelAllModesMask`. If your color picker supports any additional modes, you should invoke the [setPickerMask(\_:)](../nscolorpanel/setpickermask%28__%29.md) method when your application initializes to notify the `NSColorPanel` class. The standard mode constants are defined in [Choosing the Color Pickers in a Color Panel](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DrawColor/Tasks/ChoosingColorPickers.html#//apple_ref/doc/uid/20000792).
- `owningColorPanel`: The color panel than owns the receiver.

<a id="return-value"></a>

## Return Value

If your color picker responds to any of the modes represented in `panelModes`, it should perform its initialization and return an initialized color picker. Color pickers that do so have their buttons inserted in the color panel and continue to receive messages from the panel as the user manipulates it. If the color picker doesn’t respond to any of the modes represented in `panelModes`, it should do nothing and return `nil`.

<a id="Discussion"></a>

## Discussion

This method is sent by the `NSColorPanel` to all implementors of the color-picking protocols when the application’s color panel is first initialized. In order for your color picker to receive this message, it must have a bundle in your application’s “ColorPickers” directory (described in [Adding Custom Color Pickers to a Color Panel](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DrawColor/Tasks/AddingColorPickers.html#//apple_ref/doc/uid/20000793)).

This method should examine the mask and determine whether it supports any of the modes included there. You may also check the value in `mask` to enable or disable any subpickers or optional controls implemented by your color picker. Your color picker may also retain `owningColorPanel` in an instance variable for future communication with the color panel.

This method is provided to initialize your color picker; however, much of a color picker’s initialization may be done lazily through the `NSColorPickingCustom` protocol’s [provideNewView(\_:)](../nscolorpickingcustom/providenewview%28__%29.md) method.

## See Also

### Related Documentation

- [NSColorPickingCustom](../nscolorpickingcustom.md): A set of methods that provides a way to add color pickers—custom user interfaces for color selection—to an app’s color panel.
- [setPickerMask(\_:)](../nscolorpanel/setpickermask%28__%29.md): Determines which color selection modes are available in an application’s `NSColorPanel`.

# initWithPickerMask:colorPanel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes the receiver with a given color panel and its mode.

## Declaration

```objectivec
- (instancetype) initWithPickerMask:(NSUInteger) mask colorPanel:(NSColorPanel *) owningColorPanel;
```

## Parameters

- `mask`: A mask indicating the various color picker modes supported by the color panel. This is determined by the argument to the `NSColorPanel` method [setPickerMask:](../nscolorpanel/setpickermask%28__%29.md). If it has not been set, `panelModes` is `NSColorPanelAllModesMask`. If your color picker supports any additional modes, you should invoke the [setPickerMask:](../nscolorpanel/setpickermask%28__%29.md) method when your application initializes to notify the `NSColorPanel` class. The standard mode constants are defined in [Choosing the Color Pickers in a Color Panel](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DrawColor/Tasks/ChoosingColorPickers.html#//apple_ref/doc/uid/20000792).
- `owningColorPanel`: The color panel than owns the receiver.

<a id="return-value"></a>

## Return Value

If your color picker responds to any of the modes represented in `panelModes`, it should perform its initialization and return an initialized color picker. Color pickers that do so have their buttons inserted in the color panel and continue to receive messages from the panel as the user manipulates it. If the color picker doesn’t respond to any of the modes represented in `panelModes`, it should do nothing and return `nil`.

<a id="Discussion"></a>

## Discussion

This method is sent by the `NSColorPanel` to all implementors of the color-picking protocols when the application’s color panel is first initialized. In order for your color picker to receive this message, it must have a bundle in your application’s “ColorPickers” directory (described in [Adding Custom Color Pickers to a Color Panel](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DrawColor/Tasks/AddingColorPickers.html#//apple_ref/doc/uid/20000793)).

This method should examine the mask and determine whether it supports any of the modes included there. You may also check the value in `mask` to enable or disable any subpickers or optional controls implemented by your color picker. Your color picker may also retain `owningColorPanel` in an instance variable for future communication with the color panel.

This method is provided to initialize your color picker; however, much of a color picker’s initialization may be done lazily through the `NSColorPickingCustom` protocol’s [provideNewView:](../nscolorpickingcustom/providenewview%28__%29.md) method.

## See Also

### Related Documentation

- [NSColorPickingCustom](../nscolorpickingcustom.md): A set of methods that provides a way to add color pickers—custom user interfaces for color selection—to an app’s color panel.
- [setPickerMask:](../nscolorpanel/setpickermask%28__%29.md): Determines which color selection modes are available in an application’s `NSColorPanel`.
