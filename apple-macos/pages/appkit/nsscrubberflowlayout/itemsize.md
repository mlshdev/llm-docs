> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberflowlayout/itemsize](https://developer.apple.com/documentation/appkit/nsscrubberflowlayout/itemsize)

# itemSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The frame size for each item in the scrubber.

## Declaration

```swift
var itemSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

You can override the value of this property on a per-item basis, by providing a delegate object to the scrubber that conforms to the [NSScrubberFlowLayoutDelegate](../nsscrubberflowlayoutdelegate.md) protocol. This delegate object must implement the [scrubber(\_:layout:sizeForItemAt:)](../nsscrubberflowlayoutdelegate/scrubber%28__layout_sizeforitemat_%29.md) method.

The default value for this property has a width of `50.0` points and a height of `30.0` points.

## See Also

### Configuring the layout

- [itemSpacing](itemspacing.md): The horizontal spacing between items, specified in points.

# itemSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The frame size for each item in the scrubber.

## Declaration

```objectivec
@property NSSize itemSize;
```

<a id="Discussion"></a>

## Discussion

You can override the value of this property on a per-item basis, by providing a delegate object to the scrubber that conforms to the [NSScrubberFlowLayoutDelegate](../nsscrubberflowlayoutdelegate.md) protocol. This delegate object must implement the [scrubber:layout:sizeForItemAtIndex:](../nsscrubberflowlayoutdelegate/scrubber%28__layout_sizeforitemat_%29.md) method.

The default value for this property has a width of `50.0` points and a height of `30.0` points.

## See Also

### Configuring the layout

- [itemSpacing](itemspacing.md): The horizontal spacing between items, specified in points.
