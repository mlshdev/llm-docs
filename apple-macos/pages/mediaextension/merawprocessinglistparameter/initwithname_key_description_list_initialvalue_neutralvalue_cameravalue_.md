> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessinglistparameter/initwithname:key:description:list:initialvalue:neutralvalue:cameravalue:](https://developer.apple.com/documentation/mediaextension/merawprocessinglistparameter/initwithname:key:description:list:initialvalue:neutralvalue:cameravalue:)

# initWithName:key:description:list:initialValue:neutralValue:cameraValue:

**Interface language:** Objective-C

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Creates a list parameter object with the initial, neutral, and camera values.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name key:(NSString *) key description:(NSString *) description list:(NSArray<MERAWProcessingListElementParameter *> *) listElements initialValue:(NSInteger) initialValue neutralValue:(NSInteger) neutralValue cameraValue:(NSInteger) cameraValue;
```

## Parameters

- `name`: A localized human-readable name for the parameter, suitable for displaying in application UI.
- `key`: A unique key string identifying this parameter.
- `description`: A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- `listElements`: The ordered array of `MERAWProcessingListElementParameter` objects which make up this list.
- `initialValue`: The initial value of this parameter as defined in the sequence metadata.
- `neutralValue`: The neutral value of this parameter.
- `cameraValue`: The camera value for this parameter.

<a id="return-value"></a>

## Return Value

An instance of [MERAWProcessingListParameter](../merawprocessingparameter/list.md).

## See Also

### Creating a list parameter object

- [initWithName:key:description:list:initialValue:](initwithname_key_description_list_initialvalue_.md): Creates a list parameter object with the initial value.
- [initWithName:key:description:list:initialValue:cameraValue:](initwithname_key_description_list_initialvalue_cameravalue_.md): Creates a list parameter object with the initial and camera values.
- [initWithName:key:description:list:initialValue:neutralValue:](initwithname_key_description_list_initialvalue_neutralvalue_.md): Creates a list parameter object with the initial and neutral values.
