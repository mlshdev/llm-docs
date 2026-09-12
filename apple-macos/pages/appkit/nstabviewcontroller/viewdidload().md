> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/viewdidload()](https://developer.apple.com/documentation/appkit/nstabviewcontroller/viewdidload())

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

The tab view controller overrides this method and uses it to configure and layout the tab view and its contents. You can override it in your own subclasses to perform any custom initialization. For example, to replace the default tab view, override this method and set the value of the [tabView](tabview.md) property before calling `super`.

If you override this method, you must call `super` in your implementation.

## See Also

### Responding to Tab View Events

- [tabView(\_:shouldSelect:)](tabview%28__shouldselect_%29.md): Asks the tab view controller if the specified tab should be selected.
- [tabView(\_:willSelect:)](tabview%28__willselect_%29.md): Informs the tab view controller that the specified tab is about to be selected.
- [tabView(\_:didSelect:)](tabview%28__didselect_%29.md): Informs the tab view controller that the specified tab was selected.

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

The tab view controller overrides this method and uses it to configure and layout the tab view and its contents. You can override it in your own subclasses to perform any custom initialization. For example, to replace the default tab view, override this method and set the value of the [tabView](tabview.md) property before calling `super`.

If you override this method, you must call `super` in your implementation.

## See Also

### Responding to Tab View Events

- [tabView:shouldSelectTabViewItem:](tabview%28__shouldselect_%29.md): Asks the tab view controller if the specified tab should be selected.
- [tabView:willSelectTabViewItem:](tabview%28__willselect_%29.md): Informs the tab view controller that the specified tab is about to be selected.
- [tabView:didSelectTabViewItem:](tabview%28__didselect_%29.md): Informs the tab view controller that the specified tab was selected.
