> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/boolean/currentvalue

# currentValue (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Get or set the current value for this parameter.

## Declaration

```swift
var currentValue: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property can be observed if appropriate in order to monitor changes to the set of `MERAWProcessingParameters` vended by the extension.

## See Also

### Properties

- [initialValue](initialvalue.md): The initial value for this parameter as defined in the sequence metadata.

# currentValue (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Get or set the current value for this parameter.

## Declaration

```objectivec
@property (readwrite) BOOL currentValue;
```

<a id="Discussion"></a>

## Discussion

This property can be observed if appropriate in order to monitor changes to the set of `MERAWProcessingParameters` vended by the extension.

## See Also

### Properties

- [initialValue](initialvalue.md): The initial value for this parameter as defined in the sequence metadata.
