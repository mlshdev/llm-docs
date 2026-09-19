> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsscrubberlayout/scrubber

# scrubber (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The scrubber control that this layout is assigned to.

## Declaration

```swift
weak var scrubber: NSScrubber? { get }
```

<a id="Discussion"></a>

## Discussion

If this layout is not currently assigned to a scrubber control, the value of this property is `nil`.

## See Also

### Configuring a scrubber layout

- [layoutAttributesClass](layoutattributesclass.md): A property containing a class that describes layout attributes.
- [visibleRect](visiblerect.md): The currently visible rectangle, in the coordinate space of the scrubber content.
- [invalidateLayout()](invalidatelayout%28%29.md): Signals that the layout has been invalidated, and that the scrubber control should perform a new layout pass.

# scrubber (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The scrubber control that this layout is assigned to.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSScrubber * scrubber;
```

<a id="Discussion"></a>

## Discussion

If this layout is not currently assigned to a scrubber control, the value of this property is `nil`.

## See Also

### Configuring a scrubber layout

- [layoutAttributesClass](layoutattributesclass.md): A property containing a class that describes layout attributes.
- [visibleRect](visiblerect.md): The currently visible rectangle, in the coordinate space of the scrubber content.
- [invalidateLayout](invalidatelayout%28%29.md): Signals that the layout has been invalidated, and that the scrubber control should perform a new layout pass.
