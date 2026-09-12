> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberlayout/visiblerect](https://developer.apple.com/documentation/appkit/nsscrubberlayout/visiblerect)

# visibleRect (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The currently visible rectangle, in the coordinate space of the scrubber content.

## Declaration

```swift
var visibleRect: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect) if the layout is not currently assigned to a scrubber control.

## See Also

### Configuring a scrubber layout

- [layoutAttributesClass](layoutattributesclass.md): A property containing a class that describes layout attributes.
- [scrubber](scrubber.md): The scrubber control that this layout is assigned to.
- [invalidateLayout()](invalidatelayout%28%29.md): Signals that the layout has been invalidated, and that the scrubber control should perform a new layout pass.

# visibleRect (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The currently visible rectangle, in the coordinate space of the scrubber content.

## Declaration

```objectivec
@property (readonly) NSRect visibleRect;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect) if the layout is not currently assigned to a scrubber control.

## See Also

### Configuring a scrubber layout

- [layoutAttributesClass](layoutattributesclass.md): A property containing a class that describes layout attributes.
- [scrubber](scrubber.md): The scrubber control that this layout is assigned to.
- [invalidateLayout](invalidatelayout%28%29.md): Signals that the layout has been invalidated, and that the scrubber control should perform a new layout pass.
