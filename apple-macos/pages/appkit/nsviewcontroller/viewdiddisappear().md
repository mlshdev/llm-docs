> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/viewdiddisappear()](https://developer.apple.com/documentation/appkit/nsviewcontroller/viewdiddisappear())

# viewDidDisappear() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called after the view controller’s view is removed from the view hierarchy in a window.

## Declaration

```swift
func viewDidDisappear()
```

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks associated with removing the view controller’s view from the window’s view hierarchy, such as releasing resources not needed when the view is not visible or no longer part of the window.

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
- [viewWillDisappear()](viewwilldisappear%28%29.md): Called when the view controller’s view is about to be removed from the view hierarchy in the window.

# viewDidDisappear (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called after the view controller’s view is removed from the view hierarchy in a window.

## Declaration

```objectivec
- (void) viewDidDisappear;
```

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks associated with removing the view controller’s view from the window’s view hierarchy, such as releasing resources not needed when the view is not visible or no longer part of the window.

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
- [viewWillDisappear](viewwilldisappear%28%29.md): Called when the view controller’s view is about to be removed from the view hierarchy in the window.
