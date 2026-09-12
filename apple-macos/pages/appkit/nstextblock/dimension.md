> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/dimension](https://developer.apple.com/documentation/appkit/nstextblock/dimension)

# NSTextBlock.Dimension (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The following constants specify values used by the methods [setValue(\_:type:for:)](setvalue%28__type_for_%29.md), [value(for:)](value%28for_%29.md), and [valueType(for:)](valuetype%28for_%29.md) to specify text block dimensions.

## Declaration

```swift
enum Dimension
```

## Topics

### Constants

- [NSTextBlock.Dimension.width](dimension/width.md): Width of the text block.
- [NSTextBlock.Dimension.minimumWidth](dimension/minimumwidth.md): Minimum width of the text block.
- [NSTextBlock.Dimension.maximumWidth](dimension/maximumwidth.md): Maximum width of the text block.
- [NSTextBlock.Dimension.height](dimension/height.md): Height of the text block.
- [NSTextBlock.Dimension.minimumHeight](dimension/minimumheight.md): Minimum height of the text block.
- [NSTextBlock.Dimension.maximumHeight](dimension/maximumheight.md): Maximum height of the text block.

### Initializers

- [init(rawValue:)](dimension/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with dimensions of content

- [setValue(\_:type:for:)](setvalue%28__type_for_%29.md): Sets a dimension of the text block.
- [value(for:)](value%28for_%29.md): Returns the value of the specified text block dimension.
- [valueType(for:)](valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [setContentWidth(\_:type:)](setcontentwidth%28__type_%29.md): Sets the width of the text block.
- [contentWidth](contentwidth.md): The width of the text block.
- [contentWidthValueType](contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlock.ValueType](valuetype.md): The following constants specify values used by the methods [setValue(\_:type:for:)](setvalue%28__type_for_%29.md) and [valueType(for:)](valuetype%28for_%29.md) to specify text block value types.

# NSTextBlockDimension (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The following constants specify values used by the methods [setValue:type:forDimension:](setvalue%28__type_for_%29.md), [valueForDimension:](value%28for_%29.md), and [valueTypeForDimension:](valuetype%28for_%29.md) to specify text block dimensions.

## Declaration

```objectivec
enum NSTextBlockDimension : NSInteger;
```

## Topics

### Constants

- [NSTextBlockDimensionWidth](dimension/width.md): Width of the text block.
- [NSTextBlockDimensionMinimumWidth](dimension/minimumwidth.md): Minimum width of the text block.
- [NSTextBlockDimensionMaximumWidth](dimension/maximumwidth.md): Maximum width of the text block.
- [NSTextBlockDimensionHeight](dimension/height.md): Height of the text block.
- [NSTextBlockDimensionMinimumHeight](dimension/minimumheight.md): Minimum height of the text block.
- [NSTextBlockDimensionMaximumHeight](dimension/maximumheight.md): Maximum height of the text block.

### Enumeration Cases

- [NSTextBlockHeight](../nstextblockdimension/nstextblockheight.md): Deprecated.
- [NSTextBlockMaximumHeight](../nstextblockdimension/nstextblockmaximumheight.md): Deprecated.
- [NSTextBlockMaximumWidth](../nstextblockdimension/nstextblockmaximumwidth.md): Deprecated.
- [NSTextBlockMinimumHeight](../nstextblockdimension/nstextblockminimumheight.md): Deprecated.
- [NSTextBlockMinimumWidth](../nstextblockdimension/nstextblockminimumwidth.md): Deprecated.
- [NSTextBlockWidth](../nstextblockdimension/nstextblockwidth.md): Deprecated.

## See Also

### Working with dimensions of content

- [setValue:type:forDimension:](setvalue%28__type_for_%29.md): Sets a dimension of the text block.
- [valueForDimension:](value%28for_%29.md): Returns the value of the specified text block dimension.
- [valueTypeForDimension:](valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [setContentWidth:type:](setcontentwidth%28__type_%29.md): Sets the width of the text block.
- [contentWidth](contentwidth.md): The width of the text block.
- [contentWidthValueType](contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlockValueType](valuetype.md): The following constants specify values used by the methods [setValue:type:forDimension:](setvalue%28__type_for_%29.md) and [valueTypeForDimension:](valuetype%28for_%29.md) to specify text block value types.
