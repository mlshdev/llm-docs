> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/value(for:)](https://developer.apple.com/documentation/appkit/nstextblock/value(for:))

# value(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the value of the specified text block dimension.

## Declaration

```swift
func value(for dimension: NSTextBlock.Dimension) -> CGFloat
```

<a id="return-value"></a>

## Return Value

The value for the specified dimension. This value should be interpreted according to the value type returned by [valueType(for:)](valuetype%28for_%29.md).

## See Also

### Working with dimensions of content

- [setValue(\_:type:for:)](setvalue%28__type_for_%29.md): Sets a dimension of the text block.
- [valueType(for:)](valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [setContentWidth(\_:type:)](setcontentwidth%28__type_%29.md): Sets the width of the text block.
- [contentWidth](contentwidth.md): The width of the text block.
- [contentWidthValueType](contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlock.Dimension](dimension.md): The following constants specify values used by the methods [setValue(\_:type:for:)](setvalue%28__type_for_%29.md), [value(for:)](value%28for_%29.md), and [valueType(for:)](valuetype%28for_%29.md) to specify text block dimensions.
- [NSTextBlock.ValueType](valuetype.md): The following constants specify values used by the methods [setValue(\_:type:for:)](setvalue%28__type_for_%29.md) and [valueType(for:)](valuetype%28for_%29.md) to specify text block value types.

# valueForDimension: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the value of the specified text block dimension.

## Declaration

```objectivec
- (CGFloat) valueForDimension:(NSTextBlockDimension) dimension;
```

<a id="return-value"></a>

## Return Value

The value for the specified dimension. This value should be interpreted according to the value type returned by [valueTypeForDimension:](valuetype%28for_%29.md).

## See Also

### Working with dimensions of content

- [setValue:type:forDimension:](setvalue%28__type_for_%29.md): Sets a dimension of the text block.
- [valueTypeForDimension:](valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [setContentWidth:type:](setcontentwidth%28__type_%29.md): Sets the width of the text block.
- [contentWidth](contentwidth.md): The width of the text block.
- [contentWidthValueType](contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlockDimension](dimension.md): The following constants specify values used by the methods [setValue:type:forDimension:](setvalue%28__type_for_%29.md), [valueForDimension:](value%28for_%29.md), and [valueTypeForDimension:](valuetype%28for_%29.md) to specify text block dimensions.
- [NSTextBlockValueType](valuetype.md): The following constants specify values used by the methods [setValue:type:forDimension:](setvalue%28__type_for_%29.md) and [valueTypeForDimension:](valuetype%28for_%29.md) to specify text block value types.
