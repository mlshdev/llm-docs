> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstitlebaraccessoryviewcontroller/viewwillappear()](https://developer.apple.com/documentation/appkit/nstitlebaraccessoryviewcontroller/viewwillappear())

# viewWillAppear() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called after the title bar accessory view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.

## Declaration

```swift
func viewWillAppear()
```

<a id="Discussion"></a>

## Discussion

This method is called when the accessory view is about to be added to the window’s view hierarchy or the window is about to become visible, such as coming to the front or becoming unhidden. If you override this method, you must call `super` in your implementation.

## See Also

### Responding to view events

- [viewDidAppear()](viewdidappear%28%29.md): Called when the title bar accessory view controller’s view is fully transitioned onto the screen.
- [viewDidDisappear()](viewdiddisappear%28%29.md): Called after the title bar accessory view controller’s view is removed from the window’s view hierarchy.

# viewWillAppear (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called after the title bar accessory view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.

## Declaration

```objectivec
- (void) viewWillAppear;
```

<a id="Discussion"></a>

## Discussion

This method is called when the accessory view is about to be added to the window’s view hierarchy or the window is about to become visible, such as coming to the front or becoming unhidden. If you override this method, you must call `super` in your implementation.

## See Also

### Responding to view events

- [viewDidAppear](viewdidappear%28%29.md): Called when the title bar accessory view controller’s view is fully transitioned onto the screen.
- [viewDidDisappear](viewdiddisappear%28%29.md): Called after the title bar accessory view controller’s view is removed from the window’s view hierarchy.
