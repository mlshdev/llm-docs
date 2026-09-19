> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsscrubber/mode-swift.enum/fixed

# NSScrubber.Mode.fixed (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.12.2+

A scrolling mode in which scrubber items remain fixed in place, and the item under the user’s finger is highlighted.

## Declaration

```swift
case fixed
```

<a id="Discussion"></a>

## Discussion

When a user swipes horizontally across the scrubber, the scrubber items remain fixed in place and the item under the user’s finger highlights. At the conclusion of the touch interaction, the last-highlighted item is selected.

For details on how to choose the correct mode for your app, see [Choose a scrubber touch-interaction model](../../nsscrubber.md#Choose-a-scrubber-touch-interaction-model).

## See Also

### Constants

- [NSScrubber.Mode.free](free.md): A scrolling mode in which the scrubber scrolls as the user swipes horizontally across the scrubber.

# NSScrubberModeFixed (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12.2+

A scrolling mode in which scrubber items remain fixed in place, and the item under the user’s finger is highlighted.

## Declaration

```objectivec
NSScrubberModeFixed
```

<a id="Discussion"></a>

## Discussion

When a user swipes horizontally across the scrubber, the scrubber items remain fixed in place and the item under the user’s finger highlights. At the conclusion of the touch interaction, the last-highlighted item is selected.

For details on how to choose the correct mode for your app, see [Choose a scrubber touch-interaction model](../../nsscrubber.md#Choose-a-scrubber-touch-interaction-model).

## See Also

### Constants

- [NSScrubberModeFree](free.md): A scrolling mode in which the scrubber scrolls as the user swipes horizontally across the scrubber.
