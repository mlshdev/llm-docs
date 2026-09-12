> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/viewdidload()](https://developer.apple.com/documentation/appkit/nsviewcontroller/viewdidload())

# viewDidLoad() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called after the view controller’s view has been loaded into memory.

## Declaration

```swift
func viewDidLoad()
```

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks to immediately follow the setting of the [view](view.md) property.

Typically, your override would perform one-time instantiation and initialization of the contents of the view controller’s view. If you override this method, call this method on `super` at some point in your implementation in case a superclass also overrides this method.

For a view controller originating in a nib file, this method is called immediately after the [view](view.md) property is set. For a view controller created programmatically, this method is called immediately after the [loadView()](loadview%28%29.md) method completes.

The default implementation of this method does nothing.

## See Also

### Responding to View Events

- [loadViewIfNeeded()](loadviewifneeded%28%29.md)
- [isViewLoaded](isviewloaded.md): A Boolean value indicating whether the view controller’s view is loaded into memory.
- [viewIfLoaded](viewifloaded.md)
- [viewWillAppear()](viewwillappear%28%29.md): Called after the view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.
- [viewDidAppear()](viewdidappear%28%29.md): Called when the view controller’s view is fully transitioned onto the screen.
- [viewWillDisappear()](viewwilldisappear%28%29.md): Called when the view controller’s view is about to be removed from the view hierarchy in the window.
- [viewDidDisappear()](viewdiddisappear%28%29.md): Called after the view controller’s view is removed from the view hierarchy in a window.

# viewDidLoad (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called after the view controller’s view has been loaded into memory.

## Declaration

```objectivec
- (void) viewDidLoad;
```

<a id="Discussion"></a>

## Discussion

You can override this method to perform tasks to immediately follow the setting of the [view](view.md) property.

Typically, your override would perform one-time instantiation and initialization of the contents of the view controller’s view. If you override this method, call this method on `super` at some point in your implementation in case a superclass also overrides this method.

For a view controller originating in a nib file, this method is called immediately after the [view](view.md) property is set. For a view controller created programmatically, this method is called immediately after the [loadView](loadview%28%29.md) method completes.

The default implementation of this method does nothing.

## See Also

### Responding to View Events

- [loadViewIfNeeded](loadviewifneeded%28%29.md)
- [viewLoaded](isviewloaded.md): A Boolean value indicating whether the view controller’s view is loaded into memory.
- [viewIfLoaded](viewifloaded.md)
- [viewWillAppear](viewwillappear%28%29.md): Called after the view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.
- [viewDidAppear](viewdidappear%28%29.md): Called when the view controller’s view is fully transitioned onto the screen.
- [viewWillDisappear](viewwilldisappear%28%29.md): Called when the view controller’s view is about to be removed from the view hierarchy in the window.
- [viewDidDisappear](viewdiddisappear%28%29.md): Called after the view controller’s view is removed from the view hierarchy in a window.
