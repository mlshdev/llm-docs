> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/target](https://developer.apple.com/documentation/appkit/nstoolbaritem/target)

# target (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

The object that defines the action method the toolbar item calls when clicked.

## Declaration

```swift
weak var target: AnyObject? { get set }
```

<a id="Discussion"></a>

## Discussion

If you set this property to `nil`, the toolbar item attempts to execute its action method on the first responder. If the first responder doesn’t implement the action method, it forwards the request up the responder chain.

If you assign a custom view to the toolbar item, modifying this property updates the `target` property of the view, if one exists. If the item doesn’t contain a custom view, the toolbar item manages the target object directly.

## See Also

### Performing the item’s action

- [action](action.md): The action method to call when someone clicks on the toolbar item.

# target (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

The object that defines the action method the toolbar item calls when clicked.

## Declaration

```objectivec
@property (weak, nullable) id target;
```

<a id="Discussion"></a>

## Discussion

If you set this property to `nil`, the toolbar item attempts to execute its action method on the first responder. If the first responder doesn’t implement the action method, it forwards the request up the responder chain.

If you assign a custom view to the toolbar item, modifying this property updates the `target` property of the view, if one exists. If the item doesn’t contain a custom view, the toolbar item manages the target object directly.

## See Also

### Related Documentation

- [validateToolbarItem:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/validatetoolbaritem:): Deprecated. If this method is implemented and returns `false`, NSToolbar will disable `theItem`; returning `true` causes `theItem` to be enabled.

### Performing the item’s action

- [action](action.md): The action method to call when someone clicks on the toolbar item.
