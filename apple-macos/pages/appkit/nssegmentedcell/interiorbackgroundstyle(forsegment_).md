> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcell/interiorbackgroundstyle(forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcell/interiorbackgroundstyle(forsegment:))

# interiorBackgroundStyle(forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the interior background style for the specified segment.

## Declaration

```swift
func interiorBackgroundStyle(forSegment segment: Int) -> NSView.BackgroundStyle
```

## Parameters

- `segment`: The index of the segment whose background style you want to get. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds..

<a id="return-value"></a>

## Return Value

The background style to use for specified segment. See [NSView.BackgroundStyle](../nsview/backgroundstyle.md) for possible values.

<a id="Discussion"></a>

## Discussion

The interior background style describes the surface drawn onto in [drawInterior(withFrame:in:)](../nscell/drawinterior%28withframe_in_%29.md).

This is both an override point and a useful method to call. In a custom segment cell with a custom bezel, you can override this method to describe the surface on a per-segment basis.

## See Also

### Specifying Segment Visual Styles

- [segmentStyle](segmentstyle.md): The visual style used to display the segmented control.

# interiorBackgroundStyleForSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the interior background style for the specified segment.

## Declaration

```objectivec
- (NSBackgroundStyle) interiorBackgroundStyleForSegment:(NSInteger) segment;
```

## Parameters

- `segment`: The index of the segment whose background style you want to get. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds..

<a id="return-value"></a>

## Return Value

The background style to use for specified segment. See [NSBackgroundStyle](../nsview/backgroundstyle.md) for possible values.

<a id="Discussion"></a>

## Discussion

The interior background style describes the surface drawn onto in [drawInteriorWithFrame:inView:](../nscell/drawinterior%28withframe_in_%29.md).

This is both an override point and a useful method to call. In a custom segment cell with a custom bezel, you can override this method to describe the surface on a per-segment basis.

## See Also

### Specifying Segment Visual Styles

- [segmentStyle](segmentstyle.md): The visual style used to display the segmented control.
