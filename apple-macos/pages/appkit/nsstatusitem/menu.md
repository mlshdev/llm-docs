> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsstatusitem/menu

# menu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The pull-down menu displayed when the user clicks the status item.

## Declaration

```swift
var menu: NSMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

When non-`nil`, the status item’s single click action behavior is not used. Setting the value of this property to `nil` removes the menu.

## See Also

### Managing the status item’s behavior

- [behavior](behavior-swift.property.md): The set of allowed behaviors for the status item.
- [NSStatusItem.Behavior](behavior-swift.struct.md): A set of optional status item behaviors.
- [button](button.md): The button displayed in the status bar.

# menu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The pull-down menu displayed when the user clicks the status item.

## Declaration

```objectivec
@property (strong, nullable) NSMenu * menu;
```

<a id="Discussion"></a>

## Discussion

When non-`nil`, the status item’s single click action behavior is not used. Setting the value of this property to `nil` removes the menu.

## See Also

### Managing the status item’s behavior

- [behavior](behavior-swift.property.md): The set of allowed behaviors for the status item.
- [NSStatusItemBehavior](behavior-swift.struct.md): A set of optional status item behaviors.
- [button](button.md): The button displayed in the status bar.
