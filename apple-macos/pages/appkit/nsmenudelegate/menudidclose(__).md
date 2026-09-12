> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenudelegate/menudidclose(_:)](https://developer.apple.com/documentation/appkit/nsmenudelegate/menudidclose(_:))

# menuDidClose(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked after a menu closed.

## Declaration

```swift
@MainActor optional func menuDidClose(_ menu: NSMenu)
```

## Parameters

- `menu`: The menu that closed.

<a id="Discussion"></a>

## Discussion

Don’t modify the structure of the menu or the menu items during this method.

## See Also

### Handling Open and Close Events

- [menuWillOpen(\_:)](menuwillopen%28__%29.md): Invoked when a menu is about to open.

# menuDidClose: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked after a menu closed.

## Declaration

```objectivec
- (void) menuDidClose:(NSMenu *) menu;
```

## Parameters

- `menu`: The menu that closed.

<a id="Discussion"></a>

## Discussion

Don’t modify the structure of the menu or the menu items during this method.

## See Also

### Handling Open and Close Events

- [menuWillOpen:](menuwillopen%28__%29.md): Invoked when a menu is about to open.
