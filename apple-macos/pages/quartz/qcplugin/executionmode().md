> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/executionmode()](https://developer.apple.com/documentation/quartz/qcplugin/executionmode())

# executionMode() (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the execution mode of the custom patch.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class func executionMode() -> QCPlugInExecutionMode
```

<a id="return-value"></a>

## Return Value

The execution mode of the custom patch. See [QCPlugInExecutionMode](../qcpluginexecutionmode.md) for the constants you can return.

<a id="Discussion"></a>

## Discussion

You must implement this method to define whether your custom patch is a provider, a processor, or a consumer.

## See Also

### Defining the Characteristics of a Custom Patch

- [timeMode()](timemode%28%29.md): Deprecated. Returns the time mode for the custom patch.

# executionMode (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the execution mode of the custom patch.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (QCPlugInExecutionMode) executionMode;
```

<a id="return-value"></a>

## Return Value

The execution mode of the custom patch. See [QCPlugInExecutionMode](../qcpluginexecutionmode.md) for the constants you can return.

<a id="Discussion"></a>

## Discussion

You must implement this method to define whether your custom patch is a provider, a processor, or a consumer.

## See Also

### Defining the Characteristics of a Custom Patch

- [timeMode](timemode%28%29.md): Deprecated. Returns the time mode for the custom patch.
