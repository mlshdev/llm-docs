> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/scrollitem(at:to:)](https://developer.apple.com/documentation/appkit/nsscrubber/scrollitem(at:to:))

# scrollItem(at:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Scrolls an item to a specified alignment within the scrubber.

## Declaration

```swift
func scrollItem(at index: Int, to alignment: NSScrubber.Alignment)
```

## Parameters

- `index`: The index of the item to be scrolled. Indexes range between `0` and `n-1`, where `n` is the number of items displayed in the scrubber.
- `alignment`: The position the item should be scrolled to. For possible values, see [NSScrubber.Alignment](alignment.md). If [NSScrubber.Alignment.none](alignment/none.md), the scrubber scrolls the minimum distance required to make the item visible.

<a id="Discussion"></a>

## Discussion

To animate the scroll, call this method on the animator proxy. See [NSAnimatablePropertyContainer](../nsanimatablepropertycontainer.md) for details.

# scrollItemAtIndex:toAlignment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Scrolls an item to a specified alignment within the scrubber.

## Declaration

```objectivec
- (void) scrollItemAtIndex:(NSInteger) index toAlignment:(NSScrubberAlignment) alignment;
```

## Parameters

- `index`: The index of the item to be scrolled. Indexes range between `0` and `n-1`, where `n` is the number of items displayed in the scrubber.
- `alignment`: The position the item should be scrolled to. For possible values, see [NSScrubberAlignment](alignment.md). If [NSScrubberAlignmentNone](alignment/none.md), the scrubber scrolls the minimum distance required to make the item visible.

<a id="Discussion"></a>

## Discussion

To animate the scroll, call this method on the animator proxy. See [NSAnimatablePropertyContainer](../nsanimatablepropertycontainer.md) for details.
