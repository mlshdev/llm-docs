> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicator/fillcolor](https://developer.apple.com/documentation/appkit/nslevelindicator/fillcolor)

# fillColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Sets the fill color used by Continuous and Discrete Capacity indicators when drawing the “normal” state, and by the rating indicator when drawing stars.

## Declaration

```swift
@NSCopying var fillColor: NSColor! { get set }
```

<a id="discussion"></a>

## Discussion

The default value is a system-defined color which may vary between level indicator styles and OS releases.

## See Also

### Configuring the Drawing Attributes

- [ratingImage](ratingimage.md): Sets the image used by the rating indicator style in place of the default star image.
- [drawsTieredCapacityLevels](drawstieredcapacitylevels.md)
- [warningFillColor](warningfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “warning” threshold.
- [criticalFillColor](criticalfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “critical” threshold.

# fillColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Sets the fill color used by Continuous and Discrete Capacity indicators when drawing the “normal” state, and by the rating indicator when drawing stars.

## Declaration

```objectivec
@property (copy, null_resettable) NSColor * fillColor;
```

<a id="discussion"></a>

## Discussion

The default value is a system-defined color which may vary between level indicator styles and OS releases.

## See Also

### Configuring the Drawing Attributes

- [ratingImage](ratingimage.md): Sets the image used by the rating indicator style in place of the default star image.
- [drawsTieredCapacityLevels](drawstieredcapacitylevels.md)
- [warningFillColor](warningfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “warning” threshold.
- [criticalFillColor](criticalfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “critical” threshold.
