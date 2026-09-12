> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/removeitem(identifier:)](https://developer.apple.com/documentation/appkit/nstoolbar/removeitem(identifier:))

# removeItem(identifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Removes the item with matching `itemIdentifier` in the receiving toolbar. If multiple items share the same identifier (as is the case with space items) all matching items will be removed. To remove only a single space item, use `-removeItemAtIndex:` instead.

## Declaration

```swift
func removeItem(identifier itemIdentifier: NSToolbarItem.Identifier)
```

<a id="discussion"></a>

## Discussion

Any change made will be propagated immediately to all other toolbars with the same identifier.

# removeItemWithItemIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

Removes the item with matching `itemIdentifier` in the receiving toolbar. If multiple items share the same identifier (as is the case with space items) all matching items will be removed. To remove only a single space item, use `-removeItemAtIndex:` instead.

## Declaration

```objectivec
- (void) removeItemWithItemIdentifier:(NSToolbarItemIdentifier) itemIdentifier;
```

<a id="discussion"></a>

## Discussion

Any change made will be propagated immediately to all other toolbars with the same identifier.
