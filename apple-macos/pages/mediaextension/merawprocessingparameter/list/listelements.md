> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/list/listelements](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/list/listelements)

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
