> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingintegerparameter/hasneutralvalue:](https://developer.apple.com/documentation/mediaextension/merawprocessingintegerparameter/hasneutralvalue:)

# hasNeutralValue:

**Interface language:** Objective-C

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

The optional neutral value for this parameter.

## Declaration

```objectivec
- (BOOL) hasNeutralValue:(NSInteger *) outNeutralValue;
```

## Parameters

- `outNeutralValue`: The returned neutral value for the parameter.

<a id="return-value"></a>

## Return Value

`YES` if a neutral value exists for this parameter; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

If the return value is `YES` and `outNeutralValue` isn’t `nil`, the value held by `outNeutralValue` will be set to the neutral value. If the return value is `NO` and `outNeutralValue` isn’t `nil`, the value held by `outNeutralValue` will be set to 0.

## See Also

### Inspecting a parameter

- [hasCameraValue:](hascameravalue_.md): The optional camera value for this parameter.
