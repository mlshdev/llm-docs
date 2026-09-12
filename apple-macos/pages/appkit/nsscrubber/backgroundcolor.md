> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/backgroundcolor](https://developer.apple.com/documentation/appkit/nsscrubber/backgroundcolor)

# backgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The color displayed behind the scrubber content.

## Declaration

```swift
@NSCopying var backgroundColor: NSColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is ignored if the value of the [backgroundView](backgroundview.md) property is non-`nil`. The default value is `nil`.

## See Also

### Configuring the scrubber’s appearance

- [backgroundView](backgroundview.md): A view that is displayed behind the scrubber content.
- [showsAdditionalContentIndicators](showsadditionalcontentindicators.md): A Boolean value that specifies whether the scrubber should display the existence of additional items beyond the leading and trailing edges.
- [showsArrowButtons](showsarrowbuttons.md): A Boolean value that specifies whether arrow buttons should be displayed at the leading and trailing edges of the scrubber.

# backgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The color displayed behind the scrubber content.

## Declaration

```objectivec
@property (copy, nullable) NSColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

The value of this property is ignored if the value of the [backgroundView](backgroundview.md) property is non-`nil`. The default value is `nil`.

## See Also

### Configuring the scrubber’s appearance

- [backgroundView](backgroundview.md): A view that is displayed behind the scrubber content.
- [showsAdditionalContentIndicators](showsadditionalcontentindicators.md): A Boolean value that specifies whether the scrubber should display the existence of additional items beyond the leading and trailing edges.
- [showsArrowButtons](showsarrowbuttons.md): A Boolean value that specifies whether arrow buttons should be displayed at the leading and trailing edges of the scrubber.
