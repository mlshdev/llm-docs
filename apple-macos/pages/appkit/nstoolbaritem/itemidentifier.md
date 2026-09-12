> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/itemidentifier](https://developer.apple.com/documentation/appkit/nstoolbaritem/itemidentifier)

# itemIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

The value you use to identify the toolbar item.

## Declaration

```swift
var itemIdentifier: NSToolbarItem.Identifier { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to distinguish one toolbar item from another on the same toolbar.

## See Also

### Related Documentation

- [init(itemIdentifier:)](init%28itemidentifier_%29.md): Creates a toolbar item with the specified identifier.

### Getting the toolbar item’s identity

- [NSToolbarItem.Identifier](identifier.md): Constants for the standard toolbar items that the system provides.

# itemIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

The value you use to identify the toolbar item.

## Declaration

```objectivec
@property (copy, readonly) NSToolbarItemIdentifier itemIdentifier;
```

<a id="Discussion"></a>

## Discussion

Use this property to distinguish one toolbar item from another on the same toolbar.

## See Also

### Related Documentation

- [initWithItemIdentifier:](init%28itemidentifier_%29.md): Creates a toolbar item with the specified identifier.

### Getting the toolbar item’s identity

- [NSToolbarItemIdentifier](identifier.md): Constants for the standard toolbar items that the system provides.
