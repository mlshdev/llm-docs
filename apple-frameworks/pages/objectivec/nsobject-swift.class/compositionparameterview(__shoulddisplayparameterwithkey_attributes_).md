> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/compositionparameterview(_:shoulddisplayparameterwithkey:attributes:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/compositionparameterview(_:shoulddisplayparameterwithkey:attributes:))

# compositionParameterView(\_:shouldDisplayParameterWithKey:attributes:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Allows you to define which composition parameters are visible in the user interface when the composition parameter view refreshes.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func compositionParameterView(_ parameterView: QCCompositionParameterView!, shouldDisplayParameterWithKey portKey: String!, attributes portAttributes: [AnyHashable : Any]! = [:]) -> Bool
```

## Parameters

- `parameterView`: The composition parameter view in which the selection changed.
- `portKey`: A key for one of the composition parameters, which is provided to you by the Quartz Composer engine.
- `portAttributes`: A dictionary of the attributes that you want to display in the user interface.

<a id="return-value"></a>

## Return Value

Return[YES](../yes.md) if the port attributes should be displayed; [NO](../no.md) otherwise.

# compositionParameterView:shouldDisplayParameterWithKey:attributes: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Allows you to define which composition parameters are visible in the user interface when the composition parameter view refreshes.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) compositionParameterView:(QCCompositionParameterView *) parameterView shouldDisplayParameterWithKey:(NSString *) portKey attributes:(NSDictionary *) portAttributes;
```

## Parameters

- `parameterView`: The composition parameter view in which the selection changed.
- `portKey`: A key for one of the composition parameters, which is provided to you by the Quartz Composer engine.
- `portAttributes`: A dictionary of the attributes that you want to display in the user interface.

<a id="return-value"></a>

## Return Value

Return[YES](../yes.md) if the port attributes should be displayed; [NO](../no.md) otherwise.
