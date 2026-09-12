> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/mode-swift.enum/free](https://developer.apple.com/documentation/appkit/nsscrubber/mode-swift.enum/free)

# NSScrubber.Mode.free (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.12.2+

A scrolling mode in which the scrubber scrolls as the user swipes horizontally across the scrubber.

## Declaration

```swift
case free
```

<a id="Discussion"></a>

## Discussion

When a user swipes horizontally across the scrubber, the scrubber scrolls. To select an item, the user must tap or press it without moving their finger horizontally.

Free-mode interaction changes depending on the value the scrubber’s [isContinuous](../iscontinuous.md) property. For details on how to choose the correct mode for your app, see [Choose a scrubber touch-interaction model](../../nsscrubber.md#Choose-a-scrubber-touch-interaction-model).

## See Also

### Constants

- [NSScrubber.Mode.fixed](fixed.md): A scrolling mode in which scrubber items remain fixed in place, and the item under the user’s finger is highlighted.

# NSScrubberModeFree (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12.2+

A scrolling mode in which the scrubber scrolls as the user swipes horizontally across the scrubber.

## Declaration

```objectivec
NSScrubberModeFree
```

<a id="Discussion"></a>

## Discussion

When a user swipes horizontally across the scrubber, the scrubber scrolls. To select an item, the user must tap or press it without moving their finger horizontally.

Free-mode interaction changes depending on the value the scrubber’s [continuous](../iscontinuous.md) property. For details on how to choose the correct mode for your app, see [Choose a scrubber touch-interaction model](../../nsscrubber.md#Choose-a-scrubber-touch-interaction-model).

## See Also

### Constants

- [NSScrubberModeFixed](fixed.md): A scrolling mode in which scrubber items remain fixed in place, and the item under the user’s finger is highlighted.
