> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/register(_:foritemidentifier:)-2rb69](https://developer.apple.com/documentation/appkit/nsscrubber/register(_:foritemidentifier:)-2rb69)

# register(\_:forItemIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Registers a class for the scrubber to use when it creates new items.

## Declaration

```swift
func register(_ itemViewClass: AnyClass?, forItemIdentifier itemIdentifier: NSUserInterfaceItemIdentifier)
```

## Parameters

- `itemViewClass`: A class to use for creating items. The class must be descended from [NSScrubberItemView](../nsscrubberitemview.md). Specify `nil` to unregister a previously registered class.
- `itemIdentifier`: The string that identifies the type of item. You use this string later when requesting new item views. The string must be unique among the other registered item view classes of this scrubber. This parameter must not be an empty string or `nil`.

## See Also

### Creating scrubber items

- [register(\_:forItemIdentifier:)](register%28__foritemidentifier_%29-6jye0.md): Registers a nib file for the scrubber to use when it creates new items in the scrubber.
- [makeItem(withIdentifier:owner:)](makeitem%28withidentifier_owner_%29.md): Creates or returns a reusable item object with the specified identifier.

# registerClass:forItemIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Registers a class for the scrubber to use when it creates new items.

## Declaration

```objectivec
- (void) registerClass:(Class) itemViewClass forItemIdentifier:(NSUserInterfaceItemIdentifier) itemIdentifier;
```

## Parameters

- `itemViewClass`: A class to use for creating items. The class must be descended from [NSScrubberItemView](../nsscrubberitemview.md). Specify `nil` to unregister a previously registered class.
- `itemIdentifier`: The string that identifies the type of item. You use this string later when requesting new item views. The string must be unique among the other registered item view classes of this scrubber. This parameter must not be an empty string or `nil`.

## See Also

### Creating scrubber items

- [registerNib:forItemIdentifier:](register%28__foritemidentifier_%29-6jye0.md): Registers a nib file for the scrubber to use when it creates new items in the scrubber.
- [makeItemWithIdentifier:owner:](makeitem%28withidentifier_owner_%29.md): Creates or returns a reusable item object with the specified identifier.
