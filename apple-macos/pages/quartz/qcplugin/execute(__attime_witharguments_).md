> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/execute(_:attime:witharguments:)](https://developer.apple.com/documentation/quartz/qcplugin/execute(_:attime:witharguments:))

# execute(\_:atTime:withArguments:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Performs the processing or rendering tasks appropriate for the custom patch.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func execute(_ context: (any QCPlugInContext)!, atTime time: TimeInterval, withArguments arguments: [AnyHashable : Any]!) -> Bool
```

## Parameters

- `context`: An opaque object , conforming to the [QCPlugInContext](../qcplugincontext.md) protocol, that represents the execution context of the `QCPlugIn` object. Do not retain this object or use it outside of the scope of this method.
- `time`: The execution interval.
- `arguments`: A dictionary of arguments that can be used during execution. See [Execution Arguments](../execution-arguments.md).

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) indicates the custom patch was not able to execute successfully. In this case, the Quartz Composer engine stops rendering the current frame.

<a id="Discussion"></a>

## Discussion

The Quartz Composer engine calls this method each time your custom patch needs to execute. You must implement this method. The method should perform whatever tasks are appropriate for the custom patch, such as:

- reading values from the input ports
- computing output values
- updating the values on the output ports
- rendering to the execution context

For example implementations of this method, see [Quartz Composer Custom Patch Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzComposer_Patch_PlugIn_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004787).

# execute:atTime:withArguments: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Performs the processing or rendering tasks appropriate for the custom patch.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) execute:(id<QCPlugInContext>) context atTime:(NSTimeInterval) time withArguments:(NSDictionary *) arguments;
```

## Parameters

- `context`: An opaque object , conforming to the [QCPlugInContext](../qcplugincontext.md) protocol, that represents the execution context of the `QCPlugIn` object. Do not retain this object or use it outside of the scope of this method.
- `time`: The execution interval.
- `arguments`: A dictionary of arguments that can be used during execution. See [Execution Arguments](../execution-arguments.md).

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) indicates the custom patch was not able to execute successfully. In this case, the Quartz Composer engine stops rendering the current frame.

<a id="Discussion"></a>

## Discussion

The Quartz Composer engine calls this method each time your custom patch needs to execute. You must implement this method. The method should perform whatever tasks are appropriate for the custom patch, such as:

- reading values from the input ports
- computing output values
- updating the values on the output ports
- rendering to the execution context

For example implementations of this method, see [Quartz Composer Custom Patch Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzComposer_Patch_PlugIn_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004787).
