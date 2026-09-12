> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/setcontentwidth(_:type:)](https://developer.apple.com/documentation/appkit/nstextblock/setcontentwidth(_:type:))

# setContentWidth(\_:type:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Sets the width of the text block.

## Declaration

```swift
func setContentWidth(_ contentWidth: CGFloat, type: NSTextBlock.ValueType)
```

## Parameters

- `contentWidth`: The new value for the width.
- `type`: The type of value being provided. This controls how `contentWidth` is interpreted.

## See Also

### Working with dimensions of content

- [setValue(\_:type:for:)](setvalue%28__type_for_%29.md): Sets a dimension of the text block.
- [value(for:)](value%28for_%29.md): Returns the value of the specified text block dimension.
- [valueType(for:)](valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [contentWidth](contentwidth.md): The width of the text block.
- [contentWidthValueType](contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlock.Dimension](dimension.md): The following constants specify values used by the methods [setValue(\_:type:for:)](setvalue%28__type_for_%29.md), [value(for:)](value%28for_%29.md), and [valueType(for:)](valuetype%28for_%29.md) to specify text block dimensions.
- [NSTextBlock.ValueType](valuetype.md): The following constants specify values used by the methods [setValue(\_:type:for:)](setvalue%28__type_for_%29.md) and [valueType(for:)](valuetype%28for_%29.md) to specify text block value types.

# setContentWidth:type: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Sets the width of the text block.

## Declaration

```objectivec
- (void) setContentWidth:(CGFloat) contentWidth type:(NSTextBlockValueType) type;
```

## Parameters

- `contentWidth`: The new value for the width.
- `type`: The type of value being provided. This controls how `contentWidth` is interpreted.

## See Also

### Working with dimensions of content

- [setValue:type:forDimension:](setvalue%28__type_for_%29.md): Sets a dimension of the text block.
- [valueForDimension:](value%28for_%29.md): Returns the value of the specified text block dimension.
- [valueTypeForDimension:](valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [contentWidth](contentwidth.md): The width of the text block.
- [contentWidthValueType](contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlockDimension](dimension.md): The following constants specify values used by the methods [setValue:type:forDimension:](setvalue%28__type_for_%29.md), [valueForDimension:](value%28for_%29.md), and [valueTypeForDimension:](valuetype%28for_%29.md) to specify text block dimensions.
- [NSTextBlockValueType](valuetype.md): The following constants specify values used by the methods [setValue:type:forDimension:](setvalue%28__type_for_%29.md) and [valueTypeForDimension:](valuetype%28for_%29.md) to specify text block value types.
