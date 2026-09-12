> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/setvalue(_:foroutputkey:)](https://developer.apple.com/documentation/quartz/qcplugin/setvalue(_:foroutputkey:))

# setValue(\_:forOutputKey:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the value of an output port.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func setValue(_ value: Any!, forOutputKey key: String!) -> Bool
```

## Parameters

- `value`: The value to associate with the specified key.
- `key`: The key associated with the output port whose value you want to set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; [false](https://developer.apple.com/documentation/swift/false)  if called outside of the [execute(\_:atTime:withArguments:)](execute%28__attime_witharguments_%29.md) method.

<a id="Discussion"></a>

## Discussion

You call this method from within your [execute(\_:atTime:withArguments:)](execute%28__attime_witharguments_%29.md) method to set the output values of your custom patch.

## See Also

### Getting and Setting Port Values

- [didValue(forInputKeyChange:)](didvalue%28forinputkeychange_%29.md): Deprecated. Returns whether the input port value changed since the last execution of the custom patch.
- [value(forInputKey:)](value%28forinputkey_%29.md): Deprecated. Returns the current value for an input port.

# setValue:forOutputKey: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the value of an output port.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) setValue:(id) value forOutputKey:(NSString *) key;
```

## Parameters

- `value`: The value to associate with the specified key.
- `key`: The key associated with the output port whose value you want to set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; [false](https://developer.apple.com/documentation/swift/false)  if called outside of the [execute:atTime:withArguments:](execute%28__attime_witharguments_%29.md) method.

<a id="Discussion"></a>

## Discussion

You call this method from within your [execute:atTime:withArguments:](execute%28__attime_witharguments_%29.md) method to set the output values of your custom patch.

## See Also

### Getting and Setting Port Values

- [didValueForInputKeyChange:](didvalue%28forinputkeychange_%29.md): Deprecated. Returns whether the input port value changed since the last execution of the custom patch.
- [valueForInputKey:](value%28forinputkey_%29.md): Deprecated. Returns the current value for an input port.
