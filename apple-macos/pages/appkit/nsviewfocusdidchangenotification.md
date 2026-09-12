> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewfocusdidchangenotification](https://developer.apple.com/documentation/appkit/nsviewfocusdidchangenotification)

# NSViewFocusDidChangeNotification

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Deprecated in macOS 10.4 and later. Posted for an `NSView` object and each of its descendants (recursively) whenever the frame or bounds geometry of the view changed.

## Declaration

```objectivec
extern NSNotificationName NSViewFocusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Instead use `NSViewBoundsDidChangeNotification` and `NSViewFrameDidChangeNotification` to get the same information provided by this notification.

The notification object is the view whose geometry changed. This notification does not contain a `userInfo` dictionary.

## See Also

### Related Documentation

- [NSViewFrameDidChangeNotification](nsview/framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.
- [NSViewBoundsDidChangeNotification](nsview/boundsdidchangenotification.md): A notification that posts when the view’s bounds rectangle changes to a new value independently of the frame rectangle.

### Notifications

- [NSViewNoInstrinsicMetric](nsviewnoinstrinsicmetric.md): Deprecated. Used to indicate that a view has no intrinsic metric for a given numeric property.
- [NSViewGlobalFrameDidChangeNotification](nsview/globalframedidchangenotification.md): Deprecated. Posted whenever an `NSView` object that has attached surfaces (that is, `NSOpenGLContext` objects) moves to a different screen, or other cases where the `NSOpenGLContext` object needs to be updated.
