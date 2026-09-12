> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/performactionforitem(at:)](https://developer.apple.com/documentation/appkit/nsmenu/performactionforitem(at:))

# performActionForItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Causes the application to send the action message of a specified menu item to its target.

## Declaration

```swift
func performActionForItem(at index: Int)
```

## Parameters

- `index`: The integer index of a menu item.

<a id="Discussion"></a>

## Discussion

If a target is not specified, the message is sent to the first responder. As a side effect, this method posts [willSendActionNotification](willsendactionnotification.md) and [didSendActionNotification](didsendactionnotification.md).

In macOS 10.6 and later the `performActionForItemAtIndex:` no longer triggers menu validation. This is because validation is typically done during menu tracking or key equivalent matching, so the subsequent `performActionForItemAtIndex:` validation was redundant. To trigger validation explicitly, use invoke the [update()](update%28%29.md) method.

In OS X v10.6 `performActionForItemAtIndex:`, when called, now triggers highlighting in the menu bar. It also sends out appropriate accessibility notifications indicating the item was selected.

## See Also

### Related Documentation

- [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md): Performs the action for the menu item that corresponds to the given key equivalent.

# performActionForItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Causes the application to send the action message of a specified menu item to its target.

## Declaration

```objectivec
- (void) performActionForItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The integer index of a menu item.

<a id="Discussion"></a>

## Discussion

If a target is not specified, the message is sent to the first responder. As a side effect, this method posts [NSMenuWillSendActionNotification](willsendactionnotification.md) and [NSMenuDidSendActionNotification](didsendactionnotification.md).

In macOS 10.6 and later the `performActionForItemAtIndex:` no longer triggers menu validation. This is because validation is typically done during menu tracking or key equivalent matching, so the subsequent `performActionForItemAtIndex:` validation was redundant. To trigger validation explicitly, use invoke the [update](update%28%29.md) method.

In OS X v10.6 `performActionForItemAtIndex:`, when called, now triggers highlighting in the menu bar. It also sends out appropriate accessibility notifications indicating the item was selected.

## See Also

### Related Documentation

- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Performs the action for the menu item that corresponds to the given key equivalent.
