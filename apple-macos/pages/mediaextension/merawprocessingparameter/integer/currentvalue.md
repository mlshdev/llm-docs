> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/integer/currentvalue

# currentValue (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Get or set the current value for this parameter.

## Declaration

```swift
var currentValue: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This property can be observed if appropriate in order to monitor changes to the set of `MERAWProcessingParameters` vended by the extension.

## See Also

### Properties

- [initialValue](initialvalue.md): The initial value for this parameter as defined in the sequence metadata.
- [maximumValue](maximumvalue.md): The maximum value for this parameter.
- [minimumValue](minimumvalue.md): The minimum value for this parameter.

# currentValue (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Get or set the current value for this parameter.

## Declaration

```objectivec
@property (readwrite) NSInteger currentValue;
```

<a id="Discussion"></a>

## Discussion

This property can be observed if appropriate in order to monitor changes to the set of `MERAWProcessingParameters` vended by the extension.

## See Also

### Properties

- [initialValue](initialvalue.md): The initial value for this parameter as defined in the sequence metadata.
- [maximumValue](maximumvalue.md): The maximum value for this parameter.
- [minimumValue](minimumvalue.md): The minimum value for this parameter.
