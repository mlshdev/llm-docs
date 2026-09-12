> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/register(_:foritemidentifier:)-6jye0](https://developer.apple.com/documentation/appkit/nsscrubber/register(_:foritemidentifier:)-6jye0)

# register(\_:forItemIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Registers a nib file for the scrubber to use when it creates new items in the scrubber.

## Declaration

```swift
func register(_ nib: NSNib?, forItemIdentifier itemIdentifier: NSUserInterfaceItemIdentifier)
```

## Parameters

- `nib`: The nib object containing the item object. The nib file must contain exactly one top-level [NSScrubberItemView](../nsscrubberitemview.md) object. You can use a custom subclass when configuring the object in the nib file. Specify `nil` to unregister a previously registered file.
- `itemIdentifier`: The string that identifies the type of items. You use this string later when requesting new items. The string must be unique among the other registered item view classes of this scrubber. This parameter must not be an empty string or `nil`.

## See Also

### Creating scrubber items

- [register(\_:forItemIdentifier:)](register%28__foritemidentifier_%29-2rb69.md): Registers a class for the scrubber to use when it creates new items.
- [makeItem(withIdentifier:owner:)](makeitem%28withidentifier_owner_%29.md): Creates or returns a reusable item object with the specified identifier.

# registerNib:forItemIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Registers a nib file for the scrubber to use when it creates new items in the scrubber.

## Declaration

```objectivec
- (void) registerNib:(NSNib *) nib forItemIdentifier:(NSUserInterfaceItemIdentifier) itemIdentifier;
```

## Parameters

- `nib`: The nib object containing the item object. The nib file must contain exactly one top-level [NSScrubberItemView](../nsscrubberitemview.md) object. You can use a custom subclass when configuring the object in the nib file. Specify `nil` to unregister a previously registered file.
- `itemIdentifier`: The string that identifies the type of items. You use this string later when requesting new items. The string must be unique among the other registered item view classes of this scrubber. This parameter must not be an empty string or `nil`.

## See Also

### Creating scrubber items

- [registerClass:forItemIdentifier:](register%28__foritemidentifier_%29-2rb69.md): Registers a class for the scrubber to use when it creates new items.
- [makeItemWithIdentifier:owner:](makeitem%28withidentifier_owner_%29.md): Creates or returns a reusable item object with the specified identifier.
