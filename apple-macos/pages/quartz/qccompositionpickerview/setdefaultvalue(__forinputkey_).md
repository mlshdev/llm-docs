> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionpickerview/setdefaultvalue(_:forinputkey:)](https://developer.apple.com/documentation/quartz/qccompositionpickerview/setdefaultvalue(_:forinputkey:))

# setDefaultValue(\_:forInputKey:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the default value to use for a composition input parameter.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func setDefaultValue(_ value: Any!, forInputKey key: String!)
```

## Parameters

- `value`: This default value overrides any initial value existing for composition input parameters with this key. Pass `nil` to clear the default value.
- `key`: The input parameter key whose default value you want to set.

## See Also

### Setting Composition Input Parameters

- [resetDefaultInputValues()](resetdefaultinputvalues%28%29.md): Deprecated. Clears all previously set default values for composition input parameters.

# setDefaultValue:forInputKey: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the default value to use for a composition input parameter.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) setDefaultValue:(id) value forInputKey:(NSString *) key;
```

## Parameters

- `value`: This default value overrides any initial value existing for composition input parameters with this key. Pass `nil` to clear the default value.
- `key`: The input parameter key whose default value you want to set.

## See Also

### Setting Composition Input Parameters

- [resetDefaultInputValues](resetdefaultinputvalues%28%29.md): Deprecated. Clears all previously set default values for composition input parameters.
