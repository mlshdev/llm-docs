> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/validate()](https://developer.apple.com/documentation/appkit/nstoolbaritem/validate())

# validate() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Validates the toolbar item’s menu and its ability to perfrom its action.

## Declaration

```swift
func validate()
```

<a id="Discussion"></a>

## Discussion

Typically, you don’t call this method directly. When automatic validation is enabled, the toolbar calls this method to validate the item. For standard toolbar items — that is, items without a custom view — the validation process checks whether the item can perform its associated action successfully and enables or disables the item accordingly. The process also validates the associated menu item. When someone switches to another app or window, the automatic validation process disables the item automatically.

If the toolbar item has a custom view, subclass [NSToolbarItem](../nstoolbaritem.md) and override this method to perform the validation yourself. After you validate your custom toolbar item, update the [isEnabled](isenabled.md) property. You don’t need to call `super` in your implementation.

If you disable automatic validation, toolbar items remain enabled and clickable, including when someone switches to another app or window. However, you can still call this method manually to validate the toolbar item.

## See Also

### Related Documentation

- [isEnabled](isenabled.md): A Boolean value that indicates whether the item is enabled.

### Validating the item

- [autovalidates](autovalidates.md): A Boolean value that indicates whether the toolbar automatically validates the item.

# validate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Validates the toolbar item’s menu and its ability to perfrom its action.

## Declaration

```objectivec
- (void) validate;
```

<a id="Discussion"></a>

## Discussion

Typically, you don’t call this method directly. When automatic validation is enabled, the toolbar calls this method to validate the item. For standard toolbar items — that is, items without a custom view — the validation process checks whether the item can perform its associated action successfully and enables or disables the item accordingly. The process also validates the associated menu item. When someone switches to another app or window, the automatic validation process disables the item automatically.

If the toolbar item has a custom view, subclass [NSToolbarItem](../nstoolbaritem.md) and override this method to perform the validation yourself. After you validate your custom toolbar item, update the [enabled](isenabled.md) property. You don’t need to call `super` in your implementation.

If you disable automatic validation, toolbar items remain enabled and clickable, including when someone switches to another app or window. However, you can still call this method manually to validate the toolbar item.

## See Also

### Related Documentation

- [enabled](isenabled.md): A Boolean value that indicates whether the item is enabled.

### Validating the item

- [autovalidates](autovalidates.md): A Boolean value that indicates whether the toolbar automatically validates the item.
