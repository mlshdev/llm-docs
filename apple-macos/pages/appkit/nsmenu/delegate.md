> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/delegate](https://developer.apple.com/documentation/appkit/nsmenu/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The delegate of the menu.

## Declaration

```swift
weak var delegate: (any NSMenuDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

This property indicates the delegate of the menu.

You can use the delegate to populate a menu just before it is drawn and to check for key equivalents without creating a menu item.

## See Also

### Related Documentation

- [NSMenuDelegate](../nsmenudelegate.md): The optional methods implemented by delegates of [NSMenu](../nsmenu.md) objects to manage menu display and handle some events.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The delegate of the menu.

## Declaration

```objectivec
@property (weak, nullable) id<NSMenuDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

This property indicates the delegate of the menu.

You can use the delegate to populate a menu just before it is drawn and to check for key equivalents without creating a menu item.

## See Also

### Related Documentation

- [NSMenuDelegate](../nsmenudelegate.md): The optional methods implemented by delegates of [NSMenu](../nsmenu.md) objects to manage menu display and handle some events.
