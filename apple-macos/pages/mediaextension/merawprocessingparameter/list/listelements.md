> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/list/listelements

# listElements (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The ordered array of `MERAWProcessingListElementParameter` which make up this list.

## Declaration

```swift
var listElements: [MERAWProcessingParameter.ListElement] { get }
```

## See Also

### Properties

- [currentValue](currentvalue.md): Get or set the current value for this parameter.
- [initialValue](initialvalue.md): The initial value for this parameter as defined in the sequence metadata.

# listElements (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The ordered array of `MERAWProcessingListElementParameter` which make up this list.

## Declaration

```objectivec
@property (readonly) NSArray<MERAWProcessingListElementParameter *> * listElements;
```

## See Also

### Properties

- [currentValue](currentvalue.md): Get or set the current value for this parameter.
- [initialValue](initialvalue.md): The initial value for this parameter as defined in the sequence metadata.
