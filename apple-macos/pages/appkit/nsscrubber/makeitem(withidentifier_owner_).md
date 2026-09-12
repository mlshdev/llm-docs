> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/makeitem(withidentifier:owner:)](https://developer.apple.com/documentation/appkit/nsscrubber/makeitem(withidentifier:owner:))

# makeItem(withIdentifier:owner:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Creates or returns a reusable item object with the specified identifier.

## Declaration

```swift
func makeItem(withIdentifier itemIdentifier: NSUserInterfaceItemIdentifier, owner: Any?) -> NSScrubberItemView?
```

## Parameters

- `itemIdentifier`: The string that identifies the type of item you want. This is the identifier you specified when registering the item view. The parameter must not be `nil`.
- `owner`: The owner of this item. If the scrubber item is loaded from a nib then this object is set as the nib’s File’s Owner object. Set this parameter to `nil` for scrubber items loaded from classes.

<a id="return-value"></a>

## Return Value

A valid [NSScrubberItemView](../nsscrubberitemview.md) object.

## See Also

### Creating scrubber items

- [register(\_:forItemIdentifier:)](register%28__foritemidentifier_%29-2rb69.md): Registers a class for the scrubber to use when it creates new items.
- [register(\_:forItemIdentifier:)](register%28__foritemidentifier_%29-6jye0.md): Registers a nib file for the scrubber to use when it creates new items in the scrubber.

# makeItemWithIdentifier:owner: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Creates or returns a reusable item object with the specified identifier.

## Declaration

```objectivec
- (NSScrubberItemView *) makeItemWithIdentifier:(NSUserInterfaceItemIdentifier) itemIdentifier owner:(id) owner;
```

## Parameters

- `itemIdentifier`: The string that identifies the type of item you want. This is the identifier you specified when registering the item view. The parameter must not be `nil`.
- `owner`: The owner of this item. If the scrubber item is loaded from a nib then this object is set as the nib’s File’s Owner object. Set this parameter to `nil` for scrubber items loaded from classes.

<a id="return-value"></a>

## Return Value

A valid [NSScrubberItemView](../nsscrubberitemview.md) object.

## See Also

### Creating scrubber items

- [registerClass:forItemIdentifier:](register%28__foritemidentifier_%29-2rb69.md): Registers a class for the scrubber to use when it creates new items.
- [registerNib:forItemIdentifier:](register%28__foritemidentifier_%29-6jye0.md): Registers a nib file for the scrubber to use when it creates new items in the scrubber.
