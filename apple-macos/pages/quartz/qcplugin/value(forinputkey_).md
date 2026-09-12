> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/value(forinputkey:)](https://developer.apple.com/documentation/quartz/qcplugin/value(forinputkey:))

# value(forInputKey:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the current value for an input port.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func value(forInputKey key: String!) -> Any!
```

## Parameters

- `key`: The key for the input port you want to check.

<a id="return-value"></a>

## Return Value

The value associated with the key or `nil` if called outside of the [execute(\_:atTime:withArguments:)](execute%28__attime_witharguments_%29.md) method.

<a id="Discussion"></a>

## Discussion

You call this method from within your [execute(\_:atTime:withArguments:)](execute%28__attime_witharguments_%29.md) method to retrieve the input values of your custom patch.

## See Also

### Getting and Setting Port Values

- [didValue(forInputKeyChange:)](didvalue%28forinputkeychange_%29.md): Deprecated. Returns whether the input port value changed since the last execution of the custom patch.
- [setValue(\_:forOutputKey:)](setvalue%28__foroutputkey_%29.md): Deprecated. Sets the value of an output port.

# valueForInputKey: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the current value for an input port.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) valueForInputKey:(NSString *) key;
```

## Parameters

- `key`: The key for the input port you want to check.

<a id="return-value"></a>

## Return Value

The value associated with the key or `nil` if called outside of the [execute:atTime:withArguments:](execute%28__attime_witharguments_%29.md) method.

<a id="Discussion"></a>

## Discussion

You call this method from within your [execute:atTime:withArguments:](execute%28__attime_witharguments_%29.md) method to retrieve the input values of your custom patch.

## See Also

### Getting and Setting Port Values

- [didValueForInputKeyChange:](didvalue%28forinputkeychange_%29.md): Deprecated. Returns whether the input port value changed since the last execution of the custom patch.
- [setValue:forOutputKey:](setvalue%28__foroutputkey_%29.md): Deprecated. Sets the value of an output port.
