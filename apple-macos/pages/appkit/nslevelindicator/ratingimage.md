> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicator/ratingimage](https://developer.apple.com/documentation/appkit/nslevelindicator/ratingimage)

# ratingImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Sets the image used by the rating indicator style in place of the default star image.

## Declaration

```swift
var ratingImage: NSImage? { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `nil`.

## See Also

### Configuring the Drawing Attributes

- [drawsTieredCapacityLevels](drawstieredcapacitylevels.md)
- [fillColor](fillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing the “normal” state, and by the rating indicator when drawing stars.
- [warningFillColor](warningfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “warning” threshold.
- [criticalFillColor](criticalfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “critical” threshold.

# ratingImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Sets the image used by the rating indicator style in place of the default star image.

## Declaration

```objectivec
@property (strong, nullable) NSImage * ratingImage;
```

<a id="discussion"></a>

## Discussion

The default value is `nil`.

## See Also

### Configuring the Drawing Attributes

- [drawsTieredCapacityLevels](drawstieredcapacitylevels.md)
- [fillColor](fillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing the “normal” state, and by the rating indicator when drawing stars.
- [warningFillColor](warningfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “warning” threshold.
- [criticalFillColor](criticalfillcolor.md): Sets the fill color used by Continuous and Discrete Capacity indicators when drawing values above the “critical” threshold.
