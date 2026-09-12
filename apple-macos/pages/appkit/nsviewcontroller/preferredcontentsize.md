> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/preferredcontentsize](https://developer.apple.com/documentation/appkit/nsviewcontroller/preferredcontentsize)

# preferredContentSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The desired size of the view controller’s view, in screen units.

## Declaration

```swift
var preferredContentSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to express the desired size for a view controller’s view. A parent view controller can consult the value of this property when performing layout.

## See Also

### Related Documentation

- [preferredMaximumSize](preferredmaximumsize.md): For a view controller that is part of an app extension, the largest allowable size for the app extension’s primary view, in screen units.
- [preferredMinimumSize](preferredminimumsize.md): For a view controller that is part of an app extension, the smallest allowable size for the app extension’s primary view, in screen units.
- [preferredScreenOrigin](preferredscreenorigin.md): For a view controller that is part of an app extension, the preferred screen origin.

### Managing View Layout

- [updateViewConstraints()](updateviewconstraints%28%29.md): Called during Auto Layout constraint updating to enable the view controller to mediate the process.
- [viewWillLayout()](viewwilllayout%28%29.md): Called just before the [layout()](../nsview/layout%28%29.md) method of the view controller’s view is called.
- [viewDidLayout()](viewdidlayout%28%29.md): Called immediately after the [layout()](../nsview/layout%28%29.md) method of the view controller’s view is called.

# preferredContentSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The desired size of the view controller’s view, in screen units.

## Declaration

```objectivec
@property NSSize preferredContentSize;
```

<a id="Discussion"></a>

## Discussion

Set this property to express the desired size for a view controller’s view. A parent view controller can consult the value of this property when performing layout.

## See Also

### Related Documentation

- [preferredMaximumSize](preferredmaximumsize.md): For a view controller that is part of an app extension, the largest allowable size for the app extension’s primary view, in screen units.
- [preferredMinimumSize](preferredminimumsize.md): For a view controller that is part of an app extension, the smallest allowable size for the app extension’s primary view, in screen units.
- [preferredScreenOrigin](preferredscreenorigin.md): For a view controller that is part of an app extension, the preferred screen origin.

### Managing View Layout

- [updateViewConstraints](updateviewconstraints%28%29.md): Called during Auto Layout constraint updating to enable the view controller to mediate the process.
- [viewWillLayout](viewwilllayout%28%29.md): Called just before the [layout](../nsview/layout%28%29.md) method of the view controller’s view is called.
- [viewDidLayout](viewdidlayout%28%29.md): Called immediately after the [layout](../nsview/layout%28%29.md) method of the view controller’s view is called.
