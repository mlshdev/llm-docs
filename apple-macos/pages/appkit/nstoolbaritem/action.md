> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/action](https://developer.apple.com/documentation/appkit/nstoolbaritem/action)

# action (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

The action method to call when someone clicks on the toolbar item.

## Declaration

```swift
var action: Selector? { get set }
```

<a id="Discussion"></a>

## Discussion

If you assign a custom view to the toolbar item, modifying this property updates the `action` property of the view or calls the `setAction:` method, if one of them exists. If the item doesn’t contain a custom view, the toolbar item manages the action directly.

## See Also

### Performing the item’s action

- [target](target.md): The object that defines the action method the toolbar item calls when clicked.

# action (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

The action method to call when someone clicks on the toolbar item.

## Declaration

```objectivec
@property (nullable) SEL action;
```

<a id="Discussion"></a>

## Discussion

If you assign a custom view to the toolbar item, modifying this property updates the `action` property of the view or calls the `setAction:` method, if one of them exists. If the item doesn’t contain a custom view, the toolbar item manages the action directly.

## See Also

### Performing the item’s action

- [target](target.md): The object that defines the action method the toolbar item calls when clicked.
