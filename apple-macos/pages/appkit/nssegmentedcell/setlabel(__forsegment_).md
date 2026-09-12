> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcell/setlabel(_:forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcell/setlabel(_:forsegment:))

# setLabel(\_:forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the label for the specified segment.

## Declaration

```swift
func setLabel(_ label: String, forSegment segment: Int)
```

## Parameters

- `label`: The label you want to display in the segment. If the width of the string is greater than the width of the segment, the string’s text is truncated during drawing.
- `segment`: The index of the segment whose label you want to set. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

## See Also

### Configuring Individual Segments

- [label(forSegment:)](label%28forsegment_%29.md): Returns the label of the specified segment.
- [setImage(\_:forSegment:)](setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [image(forSegment:)](image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [setImageScaling(\_:forSegment:)](setimagescaling%28__forsegment_%29.md): Sets the image scaling mode for the specified segment.
- [imageScaling(forSegment:)](imagescaling%28forsegment_%29.md): Returns the image scaling mode associated with the specified segment.
- [setWidth(\_:forSegment:)](setwidth%28__forsegment_%29.md): Sets the width of the specified segment.
- [width(forSegment:)](width%28forsegment_%29.md): Returns the width of the specified segment.
- [setEnabled(\_:forSegment:)](setenabled%28__forsegment_%29.md): Sets the enabled state of the specified segment
- [isEnabled(forSegment:)](isenabled%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is enabled.
- [setMenu(\_:forSegment:)](setmenu%28__forsegment_%29.md): Sets the menu for the specified segment.
- [menu(forSegment:)](menu%28forsegment_%29.md): Returns the menu for the specified segment.
- [setToolTip(\_:forSegment:)](settooltip%28__forsegment_%29.md): Sets the tooltip for the specified segment.
- [toolTip(forSegment:)](tooltip%28forsegment_%29.md): Returns the tooltip of the specified segment.
- [setTag(\_:forSegment:)](settag%28__forsegment_%29.md): Sets the tag for the specified segment.
- [tag(forSegment:)](tag%28forsegment_%29.md): Returns the tag of the specified segment.

# setLabel:forSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the label for the specified segment.

## Declaration

```objectivec
- (void) setLabel:(NSString *) label forSegment:(NSInteger) segment;
```

## Parameters

- `label`: The label you want to display in the segment. If the width of the string is greater than the width of the segment, the string’s text is truncated during drawing.
- `segment`: The index of the segment whose label you want to set. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

## See Also

### Configuring Individual Segments

- [labelForSegment:](label%28forsegment_%29.md): Returns the label of the specified segment.
- [setImage:forSegment:](setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [imageForSegment:](image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [setImageScaling:forSegment:](setimagescaling%28__forsegment_%29.md): Sets the image scaling mode for the specified segment.
- [imageScalingForSegment:](imagescaling%28forsegment_%29.md): Returns the image scaling mode associated with the specified segment.
- [setWidth:forSegment:](setwidth%28__forsegment_%29.md): Sets the width of the specified segment.
- [widthForSegment:](width%28forsegment_%29.md): Returns the width of the specified segment.
- [setEnabled:forSegment:](setenabled%28__forsegment_%29.md): Sets the enabled state of the specified segment
- [isEnabledForSegment:](isenabled%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is enabled.
- [setMenu:forSegment:](setmenu%28__forsegment_%29.md): Sets the menu for the specified segment.
- [menuForSegment:](menu%28forsegment_%29.md): Returns the menu for the specified segment.
- [setToolTip:forSegment:](settooltip%28__forsegment_%29.md): Sets the tooltip for the specified segment.
- [toolTipForSegment:](tooltip%28forsegment_%29.md): Returns the tooltip of the specified segment.
- [setTag:forSegment:](settag%28__forsegment_%29.md): Sets the tag for the specified segment.
- [tagForSegment:](tag%28forsegment_%29.md): Returns the tag of the specified segment.
