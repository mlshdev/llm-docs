> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/exitfullscreenmode(options:)](https://developer.apple.com/documentation/appkit/nsview/exitfullscreenmode(options:))

# exitFullScreenMode(options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Instructs the view to exit full screen mode.

## Declaration

```swift
func exitFullScreenMode(options: [NSView.FullScreenModeOptionKey : Any]? = nil)
```

## Parameters

- `options`: A dictionary of options for the mode. For possible keys, see `Full Screen Mode Options`.

<a id="Discussion"></a>

## Discussion

When the [fullScreenModeApplicationPresentationOptions](fullscreenmodeoptionkey/fullscreenmodeapplicationpresentationoptions.md) options is specified when [enterFullScreenMode(\_:withOptions:)](enterfullscreenmode%28__withoptions_%29.md) is invoked, exiting full screen mode will restore the previously active [presentationOptions](../nsapplication/presentationoptions-swift.property.md).

## See Also

### Drawing the View in Fullscreen Mode

- [enterFullScreenMode(\_:withOptions:)](enterfullscreenmode%28__withoptions_%29.md): Sets the view to full screen mode.
- [isInFullScreenMode](isinfullscreenmode.md): A Boolean value indicating whether the view is in full screen mode.
- [NSView.FullScreenModeOptionKey](fullscreenmodeoptionkey.md): These constants are keys that you can use in the options dictionary in [enterFullScreenMode(\_:withOptions:)](enterfullscreenmode%28__withoptions_%29.md) and [exitFullScreenMode(options:)](exitfullscreenmode%28options_%29.md).

# exitFullScreenModeWithOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Instructs the view to exit full screen mode.

## Declaration

```objectivec
- (void) exitFullScreenModeWithOptions:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `options`: A dictionary of options for the mode. For possible keys, see `Full Screen Mode Options`.

<a id="Discussion"></a>

## Discussion

When the [NSFullScreenModeApplicationPresentationOptions](fullscreenmodeoptionkey/fullscreenmodeapplicationpresentationoptions.md) options is specified when [enterFullScreenMode:withOptions:](enterfullscreenmode%28__withoptions_%29.md) is invoked, exiting full screen mode will restore the previously active [presentationOptions](../nsapplication/presentationoptions-swift.property.md).

## See Also

### Drawing the View in Fullscreen Mode

- [enterFullScreenMode:withOptions:](enterfullscreenmode%28__withoptions_%29.md): Sets the view to full screen mode.
- [inFullScreenMode](isinfullscreenmode.md): A Boolean value indicating whether the view is in full screen mode.
- [NSViewFullScreenModeOptionKey](fullscreenmodeoptionkey.md): These constants are keys that you can use in the options dictionary in [enterFullScreenMode:withOptions:](enterfullscreenmode%28__withoptions_%29.md) and [exitFullScreenModeWithOptions:](exitfullscreenmode%28options_%29.md).
