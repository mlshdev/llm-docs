> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionrenderer/value(forinputkey:)](https://developer.apple.com/documentation/quartz/qccompositionrenderer/value(forinputkey:))

# value(forInputKey:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the value for an input port of a composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func value(forInputKey key: String!) -> Any!
```

## Parameters

- `key`: The key associated with an input port for the root patch of a composition. This method throws an exception if `key` is invalid.

<a id="return-value"></a>

## Return Value

The value. The data type of returned value depends on the type of the input port. See [QCPortAttributeTypeKey](../qcportattributetypekey.md) for more information.

## See Also

### Passing and Retrieving Values From a Composition

- [setValue(\_:forInputKey:)](setvalue%28__forinputkey_%29.md): Deprecated. Sets the value for an input port of a composition.
- [value(forOutputKey:)](value%28foroutputkey_%29.md): Deprecated. Returns the value for an output port of a composition.
- [value(forOutputKey:ofType:)](value%28foroutputkey_oftype_%29.md): Deprecated. Returns the current value on an output port (identified by its key) of the root patch of the composition.

# valueForInputKey: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the value for an input port of a composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) valueForInputKey:(NSString *) key;
```

## Parameters

- `key`: The key associated with an input port for the root patch of a composition. This method throws an exception if `key` is invalid.

<a id="return-value"></a>

## Return Value

The value. The data type of returned value depends on the type of the input port. See [QCPortAttributeTypeKey](../qcportattributetypekey.md) for more information.

## See Also

### Passing and Retrieving Values From a Composition

- [setValue:forInputKey:](setvalue%28__forinputkey_%29.md): Deprecated. Sets the value for an input port of a composition.
- [valueForOutputKey:](value%28foroutputkey_%29.md): Deprecated. Returns the value for an output port of a composition.
- [valueForOutputKey:ofType:](value%28foroutputkey_oftype_%29.md): Deprecated. Returns the current value on an output port (identified by its key) of the root patch of the composition.
