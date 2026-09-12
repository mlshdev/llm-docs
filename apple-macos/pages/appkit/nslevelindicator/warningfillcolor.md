> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicator/warningfillcolor](https://developer.apple.com/documentation/appkit/nslevelindicator/warningfillcolor)

# warningFillColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “warning” threshold.

## Declaration

```swift
@NSCopying var warningFillColor: NSColor! { get set }
```

<a id="discussion"></a>

## Discussion

The default value is a system-defined color which may vary between level indicator styles and OS releases.

## See Also

### Configuring the Drawing Attributes

- [ratingImage](ratingimage.md): Sets the image used by the rating indicator style in place of the default star image.
- [drawsTieredCapacityLevels](drawstieredcapacitylevels.md)
- [fillColor](fillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing the “normal” state, and by the rating indicator when drawing stars.
- [criticalFillColor](criticalfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “critical” threshold.

# warningFillColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “warning” threshold.

## Declaration

```objectivec
@property (copy, null_resettable) NSColor * warningFillColor;
```

<a id="discussion"></a>

## Discussion

The default value is a system-defined color which may vary between level indicator styles and OS releases.

## See Also

### Configuring the Drawing Attributes

- [ratingImage](ratingimage.md): Sets the image used by the rating indicator style in place of the default star image.
- [drawsTieredCapacityLevels](drawstieredcapacitylevels.md)
- [fillColor](fillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing the “normal” state, and by the rating indicator when drawing stars.
- [criticalFillColor](criticalfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “critical” threshold.
