> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/viewwilldisappear()](https://developer.apple.com/documentation/appkit/nsviewcontroller/viewwilldisappear())

# viewWillDisappear() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called when the view controller’s view is about to be removed from the view hierarchy in the window.

## Declaration

```swift
func viewWillDisappear()
```

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks that are to precede the disappearance of the view controller’s view, such as stopping a continuous animation that you started in response to the [viewDidAppear()](viewdidappear%28%29.md) method call. This method is called when:

- The view is about to be removed from the view hierarchy of the window
- The view is about to be hidden or obscured, such as in the case of a view controller whose parent is a tab view controller and the user switched to another tab
- The window is being closed

If you override this method, call this method on `super` at some point in your implementation in case a superclass also overrides this method.

The default implementation of this method does nothing.

## See Also

### Responding to View Events

- [viewDidLoad()](viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [loadViewIfNeeded()](loadviewifneeded%28%29.md)
- [isViewLoaded](isviewloaded.md): A Boolean value indicating whether the view controller’s view is loaded into memory.
- [viewIfLoaded](viewifloaded.md)
- [viewWillAppear()](viewwillappear%28%29.md): Called after the view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.
- [viewDidAppear()](viewdidappear%28%29.md): Called when the view controller’s view is fully transitioned onto the screen.
- [viewDidDisappear()](viewdiddisappear%28%29.md): Called after the view controller’s view is removed from the view hierarchy in a window.

# viewWillDisappear (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called when the view controller’s view is about to be removed from the view hierarchy in the window.

## Declaration

```objectivec
- (void) viewWillDisappear;
```

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks that are to precede the disappearance of the view controller’s view, such as stopping a continuous animation that you started in response to the [viewDidAppear](viewdidappear%28%29.md) method call. This method is called when:

- The view is about to be removed from the view hierarchy of the window
- The view is about to be hidden or obscured, such as in the case of a view controller whose parent is a tab view controller and the user switched to another tab
- The window is being closed

If you override this method, call this method on `super` at some point in your implementation in case a superclass also overrides this method.

The default implementation of this method does nothing.

## See Also

### Responding to View Events

- [viewDidLoad](viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [loadViewIfNeeded](loadviewifneeded%28%29.md)
- [viewLoaded](isviewloaded.md): A Boolean value indicating whether the view controller’s view is loaded into memory.
- [viewIfLoaded](viewifloaded.md)
- [viewWillAppear](viewwillappear%28%29.md): Called after the view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.
- [viewDidAppear](viewdidappear%28%29.md): Called when the view controller’s view is fully transitioned onto the screen.
- [viewDidDisappear](viewdiddisappear%28%29.md): Called after the view controller’s view is removed from the view hierarchy in a window.
