> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsmenuitem/ishidden

# isHidden (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value that indicates whether the menu item is hidden.

## Declaration

```swift
var isHidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Hidden menu items (or items with a hidden superitem) do not appear in a menu and do not participate in command key matching.

## See Also

### Managing hidden status

- [isHiddenOrHasHiddenAncestor](ishiddenorhashiddenancestor.md): A Boolean value that indicates whether the menu item or any of its superitems is hidden.

# hidden (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value that indicates whether the menu item is hidden.

## Declaration

```objectivec
@property (getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

Hidden menu items (or items with a hidden superitem) do not appear in a menu and do not participate in command key matching.

## See Also

### Managing hidden status

- [hiddenOrHasHiddenAncestor](ishiddenorhashiddenancestor.md): A Boolean value that indicates whether the menu item or any of its superitems is hidden.
