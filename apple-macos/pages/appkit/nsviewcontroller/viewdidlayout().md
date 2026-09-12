> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/viewdidlayout()](https://developer.apple.com/documentation/appkit/nsviewcontroller/viewdidlayout())

# viewDidLayout() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called immediately after the [layout()](../nsview/layout%28%29.md) method of the view controller’s view is called.

## Declaration

```swift
func viewDidLayout()
```

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks to follow the completion of layout of the view controller’s view. If you override this method, call this method on `super` at some point in your implementation in case a superclass also overrides this method.

The default implementation of this method does nothing.

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md).

## See Also

### Observing data in view controllers

- [viewWillLayout()](viewwilllayout%28%29.md): Called just before the [layout()](../nsview/layout%28%29.md) method of the view controller’s view is called.
- [updateViewConstraints()](updateviewconstraints%28%29.md): Called during Auto Layout constraint updating to enable the view controller to mediate the process.

# viewDidLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called immediately after the [layout](../nsview/layout%28%29.md) method of the view controller’s view is called.

## Declaration

```objectivec
- (void) viewDidLayout;
```

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks to follow the completion of layout of the view controller’s view. If you override this method, call this method on `super` at some point in your implementation in case a superclass also overrides this method.

The default implementation of this method does nothing.

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md).

## See Also

### Observing data in view controllers

- [viewWillLayout](viewwilllayout%28%29.md): Called just before the [layout](../nsview/layout%28%29.md) method of the view controller’s view is called.
- [updateViewConstraints](updateviewconstraints%28%29.md): Called during Auto Layout constraint updating to enable the view controller to mediate the process.
