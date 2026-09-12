> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/viewwilllayout()](https://developer.apple.com/documentation/appkit/nsviewcontroller/viewwilllayout())

# viewWillLayout() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called just before the [layout()](../nsview/layout%28%29.md) method of the view controller’s view is called.

## Declaration

```swift
func viewWillLayout()
```

## Mentioned In

- [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md)

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks to precede the layout of the view controller’s view, such as adjusting Auto Layout constraints. If you override this method, call this method on `super` at some point in your implementation in case a superclass also overrides this method.

The default implementation of this method does nothing.

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md).

## See Also

### Observing data in view controllers

- [viewDidLayout()](viewdidlayout%28%29.md): Called immediately after the [layout()](../nsview/layout%28%29.md) method of the view controller’s view is called.
- [updateViewConstraints()](updateviewconstraints%28%29.md): Called during Auto Layout constraint updating to enable the view controller to mediate the process.

# viewWillLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called just before the [layout](../nsview/layout%28%29.md) method of the view controller’s view is called.

## Declaration

```objectivec
- (void) viewWillLayout;
```

## Mentioned In

- [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md)

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks to precede the layout of the view controller’s view, such as adjusting Auto Layout constraints. If you override this method, call this method on `super` at some point in your implementation in case a superclass also overrides this method.

The default implementation of this method does nothing.

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md).

## See Also

### Observing data in view controllers

- [viewDidLayout](viewdidlayout%28%29.md): Called immediately after the [layout](../nsview/layout%28%29.md) method of the view controller’s view is called.
- [updateViewConstraints](updateviewconstraints%28%29.md): Called during Auto Layout constraint updating to enable the view controller to mediate the process.
