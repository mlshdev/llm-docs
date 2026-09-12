> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstitlebaraccessoryviewcontroller/viewdidappear()](https://developer.apple.com/documentation/appkit/nstitlebaraccessoryviewcontroller/viewdidappear())

# viewDidAppear() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called when the title bar accessory view controller’s view is fully transitioned onto the screen.

## Declaration

```swift
func viewDidAppear()
```

<a id="Discussion"></a>

## Discussion

This method is called after the completion of all drawing and animations involved in the initial appearance of the accessory view. You can override this method to perform tasks appropriate for that time—such as work that should not interfere with the presentation animation, or starting an animation that you want to begin after the view appears—but you must call `super` in your implementation.

## See Also

### Responding to view events

- [viewDidDisappear()](viewdiddisappear%28%29.md): Called after the title bar accessory view controller’s view is removed from the window’s view hierarchy.
- [viewWillAppear()](viewwillappear%28%29.md): Called after the title bar accessory view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.

# viewDidAppear (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called when the title bar accessory view controller’s view is fully transitioned onto the screen.

## Declaration

```objectivec
- (void) viewDidAppear;
```

<a id="Discussion"></a>

## Discussion

This method is called after the completion of all drawing and animations involved in the initial appearance of the accessory view. You can override this method to perform tasks appropriate for that time—such as work that should not interfere with the presentation animation, or starting an animation that you want to begin after the view appears—but you must call `super` in your implementation.

## See Also

### Responding to view events

- [viewDidDisappear](viewdiddisappear%28%29.md): Called after the title bar accessory view controller’s view is removed from the window’s view hierarchy.
- [viewWillAppear](viewwillappear%28%29.md): Called after the title bar accessory view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.
