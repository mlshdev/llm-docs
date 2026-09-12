> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/compositionparameterview(_:didchangeparameterwithkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/compositionparameterview(_:didchangeparameterwithkey:))

# compositionParameterView(\_:didChangeParameterWithKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Called after an input parameter in the composition parameter view has been edited.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func compositionParameterView(_ parameterView: QCCompositionParameterView!, didChangeParameterWithKey portKey: String!)
```

## Parameters

- `parameterView`: The composition parameter view in which the parameter changed.
- `portKey`: A key for one of the composition parameters, which is provided to you by the Quartz Composer engine.

# compositionParameterView:didChangeParameterWithKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Called after an input parameter in the composition parameter view has been edited.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) compositionParameterView:(QCCompositionParameterView *) parameterView didChangeParameterWithKey:(NSString *) portKey;
```

## Parameters

- `parameterView`: The composition parameter view in which the parameter changed.
- `portKey`: A key for one of the composition parameters, which is provided to you by the Quartz Composer engine.
