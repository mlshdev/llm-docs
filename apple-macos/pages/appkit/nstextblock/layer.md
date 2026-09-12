> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/layer](https://developer.apple.com/documentation/appkit/nstextblock/layer)

# NSTextBlock.Layer (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The following constants specify values used by the properties and methods [contentWidthValueType](contentwidthvaluetype.md), [setWidth(\_:type:for:edge:)](setwidth%28__type_for_edge_%29.md), [setWidth(\_:type:for:)](setwidth%28__type_for_%29.md), [width(for:edge:)](width%28for_edge_%29.md), and [widthValueType(for:edge:)](widthvaluetype%28for_edge_%29.md) to specify text block layer values.

## Declaration

```swift
enum Layer
```

## Topics

### Constants

- [NSTextBlock.Layer.padding](layer/padding.md): Padding of the text block: space surrounding the content area extending to the border.
- [NSTextBlock.Layer.border](layer/border.md): The border of the text block.
- [NSTextBlock.Layer.margin](layer/margin.md): Margin of the text block: space surrounding the border.

### Initializers

- [init(rawValue:)](layer/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting and setting margins, borders, and padding

- [setWidth(\_:type:for:)](setwidth%28__type_for_%29.md): Sets the width of all edges of a specified layer of the text block.
- [setWidth(\_:type:for:rectEdge:)](setwidth%28__type_for_rectedge_%29.md)
- [width(for:rectEdge:)](width%28for_rectedge_%29.md)
- [widthValueType(for:rectEdge:)](widthvaluetype%28for_rectedge_%29.md)

# NSTextBlockLayer (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The following constants specify values used by the properties and methods [contentWidthValueType](contentwidthvaluetype.md), [setWidth:type:forLayer:edge:](setwidth%28__type_for_edge_%29.md), [setWidth:type:forLayer:](setwidth%28__type_for_%29.md), [widthForLayer:edge:](width%28for_edge_%29.md), and [widthValueTypeForLayer:edge:](widthvaluetype%28for_edge_%29.md) to specify text block layer values.

## Declaration

```objectivec
enum NSTextBlockLayer : NSInteger;
```

## Topics

### Constants

- [NSTextBlockLayerPadding](layer/padding.md): Padding of the text block: space surrounding the content area extending to the border.
- [NSTextBlockLayerBorder](layer/border.md): The border of the text block.
- [NSTextBlockLayerMargin](layer/margin.md): Margin of the text block: space surrounding the border.

### Enumeration Cases

- [NSTextBlockBorder](../nstextblocklayer/nstextblockborder.md): Deprecated.
- [NSTextBlockMargin](../nstextblocklayer/nstextblockmargin.md): Deprecated.
- [NSTextBlockPadding](../nstextblocklayer/nstextblockpadding.md): Deprecated.

## See Also

### Getting and setting margins, borders, and padding

- [setWidth:type:forLayer:](setwidth%28__type_for_%29.md): Sets the width of all edges of a specified layer of the text block.
- [setWidth:type:forLayer:rectEdge:](setwidth%28__type_for_rectedge_%29.md)
- [widthForLayer:rectEdge:](width%28for_rectedge_%29.md)
- [widthValueTypeForLayer:rectEdge:](widthvaluetype%28for_rectedge_%29.md)
