> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/listelement/init(name:description:elementid:)](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/listelement/init(name:description:elementid:))

# init(name:description:elementID:) (Swift)

**Framework:** MediaExtension  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a list element parameter object with the element id value.

## Declaration

```swift
init(name: String, description: String, elementID: Int)
```

## Parameters

- `name`: A localized human-readable name for the parameter, suitable for displaying in application UI.
- `description`: A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- `elementID`: A unique number in the list which represents this list option.

<a id="return-value"></a>

## Return Value

An instance of [MERAWProcessingParameter.ListElement](../listelement.md).

# initWithName:description:elementID: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Creates a list element parameter object with the element id value.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name description:(NSString *) description elementID:(NSInteger) elementID;
```

## Parameters

- `name`: A localized human-readable name for the parameter, suitable for displaying in application UI.
- `description`: A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- `elementID`: A unique number in the list which represents this list option.

<a id="return-value"></a>

## Return Value

An instance of [MERAWProcessingListElementParameter](../listelement.md).
