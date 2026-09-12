> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/list/currentvalue](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/list/currentvalue)

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
- [listElements](listelements.md): The ordered array of `MERAWProcessingListElementParameter` which make up this list.

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
- [listElements](listelements.md): The ordered array of `MERAWProcessingListElementParameter` which make up this list.
