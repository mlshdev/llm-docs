> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/enterfullscreenmode(_:withoptions:)](https://developer.apple.com/documentation/appkit/nsview/enterfullscreenmode(_:withoptions:))

# enterFullScreenMode(\_:withOptions:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the view to full screen mode.

## Declaration

```swift
func enterFullScreenMode(_ screen: NSScreen, withOptions options: [NSView.FullScreenModeOptionKey : Any]? = nil) -> Bool
```

## Parameters

- `screen`: The screen the view should cover.
- `options`: A dictionary of options for the mode. For possible keys, see `Full Screen Mode Options`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view was able to enter full screen mode, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When the [fullScreenModeApplicationPresentationOptions](fullscreenmodeoptionkey/fullscreenmodeapplicationpresentationoptions.md) is contained in the options dictionary, the presentation options that were in effect when this method is invoked are not altered, and no displays are captured.

If you do not wish to capture the screen when going to full screen mode, you can add [fullScreenModeApplicationPresentationOptions](fullscreenmodeoptionkey/fullscreenmodeapplicationpresentationoptions.md) to the options dictionary with the value returned by the [presentationOptions](../nsapplication/presentationoptions-swift.property.md).

When the [fullScreenModeApplicationPresentationOptions](fullscreenmodeoptionkey/fullscreenmodeapplicationpresentationoptions.md) options is specified, exiting full screen mode using [exitFullScreenMode(options:)](exitfullscreenmode%28options_%29.md) will restore the previously active [presentationOptions](../nsapplication/presentationoptions-swift.property.md).

<a id="Special-Considerations"></a>

### Special Considerations

In OS X v 10.5, invoking this method when the view was not in a window would cause an exception. In macOS 10.6 and later, you can now send this message to a view not in a window. For applications that must also run in OS X v 10.5, a simple workaround is to place the view in an offscreen window.

## See Also

### Drawing the View in Fullscreen Mode

- [exitFullScreenMode(options:)](exitfullscreenmode%28options_%29.md): Instructs the view to exit full screen mode.
- [isInFullScreenMode](isinfullscreenmode.md): A Boolean value indicating whether the view is in full screen mode.
- [NSView.FullScreenModeOptionKey](fullscreenmodeoptionkey.md): These constants are keys that you can use in the options dictionary in [enterFullScreenMode(\_:withOptions:)](enterfullscreenmode%28__withoptions_%29.md) and [exitFullScreenMode(options:)](exitfullscreenmode%28options_%29.md).

# enterFullScreenMode:withOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the view to full screen mode.

## Declaration

```objectivec
- (BOOL) enterFullScreenMode:(NSScreen *) screen withOptions:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `screen`: The screen the view should cover.
- `options`: A dictionary of options for the mode. For possible keys, see `Full Screen Mode Options`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view was able to enter full screen mode, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When the [NSFullScreenModeApplicationPresentationOptions](fullscreenmodeoptionkey/fullscreenmodeapplicationpresentationoptions.md) is contained in the options dictionary, the presentation options that were in effect when this method is invoked are not altered, and no displays are captured.

If you do not wish to capture the screen when going to full screen mode, you can add [NSFullScreenModeApplicationPresentationOptions](fullscreenmodeoptionkey/fullscreenmodeapplicationpresentationoptions.md) to the options dictionary with the value returned by the [presentationOptions](../nsapplication/presentationoptions-swift.property.md).

When the [NSFullScreenModeApplicationPresentationOptions](fullscreenmodeoptionkey/fullscreenmodeapplicationpresentationoptions.md) options is specified, exiting full screen mode using [exitFullScreenModeWithOptions:](exitfullscreenmode%28options_%29.md) will restore the previously active [presentationOptions](../nsapplication/presentationoptions-swift.property.md).

<a id="Special-Considerations"></a>

### Special Considerations

In OS X v 10.5, invoking this method when the view was not in a window would cause an exception. In macOS 10.6 and later, you can now send this message to a view not in a window. For applications that must also run in OS X v 10.5, a simple workaround is to place the view in an offscreen window.

## See Also

### Drawing the View in Fullscreen Mode

- [exitFullScreenModeWithOptions:](exitfullscreenmode%28options_%29.md): Instructs the view to exit full screen mode.
- [inFullScreenMode](isinfullscreenmode.md): A Boolean value indicating whether the view is in full screen mode.
- [NSViewFullScreenModeOptionKey](fullscreenmodeoptionkey.md): These constants are keys that you can use in the options dictionary in [enterFullScreenMode:withOptions:](enterfullscreenmode%28__withoptions_%29.md) and [exitFullScreenModeWithOptions:](exitfullscreenmode%28options_%29.md).
