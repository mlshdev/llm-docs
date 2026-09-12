> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionrenderer/setvalue(_:forinputkey:)](https://developer.apple.com/documentation/quartz/qccompositionrenderer/setvalue(_:forinputkey:))

# setValue(\_:forInputKey:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the value for an input port of a composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func setValue(_ value: Any!, forInputKey key: String!) -> Bool
```

## Parameters

- `value`: The value to set for the input port. The input port must be at the root patch of the composition. The data type of the `value` argument must match the input port. See [QCPortAttributeTypeKey](../qcportattributetypekey.md) for the data types accepted by a particular port type.
- `key`: The key associated with the input port of the composition. This method throws an exception if `key` is invalid.

<a id="return-value"></a>

## Return Value

Returns [false](https://developer.apple.com/documentation/swift/false) if it cannot set the value.

## See Also

### Passing and Retrieving Values From a Composition

- [value(forInputKey:)](value%28forinputkey_%29.md): Deprecated. Returns the value for an input port of a composition.
- [value(forOutputKey:)](value%28foroutputkey_%29.md): Deprecated. Returns the value for an output port of a composition.
- [value(forOutputKey:ofType:)](value%28foroutputkey_oftype_%29.md): Deprecated. Returns the current value on an output port (identified by its key) of the root patch of the composition.

# setValue:forInputKey: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the value for an input port of a composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) setValue:(id) value forInputKey:(NSString *) key;
```

## Parameters

- `value`: The value to set for the input port. The input port must be at the root patch of the composition. The data type of the `value` argument must match the input port. See [QCPortAttributeTypeKey](../qcportattributetypekey.md) for the data types accepted by a particular port type.
- `key`: The key associated with the input port of the composition. This method throws an exception if `key` is invalid.

<a id="return-value"></a>

## Return Value

Returns [false](https://developer.apple.com/documentation/swift/false) if it cannot set the value.

## See Also

### Passing and Retrieving Values From a Composition

- [valueForInputKey:](value%28forinputkey_%29.md): Deprecated. Returns the value for an input port of a composition.
- [valueForOutputKey:](value%28foroutputkey_%29.md): Deprecated. Returns the value for an output port of a composition.
- [valueForOutputKey:ofType:](value%28foroutputkey_oftype_%29.md): Deprecated. Returns the current value on an output port (identified by its key) of the root patch of the composition.
