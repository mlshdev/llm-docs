> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewnoinstrinsicmetric](https://developer.apple.com/documentation/appkit/nsviewnoinstrinsicmetric)

# NSViewNoInstrinsicMetric

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 10.14)

Used to indicate that a view has no intrinsic metric for a given numeric property.

## Declaration

```objectivec
extern const CGFloat NSViewNoInstrinsicMetric;
```

## See Also

### Notifications

- [NSViewFocusDidChangeNotification](nsviewfocusdidchangenotification.md): Deprecated. Deprecated in macOS 10.4 and later. Posted for an `NSView` object and each of its descendants (recursively) whenever the frame or bounds geometry of the view changed.
- [NSViewGlobalFrameDidChangeNotification](nsview/globalframedidchangenotification.md): Deprecated. Posted whenever an `NSView` object that has attached surfaces (that is, `NSOpenGLContext` objects) moves to a different screen, or other cases where the `NSOpenGLContext` object needs to be updated.
