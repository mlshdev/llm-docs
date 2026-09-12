> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstitlebaraccessoryviewcontroller/viewdiddisappear()](https://developer.apple.com/documentation/appkit/nstitlebaraccessoryviewcontroller/viewdiddisappear())

# viewDidDisappear() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called after the title bar accessory view controller’s view is removed from the window’s view hierarchy.

## Declaration

```swift
func viewDidDisappear()
```

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks associated with removing the title bar accessory view controller’s view from the window’s view hierarchy—such as releasing resources not needed when the view is not visible or no longer part of the window—but you must call `super` in your implementation.

## See Also

### Responding to view events

- [viewDidAppear()](viewdidappear%28%29.md): Called when the title bar accessory view controller’s view is fully transitioned onto the screen.
- [viewWillAppear()](viewwillappear%28%29.md): Called after the title bar accessory view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.

# viewDidDisappear (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called after the title bar accessory view controller’s view is removed from the window’s view hierarchy.

## Declaration

```objectivec
- (void) viewDidDisappear;
```

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks associated with removing the title bar accessory view controller’s view from the window’s view hierarchy—such as releasing resources not needed when the view is not visible or no longer part of the window—but you must call `super` in your implementation.

## See Also

### Responding to view events

- [viewDidAppear](viewdidappear%28%29.md): Called when the title bar accessory view controller’s view is fully transitioned onto the screen.
- [viewWillAppear](viewwillappear%28%29.md): Called after the title bar accessory view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.
