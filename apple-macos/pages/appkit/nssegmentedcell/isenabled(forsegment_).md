> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcell/isenabled(forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcell/isenabled(forsegment:))

# isEnabled(forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the specified segment is enabled.

## Declaration

```swift
func isEnabled(forSegment segment: Int) -> Bool
```

## Parameters

- `segment`: The index of the segment whose enabled state you want to get. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the segment is enabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Individual Segments

- [setLabel(\_:forSegment:)](setlabel%28__forsegment_%29.md): Sets the label for the specified segment.
- [label(forSegment:)](label%28forsegment_%29.md): Returns the label of the specified segment.
- [setImage(\_:forSegment:)](setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [image(forSegment:)](image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [setImageScaling(\_:forSegment:)](setimagescaling%28__forsegment_%29.md): Sets the image scaling mode for the specified segment.
- [imageScaling(forSegment:)](imagescaling%28forsegment_%29.md): Returns the image scaling mode associated with the specified segment.
- [setWidth(\_:forSegment:)](setwidth%28__forsegment_%29.md): Sets the width of the specified segment.
- [width(forSegment:)](width%28forsegment_%29.md): Returns the width of the specified segment.
- [setEnabled(\_:forSegment:)](setenabled%28__forsegment_%29.md): Sets the enabled state of the specified segment
- [setMenu(\_:forSegment:)](setmenu%28__forsegment_%29.md): Sets the menu for the specified segment.
- [menu(forSegment:)](menu%28forsegment_%29.md): Returns the menu for the specified segment.
- [setToolTip(\_:forSegment:)](settooltip%28__forsegment_%29.md): Sets the tooltip for the specified segment.
- [toolTip(forSegment:)](tooltip%28forsegment_%29.md): Returns the tooltip of the specified segment.
- [setTag(\_:forSegment:)](settag%28__forsegment_%29.md): Sets the tag for the specified segment.
- [tag(forSegment:)](tag%28forsegment_%29.md): Returns the tag of the specified segment.

# isEnabledForSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the specified segment is enabled.

## Declaration

```objectivec
- (BOOL) isEnabledForSegment:(NSInteger) segment;
```

## Parameters

- `segment`: The index of the segment whose enabled state you want to get. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the segment is enabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Individual Segments

- [setLabel:forSegment:](setlabel%28__forsegment_%29.md): Sets the label for the specified segment.
- [labelForSegment:](label%28forsegment_%29.md): Returns the label of the specified segment.
- [setImage:forSegment:](setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [imageForSegment:](image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [setImageScaling:forSegment:](setimagescaling%28__forsegment_%29.md): Sets the image scaling mode for the specified segment.
- [imageScalingForSegment:](imagescaling%28forsegment_%29.md): Returns the image scaling mode associated with the specified segment.
- [setWidth:forSegment:](setwidth%28__forsegment_%29.md): Sets the width of the specified segment.
- [widthForSegment:](width%28forsegment_%29.md): Returns the width of the specified segment.
- [setEnabled:forSegment:](setenabled%28__forsegment_%29.md): Sets the enabled state of the specified segment
- [setMenu:forSegment:](setmenu%28__forsegment_%29.md): Sets the menu for the specified segment.
- [menuForSegment:](menu%28forsegment_%29.md): Returns the menu for the specified segment.
- [setToolTip:forSegment:](settooltip%28__forsegment_%29.md): Sets the tooltip for the specified segment.
- [toolTipForSegment:](tooltip%28forsegment_%29.md): Returns the tooltip of the specified segment.
- [setTag:forSegment:](settag%28__forsegment_%29.md): Sets the tag for the specified segment.
- [tagForSegment:](tag%28forsegment_%29.md): Returns the tag of the specified segment.
