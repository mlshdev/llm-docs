> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/performkeyequivalent(with:)](https://developer.apple.com/documentation/appkit/nsmenu/performkeyequivalent(with:))

# performKeyEquivalent(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Performs the action for the menu item that corresponds to the given key equivalent.

## Declaration

```swift
func performKeyEquivalent(with event: NSEvent) -> Bool
```

## Parameters

- `event`: An [NSEvent](../nsevent.md) object that represents a key-equivalent event.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if `event` is a key equivalent that the menu should handle, otherwise returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [menuHasKeyEquivalent(\_:for:target:action:)](../nsmenudelegate/menuhaskeyequivalent%28__for_target_action_%29.md): Invoked to allow the delegate to return the target and action for a key-down event.
- [performActionForItem(at:)](performactionforitem%28at_%29.md): Causes the application to send the action message of a specified menu item to its target.

# performKeyEquivalent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Performs the action for the menu item that corresponds to the given key equivalent.

## Declaration

```objectivec
- (BOOL) performKeyEquivalent:(NSEvent *) event;
```

## Parameters

- `event`: An [NSEvent](../nsevent.md) object that represents a key-equivalent event.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if `event` is a key equivalent that the menu should handle, otherwise returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [menuHasKeyEquivalent:forEvent:target:action:](../nsmenudelegate/menuhaskeyequivalent%28__for_target_action_%29.md): Invoked to allow the delegate to return the target and action for a key-down event.
- [performActionForItemAtIndex:](performactionforitem%28at_%29.md): Causes the application to send the action message of a specified menu item to its target.
