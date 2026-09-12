> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/globalframedidchangenotification](https://developer.apple.com/documentation/appkit/nsview/globalframedidchangenotification)

# globalFrameDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Posted whenever an `NSView` object that has attached surfaces (that is, `NSOpenGLContext` objects) moves to a different screen, or other cases where the `NSOpenGLContext` object needs to be updated.

> Use NSOpenGLView instead.

## Declaration

```swift
class let globalFrameDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the surface’s view. This notification does not contain a `userInfo` dictionary.

# NSViewGlobalFrameDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Posted whenever an `NSView` object that has attached surfaces (that is, `NSOpenGLContext` objects) moves to a different screen, or other cases where the `NSOpenGLContext` object needs to be updated.

> Use NSOpenGLView instead.

## Declaration

```objectivec
extern NSNotificationName NSViewGlobalFrameDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the surface’s view. This notification does not contain a `userInfo` dictionary.

## See Also

### Notifications

- [NSViewNoInstrinsicMetric](../nsviewnoinstrinsicmetric.md): Deprecated. Used to indicate that a view has no intrinsic metric for a given numeric property.
- [NSViewFocusDidChangeNotification](../nsviewfocusdidchangenotification.md): Deprecated. Deprecated in macOS 10.4 and later. Posted for an `NSView` object and each of its descendants (recursively) whenever the frame or bounds geometry of the view changed.
