> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/backgroundview](https://developer.apple.com/documentation/appkit/nsscrubber/backgroundview)

# backgroundView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A view that is displayed behind the scrubber content.

## Declaration

```swift
var backgroundView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

The scrubber manages the layout of the background view to match the size of the content area. If this property is non-`nil`, the value of the [backgroundColor](../nspathcontrol/backgroundcolor.md) property is ignored.

The default value is `nil`.

## See Also

### Configuring the scrubber’s appearance

- [backgroundColor](backgroundcolor.md): The color displayed behind the scrubber content.
- [showsAdditionalContentIndicators](showsadditionalcontentindicators.md): A Boolean value that specifies whether the scrubber should display the existence of additional items beyond the leading and trailing edges.
- [showsArrowButtons](showsarrowbuttons.md): A Boolean value that specifies whether arrow buttons should be displayed at the leading and trailing edges of the scrubber.

# backgroundView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A view that is displayed behind the scrubber content.

## Declaration

```objectivec
@property (strong, nullable) NSView * backgroundView;
```

<a id="Discussion"></a>

## Discussion

The scrubber manages the layout of the background view to match the size of the content area. If this property is non-`nil`, the value of the [backgroundColor](../nspathcontrol/backgroundcolor.md) property is ignored.

The default value is `nil`.

## See Also

### Configuring the scrubber’s appearance

- [backgroundColor](backgroundcolor.md): The color displayed behind the scrubber content.
- [showsAdditionalContentIndicators](showsadditionalcontentindicators.md): A Boolean value that specifies whether the scrubber should display the existence of additional items beyond the leading and trailing edges.
- [showsArrowButtons](showsarrowbuttons.md): A Boolean value that specifies whether arrow buttons should be displayed at the leading and trailing edges of the scrubber.
