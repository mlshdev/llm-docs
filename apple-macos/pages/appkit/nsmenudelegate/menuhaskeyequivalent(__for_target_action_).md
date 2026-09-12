> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenudelegate/menuhaskeyequivalent(_:for:target:action:)](https://developer.apple.com/documentation/appkit/nsmenudelegate/menuhaskeyequivalent(_:for:target:action:))

# menuHasKeyEquivalent(\_:for:target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Invoked to allow the delegate to return the target and action for a key-down event.

## Declaration

```swift
@MainActor optional func menuHasKeyEquivalent(_ menu: NSMenu, for event: NSEvent, target: AutoreleasingUnsafeMutablePointer<AnyObject?>, action: UnsafeMutablePointer<Selector?>) -> Bool
```

## Parameters

- `menu`: The menu object sending the delegation message.
- `event`: An [NSEvent](../nsevent.md) object representing a key-down event.
- `target`: Return by reference the target object for the menu item that corresponds to the event. Specify `nil` to request the menu’s target.
- `action`: Return by reference the action selector for the menu item that corresponds to the event.

<a id="return-value"></a>

## Return Value

If there is a valid and enabled menu item that corresponds to this key-down even, return [true](https://developer.apple.com/documentation/swift/true) after specifying the target and action. Return [false](https://developer.apple.com/documentation/swift/false) if there are no items with that key equivalent or if the item is disabled.

<a id="Discussion"></a>

## Discussion

If the delegate doesn’t define this method, the menu is populated to find out if any items have a matching key equivalent.

## See Also

### Related Documentation

- [performActionForItem(at:)](../nsmenu/performactionforitem%28at_%29.md): Causes the application to send the action message of a specified menu item to its target.
- [performKeyEquivalent(with:)](../nsmenu/performkeyequivalent%28with_%29.md): Performs the action for the menu item that corresponds to the given key equivalent.

# menuHasKeyEquivalent:forEvent:target:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked to allow the delegate to return the target and action for a key-down event.

## Declaration

```objectivec
- (BOOL) menuHasKeyEquivalent:(NSMenu *) menu forEvent:(NSEvent *) event target:(id*) target action:(SEL*) action;
```

## Parameters

- `menu`: The menu object sending the delegation message.
- `event`: An [NSEvent](../nsevent.md) object representing a key-down event.
- `target`: Return by reference the target object for the menu item that corresponds to the event. Specify `nil` to request the menu’s target.
- `action`: Return by reference the action selector for the menu item that corresponds to the event.

<a id="return-value"></a>

## Return Value

If there is a valid and enabled menu item that corresponds to this key-down even, return [true](https://developer.apple.com/documentation/swift/true) after specifying the target and action. Return [false](https://developer.apple.com/documentation/swift/false) if there are no items with that key equivalent or if the item is disabled.

<a id="Discussion"></a>

## Discussion

If the delegate doesn’t define this method, the menu is populated to find out if any items have a matching key equivalent.

## See Also

### Related Documentation

- [performActionForItemAtIndex:](../nsmenu/performactionforitem%28at_%29.md): Causes the application to send the action message of a specified menu item to its target.
- [performKeyEquivalent:](../nsmenu/performkeyequivalent%28with_%29.md): Performs the action for the menu item that corresponds to the given key equivalent.
