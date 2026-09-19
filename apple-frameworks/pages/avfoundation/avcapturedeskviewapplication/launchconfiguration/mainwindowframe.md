> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedeskviewapplication/launchconfiguration/mainwindowframe

# mainWindowFrame (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.1+ · macOS 13.0+

The frame for Desk View after it launches.

## Declaration

```swift
var mainWindowFrame: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [zero](../../../corefoundation/cgrect/zero.md), which tells the system to use the previously set frame. The system uses global screen coordinates to display the frame. When Desk View launches from a native macOS app, the window origin is bottom-left. When it launches from a [Mac Catalyst](../../../uikit/mac-catalyst.md) app, the window origin is top-left.

## See Also

### Customizing the presentation

- [requiresSetUpModeCompletion](requiressetupmodecompletion.md): A Boolean value that specifies whether the system requires the user to complete setup mode before it executes the completion handler.

# mainWindowFrame (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.1+ · macOS 13.0+

The frame for Desk View after it launches.

## Declaration

```objectivec
@property CGRect mainWindowFrame;
```

<a id="Discussion"></a>

## Discussion

The default value is [zero](../../../corefoundation/cgrect/zero.md), which tells the system to use the previously set frame. The system uses global screen coordinates to display the frame. When Desk View launches from a native macOS app, the window origin is bottom-left. When it launches from a [Mac Catalyst](../../../uikit/mac-catalyst.md) app, the window origin is top-left.

## See Also

### Customizing the presentation

- [requiresSetUpModeCompletion](requiressetupmodecompletion.md): A Boolean value that specifies whether the system requires the user to complete setup mode before it executes the completion handler.
