> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberlayout/layoutattributesclass](https://developer.apple.com/documentation/appkit/nsscrubberlayout/layoutattributesclass)

# layoutAttributesClass (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.12.2+

A property containing a class that describes layout attributes.

## Declaration

```swift
class var layoutAttributesClass: AnyClass { get }
```

<a id="return-value"></a>

## Return Value

The default return value is [NSScrubberLayoutAttributes](../nsscrubberlayoutattributes.md).

<a id="Discussion"></a>

## Discussion

Create a custom subclass of [NSScrubberLayout](../nsscrubberlayout.md) and override this method if you wish to use a custom layout attributes subclass.

## See Also

### Related Documentation

- [NSScrubberLayoutAttributes](../nsscrubberlayoutattributes.md): The layout of a scrubber item.

### Configuring a scrubber layout

- [scrubber](scrubber.md): The scrubber control that this layout is assigned to.
- [visibleRect](visiblerect.md): The currently visible rectangle, in the coordinate space of the scrubber content.
- [invalidateLayout()](invalidatelayout%28%29.md): Signals that the layout has been invalidated, and that the scrubber control should perform a new layout pass.

# layoutAttributesClass (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.12.2+

A property containing a class that describes layout attributes.

## Declaration

```objectivec
@property (class, readonly) Class layoutAttributesClass;
```

<a id="return-value"></a>

## Return Value

The default return value is [NSScrubberLayoutAttributes](../nsscrubberlayoutattributes.md).

<a id="Discussion"></a>

## Discussion

Create a custom subclass of [NSScrubberLayout](../nsscrubberlayout.md) and override this method if you wish to use a custom layout attributes subclass.

## See Also

### Related Documentation

- [NSScrubberLayoutAttributes](../nsscrubberlayoutattributes.md): The layout of a scrubber item.

### Configuring a scrubber layout

- [scrubber](scrubber.md): The scrubber control that this layout is assigned to.
- [visibleRect](visiblerect.md): The currently visible rectangle, in the coordinate space of the scrubber content.
- [invalidateLayout](invalidatelayout%28%29.md): Signals that the layout has been invalidated, and that the scrubber control should perform a new layout pass.
