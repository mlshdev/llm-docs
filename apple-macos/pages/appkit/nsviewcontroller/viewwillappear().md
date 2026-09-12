> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/viewwillappear()](https://developer.apple.com/documentation/appkit/nsviewcontroller/viewwillappear())

# viewWillAppear() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called after the view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.

## Declaration

```swift
func viewWillAppear()
```

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks prior to a view controller’s view getting added to view hierarchy, such as setting the view’s highlight color. This method is called when:

- The view is about to be added to the view hierarchy of the view controller
- The view controller’s window is about to become visible, such as coming to the front or becoming unhidden

If you override this method, call this method on `super` at some point in your implementation in case a superclass also overrides this method.

The default implementation of this method does nothing.

## See Also

### Responding to View Events

- [viewDidLoad()](viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [loadViewIfNeeded()](loadviewifneeded%28%29.md)
- [isViewLoaded](isviewloaded.md): A Boolean value indicating whether the view controller’s view is loaded into memory.
- [viewIfLoaded](viewifloaded.md)
- [viewDidAppear()](viewdidappear%28%29.md): Called when the view controller’s view is fully transitioned onto the screen.
- [viewWillDisappear()](viewwilldisappear%28%29.md): Called when the view controller’s view is about to be removed from the view hierarchy in the window.
- [viewDidDisappear()](viewdiddisappear%28%29.md): Called after the view controller’s view is removed from the view hierarchy in a window.

# viewWillAppear (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called after the view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.

## Declaration

```objectivec
- (void) viewWillAppear;
```

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks prior to a view controller’s view getting added to view hierarchy, such as setting the view’s highlight color. This method is called when:

- The view is about to be added to the view hierarchy of the view controller
- The view controller’s window is about to become visible, such as coming to the front or becoming unhidden

If you override this method, call this method on `super` at some point in your implementation in case a superclass also overrides this method.

The default implementation of this method does nothing.

## See Also

### Responding to View Events

- [viewDidLoad](viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [loadViewIfNeeded](loadviewifneeded%28%29.md)
- [viewLoaded](isviewloaded.md): A Boolean value indicating whether the view controller’s view is loaded into memory.
- [viewIfLoaded](viewifloaded.md)
- [viewDidAppear](viewdidappear%28%29.md): Called when the view controller’s view is fully transitioned onto the screen.
- [viewWillDisappear](viewwilldisappear%28%29.md): Called when the view controller’s view is about to be removed from the view hierarchy in the window.
- [viewDidDisappear](viewdiddisappear%28%29.md): Called after the view controller’s view is removed from the view hierarchy in a window.
