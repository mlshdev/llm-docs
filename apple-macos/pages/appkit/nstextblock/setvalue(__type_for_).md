> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/setvalue(_:type:for:)](https://developer.apple.com/documentation/appkit/nstextblock/setvalue(_:type:for:))

# setValue(\_:type:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Sets a dimension of the text block.

## Declaration

```swift
func setValue(_ value: CGFloat, type: NSTextBlock.ValueType, for dimension: NSTextBlock.Dimension)
```

## Parameters

- `value`: The new value for the dimension.
- `type`: The type of value being provided. This controls how `value` is interpreted.
- `dimension`: The dimension to set.

## See Also

### Working with dimensions of content

- [value(for:)](value%28for_%29.md): Returns the value of the specified text block dimension.
- [valueType(for:)](valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [setContentWidth(\_:type:)](setcontentwidth%28__type_%29.md): Sets the width of the text block.
- [contentWidth](contentwidth.md): The width of the text block.
- [contentWidthValueType](contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlock.Dimension](dimension.md): The following constants specify values used by the methods [setValue(\_:type:for:)](setvalue%28__type_for_%29.md), [value(for:)](value%28for_%29.md), and [valueType(for:)](valuetype%28for_%29.md) to specify text block dimensions.
- [NSTextBlock.ValueType](valuetype.md): The following constants specify values used by the methods [setValue(\_:type:for:)](setvalue%28__type_for_%29.md) and [valueType(for:)](valuetype%28for_%29.md) to specify text block value types.

# setValue:type:forDimension: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Sets a dimension of the text block.

## Declaration

```objectivec
- (void) setValue:(CGFloat) value type:(NSTextBlockValueType) type forDimension:(NSTextBlockDimension) dimension;
```

## Parameters

- `value`: The new value for the dimension.
- `type`: The type of value being provided. This controls how `value` is interpreted.
- `dimension`: The dimension to set.

## See Also

### Working with dimensions of content

- [valueForDimension:](value%28for_%29.md): Returns the value of the specified text block dimension.
- [valueTypeForDimension:](valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [setContentWidth:type:](setcontentwidth%28__type_%29.md): Sets the width of the text block.
- [contentWidth](contentwidth.md): The width of the text block.
- [contentWidthValueType](contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlockDimension](dimension.md): The following constants specify values used by the methods [setValue:type:forDimension:](setvalue%28__type_for_%29.md), [valueForDimension:](value%28for_%29.md), and [valueTypeForDimension:](valuetype%28for_%29.md) to specify text block dimensions.
- [NSTextBlockValueType](valuetype.md): The following constants specify values used by the methods [setValue:type:forDimension:](setvalue%28__type_for_%29.md) and [valueTypeForDimension:](valuetype%28for_%29.md) to specify text block value types.
