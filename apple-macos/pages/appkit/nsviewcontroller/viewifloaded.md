> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/viewifloaded](https://developer.apple.com/documentation/appkit/nsviewcontroller/viewifloaded)

# viewIfLoaded (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

## Declaration

```swift
var viewIfLoaded: NSView? { get }
```

## See Also

### Responding to View Events

- [viewDidLoad()](viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [loadViewIfNeeded()](loadviewifneeded%28%29.md)
- [isViewLoaded](isviewloaded.md): A Boolean value indicating whether the view controller’s view is loaded into memory.
- [viewWillAppear()](viewwillappear%28%29.md): Called after the view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.
- [viewDidAppear()](viewdidappear%28%29.md): Called when the view controller’s view is fully transitioned onto the screen.
- [viewWillDisappear()](viewwilldisappear%28%29.md): Called when the view controller’s view is about to be removed from the view hierarchy in the window.
- [viewDidDisappear()](viewdiddisappear%28%29.md): Called after the view controller’s view is removed from the view hierarchy in a window.

# viewIfLoaded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

## Declaration

```objectivec
@property (strong, readonly, nullable) NSView * viewIfLoaded;
```

## See Also

### Responding to View Events

- [viewDidLoad](viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [loadViewIfNeeded](loadviewifneeded%28%29.md)
- [viewLoaded](isviewloaded.md): A Boolean value indicating whether the view controller’s view is loaded into memory.
- [viewWillAppear](viewwillappear%28%29.md): Called after the view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.
- [viewDidAppear](viewdidappear%28%29.md): Called when the view controller’s view is fully transitioned onto the screen.
- [viewWillDisappear](viewwilldisappear%28%29.md): Called when the view controller’s view is about to be removed from the view hierarchy in the window.
- [viewDidDisappear](viewdiddisappear%28%29.md): Called after the view controller’s view is removed from the view hierarchy in a window.
