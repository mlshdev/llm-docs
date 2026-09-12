> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/contentwidth](https://developer.apple.com/documentation/appkit/nstextblock/contentwidth)

# contentWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The width of the text block.

## Declaration

```swift
var contentWidth: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This property interpreted according to the value type returned by [contentWidthValueType](contentwidthvaluetype.md).

## See Also

### Working with dimensions of content

- [setValue(\_:type:for:)](setvalue%28__type_for_%29.md): Sets a dimension of the text block.
- [value(for:)](value%28for_%29.md): Returns the value of the specified text block dimension.
- [valueType(for:)](valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [setContentWidth(\_:type:)](setcontentwidth%28__type_%29.md): Sets the width of the text block.
- [contentWidthValueType](contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlock.Dimension](dimension.md): The following constants specify values used by the methods [setValue(\_:type:for:)](setvalue%28__type_for_%29.md), [value(for:)](value%28for_%29.md), and [valueType(for:)](valuetype%28for_%29.md) to specify text block dimensions.
- [NSTextBlock.ValueType](valuetype.md): The following constants specify values used by the methods [setValue(\_:type:for:)](setvalue%28__type_for_%29.md) and [valueType(for:)](valuetype%28for_%29.md) to specify text block value types.

# contentWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The width of the text block.

## Declaration

```objectivec
@property (readonly) CGFloat contentWidth;
```

<a id="Discussion"></a>

## Discussion

This property interpreted according to the value type returned by [contentWidthValueType](contentwidthvaluetype.md).

## See Also

### Working with dimensions of content

- [setValue:type:forDimension:](setvalue%28__type_for_%29.md): Sets a dimension of the text block.
- [valueForDimension:](value%28for_%29.md): Returns the value of the specified text block dimension.
- [valueTypeForDimension:](valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [setContentWidth:type:](setcontentwidth%28__type_%29.md): Sets the width of the text block.
- [contentWidthValueType](contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlockDimension](dimension.md): The following constants specify values used by the methods [setValue:type:forDimension:](setvalue%28__type_for_%29.md), [valueForDimension:](value%28for_%29.md), and [valueTypeForDimension:](valuetype%28for_%29.md) to specify text block dimensions.
- [NSTextBlockValueType](valuetype.md): The following constants specify values used by the methods [setValue:type:forDimension:](setvalue%28__type_for_%29.md) and [valueTypeForDimension:](valuetype%28for_%29.md) to specify text block value types.
