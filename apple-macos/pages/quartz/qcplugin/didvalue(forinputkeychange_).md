> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/didvalue(forinputkeychange:)](https://developer.apple.com/documentation/quartz/qcplugin/didvalue(forinputkeychange:))

# didValue(forInputKeyChange:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns whether the input port value changed since the last execution of the custom patch.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func didValue(forInputKeyChange key: String!) -> Bool
```

## Parameters

- `key`: The key for the input port whose value you want to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value on the input port changed since the last time the [execute(\_:atTime:withArguments:)](execute%28__attime_witharguments_%29.md) method was called; always returns [false](https://developer.apple.com/documentation/swift/false) if called outside of the `execute:atTime:withArguments:` method.

## See Also

### Getting and Setting Port Values

- [value(forInputKey:)](value%28forinputkey_%29.md): Deprecated. Returns the current value for an input port.
- [setValue(\_:forOutputKey:)](setvalue%28__foroutputkey_%29.md): Deprecated. Sets the value of an output port.

# didValueForInputKeyChange: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns whether the input port value changed since the last execution of the custom patch.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) didValueForInputKeyChange:(NSString *) key;
```

## Parameters

- `key`: The key for the input port whose value you want to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value on the input port changed since the last time the [execute:atTime:withArguments:](execute%28__attime_witharguments_%29.md) method was called; always returns [false](https://developer.apple.com/documentation/swift/false) if called outside of the `execute:atTime:withArguments:` method.

## See Also

### Getting and Setting Port Values

- [valueForInputKey:](value%28forinputkey_%29.md): Deprecated. Returns the current value for an input port.
- [setValue:forOutputKey:](setvalue%28__foroutputkey_%29.md): Deprecated. Sets the value of an output port.
