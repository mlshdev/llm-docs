> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsmenudelegate/menuwillopen(_:)

# menuWillOpen(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked when a menu is about to open.

## Declaration

```swift
@MainActor optional func menuWillOpen(_ menu: NSMenu)
```

## Parameters

- `menu`: The menu that is about to open.

<a id="Discussion"></a>

## Discussion

Don’t modify the structure of the menu or the menu items during this method.

## See Also

### Handling Open and Close Events

- [menuDidClose(\_:)](menudidclose%28__%29.md): Invoked after a menu closed.

# menuWillOpen: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked when a menu is about to open.

## Declaration

```objectivec
- (void) menuWillOpen:(NSMenu *) menu;
```

## Parameters

- `menu`: The menu that is about to open.

<a id="Discussion"></a>

## Discussion

Don’t modify the structure of the menu or the menu items during this method.

## See Also

### Handling Open and Close Events

- [menuDidClose:](menudidclose%28__%29.md): Invoked after a menu closed.
