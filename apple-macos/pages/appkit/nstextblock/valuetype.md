> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/valuetype](https://developer.apple.com/documentation/appkit/nstextblock/valuetype)

# NSTextBlock.ValueType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The following constants specify values used by the methods [setValue(\_:type:for:)](setvalue%28__type_for_%29.md) and [valueType(for:)](valuetype%28for_%29.md) to specify text block value types.

## Declaration

```swift
enum ValueType
```

## Topics

### Constants

- [absoluteValueType](valuetype/absolutevaluetype.md): Deprecated. Absolute value in points.
- [percentageValueType](valuetype/percentagevaluetype.md): Deprecated. Percentage value (out of 100).

### Enumeration Cases

- [NSTextBlock.ValueType.absolute](valuetype/absolute.md)
- [NSTextBlock.ValueType.percentage](valuetype/percentage.md)

### Initializers

- [init(rawValue:)](valuetype/init%28rawvalue_%29.md)

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
- [NSTextBlock.Dimension](dimension.md): The following constants specify values used by the methods [setValue(\_:type:for:)](setvalue%28__type_for_%29.md), [value(for:)](value%28for_%29.md), and [valueType(for:)](valuetype%28for_%29.md) to specify text block dimensions.

# NSTextBlockValueType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The following constants specify values used by the methods [setValue:type:forDimension:](setvalue%28__type_for_%29.md) and [valueTypeForDimension:](valuetype%28for_%29.md) to specify text block value types.

## Declaration

```objectivec
enum NSTextBlockValueType : NSInteger;
```

## Topics

### Constants

- [NSTextBlockAbsoluteValueType](valuetype/absolutevaluetype.md): Deprecated. Absolute value in points.
- [NSTextBlockPercentageValueType](valuetype/percentagevaluetype.md): Deprecated. Percentage value (out of 100).

### Enumeration Cases

- [NSTextBlockValueTypeAbsolute](valuetype/absolute.md)
- [NSTextBlockValueTypePercentage](valuetype/percentage.md)

## See Also

### Working with dimensions of content

- [setValue:type:forDimension:](setvalue%28__type_for_%29.md): Sets a dimension of the text block.
- [valueForDimension:](value%28for_%29.md): Returns the value of the specified text block dimension.
- [valueTypeForDimension:](valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [setContentWidth:type:](setcontentwidth%28__type_%29.md): Sets the width of the text block.
- [contentWidth](contentwidth.md): The width of the text block.
- [contentWidthValueType](contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlockDimension](dimension.md): The following constants specify values used by the methods [setValue:type:forDimension:](setvalue%28__type_for_%29.md), [valueForDimension:](value%28for_%29.md), and [valueTypeForDimension:](valuetype%28for_%29.md) to specify text block dimensions.
