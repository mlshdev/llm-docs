> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionrenderer/attributes()](https://developer.apple.com/documentation/quartz/qccompositionrenderer/attributes())

# attributes() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the attributes of the composition associated with the renderer.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func attributes() -> [AnyHashable : Any]!
```

<a id="return-value"></a>

## Return Value

A dictionary that contains the attributes that describe the composition, including the input and output ports of the root patch.

<a id="Discussion"></a>

## Discussion

The dictionary can define any of the attributes that are specified by the composition attribute keys. See [QCCompositionAttributeNameKey](../qccompositionattributenamekey.md), QCCompositionAttributeDescriptionKey, and [QCCompositionAttributeCopyrightKey](../qccompositionattributecopyrightkey.md).

The dictionary can also contain dictionaries that correspond to the keys that identify the input and output ports of the root patch of the composition. See QCPortAttributeTypeKey, QCPortAttributeNameKey, QCPortAttributeMinimumValueKey, QCPortAttributeMaximumValueKey, and [QCPortAttributeMenuItemsKey](../qcportattributemenuitemskey.md).

## See Also

### Related Documentation

- [inputKeys()](inputkeys%28%29.md): Deprecated. Returns an array that contains the keys that identify the input ports of the root patch of the composition.
- [outputKeys()](outputkeys%28%29.md): Deprecated. Returns an array that contains the keys that identify the output ports of the root patch of the composition.

# attributes (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the attributes of the composition associated with the renderer.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSDictionary *) attributes;
```

<a id="return-value"></a>

## Return Value

A dictionary that contains the attributes that describe the composition, including the input and output ports of the root patch.

<a id="Discussion"></a>

## Discussion

The dictionary can define any of the attributes that are specified by the composition attribute keys. See [QCCompositionAttributeNameKey](../qccompositionattributenamekey.md), QCCompositionAttributeDescriptionKey, and [QCCompositionAttributeCopyrightKey](../qccompositionattributecopyrightkey.md).

The dictionary can also contain dictionaries that correspond to the keys that identify the input and output ports of the root patch of the composition. See QCPortAttributeTypeKey, QCPortAttributeNameKey, QCPortAttributeMinimumValueKey, QCPortAttributeMaximumValueKey, and [QCPortAttributeMenuItemsKey](../qcportattributemenuitemskey.md).

## See Also

### Related Documentation

- [inputKeys](inputkeys%28%29.md): Deprecated. Returns an array that contains the keys that identify the input ports of the root patch of the composition.
- [outputKeys](outputkeys%28%29.md): Deprecated. Returns an array that contains the keys that identify the output ports of the root patch of the composition.
